import { motion } from "framer-motion";
import { Eyebrow } from "../anim";

const EASE = [0.16, 1, 0.3, 1];

const EXPERIENCE = [
  {
    num: "01",
    title: "Flospay / Frontend Developer",
    date: "11/2025 — Present",
    bullets: [
      "Built core payment, group savings, P2P transfer, and secure payout experiences for a fintech platform serving thousands of users.",
      "Migrated authentication to HttpOnly session cookies, reducing XSS exposure and strengthening user trust and compliance readiness.",
      "Implemented idempotency keys across money-movement flows to prevent duplicate charges and support audit-safe transactions.",
    ],
  },
  {
    num: "02",
    title: "IGW App / Full-Stack Developer",
    date: "11/2025 — 01/2026",
    bullets: [
      "Designed and launched a glossary and localisation platform that helps iGaming writers and brands create compliant, SEO-friendly content.",
      "Delivered 300+ expert terms with use cases and localisation checklists for Nigeria, Ghana, Kenya, South Africa, the UK, and Canada.",
      "Built smart search, tagging, Term of the Day, and progress tracking features to increase engagement and repeat usage.",
    ],
  },
  {
    num: "03",
    title: "Mahjeq / Full-Stack Developer",
    date: "10/2025 — 01/2026",
    bullets: [
      "Built and shipped a live restaurant ordering platform covering customer orders, payments, operations, and real-time status tracking.",
      "Integrated Paystack, Google Maps, OTP verification, admin analytics, and dynamic order slips into one streamlined ordering journey.",
      "Improved operational efficiency by 35% while helping the restaurant increase completed orders and deliver a smoother customer experience.",
    ],
  },
  {
    num: "04",
    title: "Pharmmar / Full-Stack Developer",
    date: "06/2025 — 11/2025",
    bullets: [
      "Built a mobile-first SaaS landing page for a B2B pharmaceutical marketplace, translating a complex product into a clear value proposition.",
      "Developed the waitlist flow and secure backend form handling to improve data accuracy, lead capture, and user trust.",
      "Created an early-access experience designed to increase qualified sign-ups and support the product's launch pipeline.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black px-[clamp(24px,5vw,80px)] py-[clamp(60px,8vw,120px)]"
    >
      <div className="mx-auto max-w-[1400px]">
        <Eyebrow className="mb-[clamp(2rem,5vw,4rem)] text-off-white" lineClass="bg-rust">
          Experience
        </Eyebrow>

        <div className="border-t border-[#222]">
          {EXPERIENCE.map((job, i) => (
            <div key={job.num}>
              <motion.div
                className="relative flex items-start overflow-visible py-[clamp(24px,3.5vw,44px)] gap-[clamp(16px,3vw,40px)] max-sm:flex-col max-sm:gap-3"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
              >
                <span className="pt-1.5 font-mono text-[0.625rem] tabular-nums text-rust">
                  {job.num}
                </span>
                <div className="flex w-full items-start justify-between gap-[clamp(20px,4vw,60px)] max-sm:flex-col max-sm:gap-3">
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <motion.h3
                        className="text-[clamp(1.25rem,2.2vw,2rem)] leading-none font-extrabold tracking-[-0.03em] text-off-white uppercase"
                        initial={{ y: "100%" }}
                        whileInView={{ y: "0%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: EASE }}
                      >
                        {job.title}
                      </motion.h3>
                    </div>
                    <span className="mt-2 inline-block font-mono text-[0.6875rem] tracking-[0.04em] text-rust uppercase">
                      {job.date}
                    </span>
                  </div>
                  <motion.ul
                    className="max-w-[440px] space-y-2 text-[0.875rem] leading-[1.7] text-[#666]"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: EASE }}
                  >
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
              <motion.div
                className="h-px bg-[#222]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: EASE }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.6875rem] tracking-[0.08em] text-[#555] uppercase">
          <span>
            <strong className="mr-2 font-medium text-off-white">Education</strong>
            B.Sc. Building Technology · Federal University of Technology Akure ·
            May 2024
          </span>
          <span>
            <strong className="mr-2 font-medium text-off-white">Service</strong>
            NYSC · June 2024 — June 2025
          </span>
        </div>
      </div>
    </section>
  );
}
