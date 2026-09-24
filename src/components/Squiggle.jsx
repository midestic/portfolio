import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Squiggle() {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 130, damping: 28 });
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setDims({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const unsubscribe = smooth.on("change", (v) => {
      const path = pathRef.current;
      if (!path || dims.w === 0) return;
      const samples = 64;
      const points = [];
      for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const yBase = t * dims.h;
        const wave =
          Math.sin(t * Math.PI * 3 + v * Math.PI * 4) * dims.w * 0.16 +
          Math.sin(t * Math.PI * 7 + v * Math.PI * 2) * dims.w * 0.05;
        points.push(`${i === 0 ? "M" : "L"} ${dims.w / 2 + wave} ${yBase}`);
      }
      path.setAttribute("d", points.join(" "));
    });
    return unsubscribe;
  }, [smooth, dims]);

  if (dims.w === 0) {
    return <div ref={wrapRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" />;
  }

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${dims.w} ${dims.h}`}
        preserveAspectRatio="none"
      >
        <motion.path
          ref={pathRef}
          stroke="#a8331b"
          strokeOpacity={0.2}
          strokeWidth={26}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
