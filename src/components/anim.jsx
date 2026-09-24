import PropTypes from "prop-types";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export function WordReveal({ text, className = "", delay = 0, stagger = 0.04 }) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE }}
            style={{ marginRight: "0.3em", display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function RuleLine({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`h-px ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay, ease: EASE }}
      style={{ transformOrigin: "left" }}
    />
  );
}

export function Eyebrow({ children, className = "", lineClass = "", delay = 0 }) {
  return (
    <motion.div
      className={`flex items-center gap-4 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      <RuleLine className={`w-12 shrink-0 ${lineClass}`} delay={delay} />
      <p className={`eyebrow ${children ? "" : "hidden"}`}>{children}</p>
    </motion.div>
  );
}

WordReveal.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  stagger: PropTypes.number,
};

RuleLine.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
};

Eyebrow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  lineClass: PropTypes.string,
  delay: PropTypes.number,
};
