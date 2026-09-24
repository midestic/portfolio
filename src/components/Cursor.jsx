import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SELECTOR = "a, button, input, textarea, select, [data-cursor]";

export default function Cursor() {
  const [enabled, setEnabled] = useState(true);
  const [size, setSize] = useState(16);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const disable = () => setEnabled(false);
    window.addEventListener("touchstart", disable, { once: true, passive: true });
    return () => window.removeEventListener("touchstart", disable);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target instanceof Element ? e.target.closest(SELECTOR) : null;
      setSize(target ? 48 : 16);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full bg-white mix-blend-difference"
      style={{ x: sx, y: sy, marginLeft: -size / 2, marginTop: -size / 2 }}
      animate={{ width: size, height: size }}
      transition={{ duration: 0.15 }}
      aria-hidden="true"
    />
  );
}
