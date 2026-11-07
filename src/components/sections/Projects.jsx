import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Eyebrow } from "../anim";

const EASE = [0.16, 1, 0.3, 1];

const PROJECTS = [
  {
    name: "Flospay",
    year: "2025 — Present",
    category: "Fintech",
    stack: "Secure payments",
    description:
      "A fintech platform for digital payments, group savings, peer-to-peer transfers, and secure payouts.",
    href: "https://flospay.com/",
    img: "project-img-1",
    letter: "F",
  },
  {
    name: "Pharmmar",
    year: "2025 — Present",
    category: "Marketplace",
    stack: "Buyer workflows",
    description:
      "A pharmaceutical marketplace that streamlines product discovery and purchasing for buyers.",
    href: "https://pharmmar-customers.on.helicarrier.xyz/",
    img: "project-img-2",
    letter: "P",
  },
  {
    name: "LASBCA",
    year: "2026 — Present",
    category: "Civic tech",
    stack: "Field workflows",
    description:
      "A civic-tech platform built to support LASBCA field operations and workflows.",
    href: "https://lasbca-ms.netlify.app/",
    img: "project-img-3",
    letter: "L",
  },
  {
    name: "Wedding RSVP Platform",
    year: "2026",
    category: "Events",
    stack: "Guest management",
    description:
      "A wedding RSVP experience for inviting guests and keeping attendance details organized.",
    href: "https://ola-dotun-2026.netlify.app/",
    img: "project-img-4",
    letter: "W",
  },
  {
    name: "IGW App",
    year: "2025 — 2026",
    category: "EdTech",
    stack: "Compliance tooling",
    description:
      "A glossary and localization platform that helps iGaming writers create compliant content.",
    href: "https://app.igamingwritenow.com/",
    img: "project-img-5",
    letter: "I",
  },
  {
    name: "Mahjeq",
    year: "2025 — 2026",
    category: "Food tech",
    stack: "Paystack · 35% lift",
    description:
      "An online restaurant ordering platform with payments, order tracking, and operational tools.",
    href: "https://mahjeqfoods.com/",
    img: "project-img-6",
    letter: "M",
  },
  {
    name: "Pharmmar Waitlist",
    year: "2025",
    category: "SaaS",
    stack: "Lead generation",
    description:
      "A product landing page and waitlist to introduce Pharmmar and collect early-access sign-ups.",
    href: "https://pharmmar.com/",
    img: "project-img-7",
    letter: "P",
  },
  {
    name: "Midestic RN Library",
    year: "2026 — Present",
    category: "Open source",
    stack: "React Native · NativeWind",
    description:
      "A React Native component library with a CLI to add editable, NativeWind-ready UI to your app.",
    href: "https://midestic-rn-library.netlify.app/",
    img: "project-img-8",
    letter: "M",
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 150, damping: 20 });
  const springY = useSpring(my, { stiffness: 150, damping: 20 });
  const imgX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const imgY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2 * 0.5);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2 * 0.5);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${index % 2 === 1 ? "lg:mt-[clamp(40px,6vw,100px)]" : ""}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay: (index % 4) * 0.15, ease: EASE }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative aspect-[3/2] overflow-hidden rounded-2xl"
      >
        <motion.div
          className="absolute inset-0 z-[3] bg-black"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3 + (index % 4) * 0.15,
            ease: EASE,
          }}
          style={{ transformOrigin: "right" }}
        />
        <motion.div
          className={`project-img ${project.img} absolute -inset-[5%] h-[110%] w-[110%]`}
          style={{ x: imgX, y: imgY }}
        >
          <div className="absolute inset-0 grid place-items-center">
            <span className="select-none text-[clamp(5rem,14vw,11rem)] leading-none font-black text-white/10 uppercase">
              {project.letter}
            </span>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-[2] flex items-end justify-between bg-black/0 p-[clamp(16px,2vw,28px)] transition-colors duration-500 group-hover:bg-black/30">
          <span className="translate-y-4 text-[0.75rem] font-semibold tracking-[0.15em] text-off-white uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Project
          </span>
          <span className="translate-y-4 text-lg text-off-white opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            →
          </span>
        </div>
      </div>

      <div className="pt-[clamp(12px,1.5vw,20px)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-baseline gap-[clamp(8px,1vw,14px)]">
            <span className="font-mono text-[0.625rem] tabular-nums text-rust">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[clamp(1.25rem,2.2vw,2rem)] font-extrabold text-off-white transition-colors duration-300 group-hover:text-rust-light">
              {project.name}
            </h3>
          </div>
          <span className="max-sm:hidden font-mono text-[0.6875rem] tracking-[0.08em] text-[#555] uppercase">
            {project.year}
          </span>
        </div>
        <div className="mt-2.5 ml-[calc(clamp(8px,1vw,14px)+1.1em)] flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[0.75rem] tracking-[0.08em] text-[#555] uppercase">
            {project.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-rust" />
          <span className="font-mono text-[0.75rem] text-[#555]">
            {project.stack}
          </span>
        </div>
        <p className="mt-3 ml-[calc(clamp(8px,1vw,14px)+1.1em)] max-w-[560px] text-[0.875rem] leading-[1.7] text-[#999]">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black px-[clamp(24px,5vw,80px)] pb-[clamp(30px,4vw,120px)]"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="mb-[clamp(2rem,5vw,4rem)] flex items-end justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Eyebrow className="text-rust" lineClass="bg-rust">
            Recent Projects
          </Eyebrow>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border-b border-[#333] pb-1 text-right text-[0.6875rem] font-semibold tracking-[0.1em] text-off-white uppercase transition-colors duration-300 hover:border-rust hover:text-rust-light sm:text-[0.75rem] sm:tracking-[0.15em]"
          >
            Have a project in mind?
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-[clamp(16px,2.5vw,32px)] gap-y-[clamp(32px,5vw,64px)] max-lg:grid-cols-1">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
