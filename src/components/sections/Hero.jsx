import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { runHeroScene } from "../../lib/scene";

const MARQUEE = [
  "Digital product builder",
  "Frontend experiences",
  "Scalable backend systems",
  "Secure APIs",
  "Fintech engineering",
  "Full-stack development",
];

const EASE = [0.16, 1, 0.3, 1];

export default function Hero({ ready }) {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const labelsOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const stop = runHeroScene(canvasRef.current);
    return stop;
  }, []);

  const track = [...MARQUEE, ...MARQUEE];

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-screen flex-col bg-black">
      <div className="grain pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="relative flex-1 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 block h-full w-full"
          aria-hidden="true"
        />
        <motion.div
          className="absolute right-12 bottom-8 left-12 z-[1] flex items-end justify-between max-lg:right-6 max-lg:bottom-6 max-lg:left-6"
          style={{ opacity: labelsOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
          >
            <p className="text-[0.6875rem] font-medium tracking-[0.12em] text-white/50 uppercase">
              Based in Lagos, NG
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.1, delay: 0.28, ease: EASE }}
          >
            <p className="text-[0.6875rem] font-medium tracking-[0.12em] text-white/50 uppercase">
              Scroll ↓
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-[1] overflow-hidden border-t border-white/10"
        initial={{ opacity: 0, y: 24 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 1, delay: 0.4, ease: EASE }}
      >
        <motion.div
          className="flex flex-nowrap py-[clamp(14px,2vw,20px)] whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {track.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center">
              <span className="mx-[clamp(20px,3vw,40px)] text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold tracking-[0.2em] text-off-white uppercase">
                {item}
              </span>
              <span className="text-[0.5rem] text-[#555]">●</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

Hero.propTypes = {
  ready: PropTypes.bool.isRequired,
};
