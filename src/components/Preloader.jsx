import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { runPreloaderScene } from "../lib/scene";

export default function Preloader({ onComplete }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const stop = runPreloaderScene(canvasRef.current, onComplete);
    return () => {
      stop();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black"
      style={{ transformOrigin: "50% 42%" }}
      exit={{ opacity: 0, scale: 1.16 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" aria-hidden="true" />
    </motion.div>
  );
}

Preloader.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
