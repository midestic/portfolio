import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "../lib/scroll";

const LINKS = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Projects", href: "#projects" },
  { num: "03", label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "X", href: "https://x.com/midestic_JS" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/usman-badmus/" },
  { label: "GitHub", href: "https://github.com/midestic" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [origin, setOrigin] = useState({ x: "100%", y: "20%" });
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggle = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setOrigin({
        x: `${rect.left + rect.width / 2}px`,
        y: `${rect.top + rect.height / 2}px`,
      });
    }
    setOpen((prev) => !prev);
  };

  const handleLink = (event, href) => {
    event.preventDefault();
    setOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => scrollToSection(href), 120);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 z-[130] flex items-center justify-between px-[clamp(20px,5vw,80px)] pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 transition-colors duration-300 sm:pb-4 sm:pt-[max(1rem,env(safe-area-inset-top))] ${
          scrolled && !open ? "bg-black" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={(event) => handleLink(event, "#home")}
        >
          <span className="grid h-7 w-7 place-items-center border border-rust text-rust transition-colors duration-300 group-hover:bg-rust group-hover:text-off-white">
            <span className="text-[10px] font-bold tracking-tight">BU</span>
          </span>
          <span className="whitespace-nowrap text-[clamp(0.95rem,4vw,1.125rem)] font-semibold tracking-[-0.01em] text-off-white">
            Badmus Usman
          </span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          className="grid h-11 w-11 shrink-0 place-content-center gap-[6px] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
        >
          <motion.span
            className="block h-[2px] w-6 bg-off-white"
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="block h-[2px] w-6 bg-off-white"
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="primary-navigation"
            aria-label="Main navigation"
            className="fixed inset-0 z-[120] flex min-h-0 bg-black [will-change:clip-path]"
            initial={{ clipPath: `circle(0% at ${origin.x} ${origin.y})` }}
            animate={{ clipPath: `circle(150% at ${origin.x} ${origin.y})` }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex min-h-full flex-1 flex-col justify-center overflow-y-auto overscroll-contain px-[clamp(20px,5vw,80px)] pt-20 pb-[calc(2rem+env(safe-area-inset-bottom))] max-lg:justify-center">
              <motion.p
                className="eyebrow mb-6 text-[#555] sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Navigation
              </motion.p>
              <div className="flex flex-col">
                {LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      className="group flex min-h-16 items-center sm:min-h-20"
                      onClick={(event) => handleLink(event, link.href)}
                    >
                      <span                       className="py-4 pr-4 font-mono text-[0.625rem] tabular-nums text-[#444] sm:pr-8">
                        {link.num}
                      </span>
                      <span                       className="py-4 pl-4 text-[clamp(2.5rem,11vw,5.5rem)] leading-none font-extrabold tracking-[-0.04em] text-off-white uppercase transition-all duration-300 group-hover:pl-8 group-hover:text-[#666] sm:pl-8 sm:py-6 sm:group-hover:pl-12">
                        {link.label}
                      </span>
                      <span className="ml-auto text-[clamp(1.5rem,3vw,2.5rem)] text-[#333] transition-all duration-300 group-hover:translate-x-[-8px] group-hover:text-[#666]">
                        →
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 border-t border-[#222] pt-6 lg:hidden">
                <p className="eyebrow mb-3 text-[#555]">Get in touch</p>
                <a
                  href="mailto:badmususman50@gmail.com"
                  className="block min-h-11 break-all py-2 text-sm text-[#aaa] transition-colors hover:text-off-white"
                >
                  badmususman50@gmail.com
                </a>
                <a
                  href="tel:+2349033414253"
                  className="block min-h-11 py-2 text-sm text-[#aaa] transition-colors hover:text-off-white"
                >
                  +234 903 341 4253
                </a>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-11 py-3 text-xs font-medium tracking-[0.05em] text-[#777] transition-colors hover:text-off-white"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="hidden w-[320px] border-l border-[#222] px-10 lg:flex lg:flex-col lg:justify-end lg:pb-[clamp(48px,8vw,100px)]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mb-10">
                <p className="eyebrow mb-4 text-[#555]">Get in touch</p>
                <a
                  href="mailto:badmususman50@gmail.com"
                  className="block text-sm text-[#777] transition-colors hover:text-off-white"
                >
                  badmususman50@gmail.com
                </a>
                <a
                  href="tel:+2349033414253"
                  className="mt-1 block text-sm text-[#777] transition-colors hover:text-off-white"
                >
                  +234 903 341 4253
                </a>
              </div>
              <div>
                <p className="eyebrow mb-4 text-[#555]">Social</p>
                <div className="flex gap-5">
                  {SOCIALS.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium tracking-[0.05em] text-[#777] transition-colors hover:text-off-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                    >
                      {social.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
