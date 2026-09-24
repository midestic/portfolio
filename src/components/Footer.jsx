import { motion } from "framer-motion";
import { FiMail as Mail } from "react-icons/fi";

const SOCIALS = [
  { label: "X (Twitter)", href: "https://x.com/midestic_JS" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/usman-badmus/" },
  { label: "GitHub", href: "https://github.com/midestic" },
];

const EASE = [0.16, 1, 0.3, 1];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="relative mx-auto max-w-[1400px] px-[clamp(20px,5vw,80px)] pt-[clamp(72px,10vw,120px)] pb-10">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="mb-14 text-[clamp(2rem,4vw,3.8rem)] leading-[1.3] font-extrabold tracking-[-0.03em] text-off-white">
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>

            <div className="mt-[clamp(20px,3vw,28px)] flex flex-wrap items-center gap-6">
              <a
                href="mailto:badmususman50@gmail.com"
                aria-label="Start a conversation via email"
                className="inline-flex items-center gap-2 rounded-full bg-off-white px-[22px] py-[14px] text-[0.95rem] font-semibold text-black transition-colors hover:bg-white"
              >
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="tel:+2349033414253"
                className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-[#aaa] transition-colors hover:text-off-white"
              >
                +234 903 341 4253
              </a>
            </div>

            <div className="mt-[clamp(40px,6vw,64px)] flex flex-wrap gap-6 text-[0.75rem] text-[#777]">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-off-white"
                >
                  {social.label}
                </a>
              ))}
              <span className="text-[#777]">
                © {new Date().getFullYear()} Badmus Usman
              </span>
            </div>
          </motion.div>

          <div className="relative flex h-32 items-end justify-end md:h-auto">
            <a
              href="mailto:badmususman50@gmail.com"
              aria-label="Available for work — send an email"
              className="relative grid h-[108px] w-[108px] place-items-center rounded-full"
            >
              <motion.svg
                viewBox="0 0 100 100"
                className="block h-full w-full text-[#888]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              >
                <defs>
                  <path
                    id="footer-circle"
                    d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  />
                </defs>
                <text fontSize="8" fill="currentColor" fontWeight="600">
                  <textPath
                    href="#footer-circle"
                    textLength="226"
                    lengthAdjust="spacing"
                  >
                    AVAILABLE FOR WORK · AVAILABLE FOR WORK ·
                  </textPath>
                </text>
              </motion.svg>
              <span className="absolute inset-0 rounded-full border border-[#1a1a1a]" />
              <span className="absolute inset-[18px] grid place-items-center rounded-full border border-[#1a1a1a] bg-[#0e0e0e] text-off-white">
                <Mail className="text-xl" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
