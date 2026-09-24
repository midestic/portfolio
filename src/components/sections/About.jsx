import { motion } from "framer-motion";
import {
  FiArrowUpRight as ArrowUpRight,
  FiDownload as Download,
} from "react-icons/fi";
import { Eyebrow, WordReveal } from "../anim";

const EASE = [0.16, 1, 0.3, 1];

export default function About() {
  return (
    <section
      id="about"
      className="bg-page px-[clamp(24px,5vw,80px)] py-[clamp(60px,8vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 items-start gap-x-[clamp(40px,6vw,120px)] max-lg:flex max-lg:flex-col max-lg:gap-8">
        <Eyebrow className="lg:col-start-1 lg:row-start-1 text-rust">
          About Me
        </Eyebrow>

        <div className="relative h-170 w-full overflow-hidden max-lg:aspect-square max-lg:h-auto max-lg:w-4/5 max-lg:rounded-2xl lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <motion.div
            className="absolute inset-0 z-10 bg-page"
            initial={{ x: "0%" }}
            whileInView={{ x: "101%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
          />
          <motion.div
            className="absolute inset-0 bg-[#0f0f0f]"
            initial={{ scale: 1.4 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
          >
            <img
              src="/images/me.jpeg"
              alt="Badmus Usman"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <div className="mb-4 text-[clamp(1.375rem,2.5vw,2.125rem)] leading-[1.35] font-semibold tracking-[-0.02em] text-black md:mb-8">
            <WordReveal
              text="I'm Badmus Usman, a full-stack engineer with half a decade of experience building production SaaS and fintech products."
              stagger={0.035}
            />
          </div>
          <motion.p
            className="mb-4 max-w-[440px] text-[0.9375rem] leading-[1.8] font-normal text-gray-dark md:mb-10"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I create secure payment systems, high-converting experiences, and
            scalable dashboards that improve trust, engagement, and revenue.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="#experience"
              className="group inline-flex w-fit items-center gap-3"
            >
              <span className="link-label">My experience</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <div className="h-3" />
            <a
              href="/cv/Badmus-Usman.pdf"
              download="Badmus-Usman.pdf"
              className="group inline-flex w-fit items-center gap-3"
            >
              <span className="link-label">Download resume</span>
              <Download
                size={17}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
