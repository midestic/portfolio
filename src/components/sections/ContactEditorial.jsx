import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactEditorial() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      const result = await response.json();

      if (!response.ok)
        throw new Error(result.error || "Unable to send your message.");

      setStatus({
        type: "success",
        text: "Message sent. I'll be in touch soon.",
      });
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({ type: "error", text: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer id="contact" className="editorial-section contact-section">
        <div className="contact-copy">
          <span className="eyebrow">04 / Contact</span>
          <h2>
            Have an idea?
            <br />
            <em>Let&apos;s talk.</em>
          </h2>
          <button
            className="contact-email"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            Start a conversation ↗
          </button>
        </div>
        <div className="footer-line">
          <span>Badmus Usman · Lagos, NG</span>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/usman-badmus/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/midestic"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/midestic_JS"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FaTwitter />
            </a>
          </div>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>
      </footer>

      {isOpen && (
        <div className="contact-modal" role="presentation">
          <div
            className="contact-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              className="contact-modal-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact form"
            >
              ×
            </button>
            <span className="eyebrow">04 / Start a conversation</span>
            <h2 id="contact-modal-title">
              Tell me what you&apos;re
              <br />
              <em>building.</em>
            </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="A few words about your project..."
                rows="5"
                required
              />
              <button
                className="contact-submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message ↗"}
              </button>
              {status.text && (
                <p className={`contact-status ${status.type}`} role="status">
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
