const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character],
  );
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { email, message } = request.body || {};

  if (!emailPattern.test(email || "") || !message?.trim()) {
    return response
      .status(400)
      .json({ error: "Enter a valid email and message." });
  }

  if (message.trim().length > 5000) {
    return response.status(400).json({ error: "Your message is too long." });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return response
      .status(500)
      .json({ error: "Email service is not configured yet." });
  }

  const senderEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>";
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email.trim(),
        subject: `Portfolio message from ${email.trim()}`,
        html: `<p><strong>From:</strong> ${safeEmail}</p><p>${safeMessage}</p>`,
      }),
    });

    if (!resendResponse.ok) {
      const providerError = await resendResponse.json().catch(() => null);
      const detail = providerError?.message || providerError?.name;

      return response.status(502).json({
        error:
          process.env.NODE_ENV === "production"
            ? "Resend could not deliver the message."
            : detail || "Resend could not deliver the message.",
      });
    }

    return response.status(200).json({ message: "Message sent successfully." });
  } catch {
    return response
      .status(500)
      .json({ error: "Unable to send your message right now." });
  }
}
