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
        className={`fixed top-0 right-0 left-0 z-[130] flex items-center justify-between px-[clamp(24px,5vw,80px)] py-5 transition-colors duration-300 ${
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
          <span className="text-lg font-semibold tracking-[-0.01em] text-off-white">
            Badmus Usman
          </span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex w-7 flex-col gap-[6px]"
        >
          <motion.span
            className="block h-[2px] w-full bg-off-white"
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="block h-[2px] w-full bg-off-white"
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-[120] flex bg-black [will-change:clip-path]"
            initial={{ clipPath: `circle(0% at ${origin.x} ${origin.y})` }}
            animate={{ clipPath: `circle(150% at ${origin.x} ${origin.y})` }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-1 flex-col justify-center px-[clamp(24px,5vw,80px)] pb-[clamp(48px,8vw,100px)] max-lg:justify-center">
              <motion.p
                className="eyebrow mb-12 text-[#555]"
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
                    transition={{ duration: 0.7, delay: 0.35 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center"
                      onClick={(event) => handleLink(event, link.href)}
                    >
                      <span className="py-6 pr-8 font-mono text-[0.625rem] tabular-nums text-[#444]">
                        {link.num}
                      </span>
                      <span className="py-6 pl-8 text-[clamp(2.5rem,7vw,5.5rem)] leading-none font-extrabold tracking-[-0.04em] text-off-white uppercase transition-all duration-300 group-hover:pl-12 group-hover:text-[#666]">
                        {link.label}
                      </span>
                      <span className="ml-auto text-[clamp(1.5rem,3vw,2.5rem)] text-[#333] transition-all duration-300 group-hover:translate-x-[-8px] group-hover:text-[#666]">
                        →
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="hidden w-[320px] border-l border-[#222] px-10 lg:flex lg:flex-col lg:justify-end lg:pb-[clamp(48px,8vw,100px)]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
