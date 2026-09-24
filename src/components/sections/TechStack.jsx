import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RuleLine } from "../anim";

const PANELS = [
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Shadcn UI",
  ],
  [
    "Figma",
    "REST APIs",
    "Git",
    "GitHub",
    "React Native",
    "Docker",
    "TanStack Query",
    "Zustand",
    "Paystack",
    "Vercel",
    "Firebase",
    "Linux",
  ],
];

export default function TechStack() {
  const [panel, setPanel] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPanel((p) => (p + 1) % PANELS.length), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-page px-[clamp(24px,5vw,80px)] pb-[clamp(48px,6vw,80px)]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-[clamp(2rem,4vw,3.5rem)] flex items-end justify-between">
          <motion.p
            className="eyebrow text-rust"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack
          </motion.p>
          <div className="flex gap-2">
            {PANELS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Panel ${i + 1}`}
                onClick={() => setPanel(i)}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  panel === i ? "bg-rust" : "bg-[#bbb]"
                }`}
              />
            ))}
          </div>
        </div>
        <RuleLine className="bg-[#c8c8c8]" />
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={panel}
              className="grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {PANELS[panel].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex h-[clamp(72px,9vw,100px)] items-center justify-center border-r border-b border-[#c8c8c8] lg:[&:nth-child(4n)]:border-r-0 sm:max-lg:[&:nth-child(3n)]:border-r-0 max-sm:[&:nth-child(2n)]:border-r-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <motion.span
                    className="cursor-default text-[0.8125rem] font-medium tracking-[0.08em] text-gray-dark uppercase select-none"
                    whileHover={{ scale: 1.15, color: "#983520" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
