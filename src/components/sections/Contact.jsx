import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, RuleLine } from "../anim";

const EASE = [0.16, 1, 0.3, 1];

const inputClass =
  "w-full border-b border-gray-light bg-transparent pb-4 text-[clamp(1rem,1.5vw,1.25rem)] font-medium text-black outline-none transition-colors placeholder:text-[#ccc] focus:border-black";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status.type !== "success") return undefined;
    const id = setTimeout(() => setStatus({ type: "", text: "" }), 6000);
    return () => clearTimeout(id);
  }, [status]);

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

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus({ type: "success", text: "Message sent. I'll be in touch soon." });
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({ type: "error", text: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-page px-[clamp(24px,5vw,80px)] py-[clamp(60px,8vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1.2fr_0.8fr] gap-[clamp(40px,8vw,160px)] max-lg:grid-cols-1">
        <div>
          <Eyebrow className="mb-10 text-rust" lineClass="bg-rust">
            Send a Message
          </Eyebrow>

          {status.type === "success" ? (
            <motion.div
              className="py-20"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <h3 className="mb-4 text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-[-0.03em] text-black uppercase">
                Thank You
              </h3>
              <p className="text-gray-dark">
                Your message landed safely. I&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <label
                  htmlFor="contact-email"
                  className="eyebrow mb-3 block text-gray"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={inputClass}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              >
                <label
                  htmlFor="contact-message"
                  className="eyebrow mb-3 block text-gray"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  className={`${inputClass} resize-none`}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="A few words about your project..."
                  rows="5"
                  required
                />
              </motion.div>

              {status.type === "error" && (
                <p className="text-[0.8125rem] text-[#b33]" role="alert">
                  {status.text}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="self-start bg-black px-14 py-5 text-[0.75rem] font-semibold tracking-[0.15em] text-off-white uppercase transition-colors hover:bg-[#222] disabled:cursor-not-allowed disabled:opacity-60"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </div>

        <motion.aside
          className="flex flex-col gap-10 max-lg:border-t max-lg:border-gray-light max-lg:pt-10"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
        >
          <Eyebrow className="text-gray" delay={0.3}>
            Contact Details
          </Eyebrow>

          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            <div>
              <p className="eyebrow mb-3 text-gray">Email</p>
              <a
                href="mailto:badmususman50@gmail.com"
                className="text-[clamp(0.9375rem,1.4vw,1.25rem)] font-semibold break-all transition-colors hover:text-gray-dark"
              >
                badmususman50@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3 text-gray">Phone</p>
              <a
                href="tel:+2349033414253"
                className="text-[clamp(0.9375rem,1.4vw,1.25rem)] font-semibold transition-colors hover:text-gray-dark"
              >
                +234 903 341 4253
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3 text-gray">Socials</p>
            <div className="flex gap-3">
              {[
                { label: "X", href: "https://x.com/midestic_JS" },
                {
                  label: "IN",
                  href: "https://www.linkedin.com/in/usman-badmus/",
                },
                { label: "GH", href: "https://github.com/midestic" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-sm border border-solid border-gray text-[0.6875rem] font-semibold tracking-[0.08em] text-gray-dark transition-colors hover:border-black hover:text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  whileHover={{ y: -3, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3 text-gray">Location</p>
            <p className="text-sm text-gray-dark">Lagos, Nigeria</p>
            <p className="text-sm text-gray-dark">Open to remote roles</p>
          </div>

          <RuleLine className="bg-gray-light" delay={0.5} />

          <div>
            <p className="eyebrow mb-3 text-gray">Availability</p>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34d399]" />
              <span className="text-sm text-gray-dark">
                Available for new opportunities
              </span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
