export default function AboutEditorial() {
  const stack = [
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
    "Figma",
    "REST APIs",
    "Git",
    "GitHub",
    "React Native",
    "Docker",
    "TanStack Query",
    "Zustand",
  ];

  const experience = [
    [
      "01",
      "Flospay / Frontend Developer",
      "11/2025 — Present",
      [
        "Built core payment, group savings, P2P transfer, and secure payout experiences for a fintech platform serving thousands of users.",
        "Migrated authentication to HttpOnly session cookies, reducing XSS exposure and strengthening user trust and compliance readiness.",
        "Implemented idempotency keys across money-movement flows to prevent duplicate charges and support audit-safe transactions.",
      ],
    ],
    [
      "02",
      "IGW App / Full-Stack Developer",
      "11/2025 — 01/2026",
      [
        "Designed and launched a glossary and localisation platform that helps iGaming writers and brands create compliant, SEO-friendly content.",
        "Delivered 300+ expert terms with use cases and localisation checklists for Nigeria, Ghana, Kenya, South Africa, the UK, and Canada.",
        "Built smart search, tagging, Term of the Day, and progress tracking features to increase engagement and repeat usage.",
      ],
    ],
    [
      "03",
      "Mahjeq / Full-Stack Developer",
      "10/2025 — 01/2026",
      [
        "Built and shipped a live restaurant ordering platform covering customer orders, payments, operations, and real-time status tracking.",
        "Integrated Paystack, Google Maps, OTP verification, admin analytics, and dynamic order slips into one streamlined ordering journey.",
        "Improved operational efficiency by 35% while helping the restaurant increase completed orders and deliver a smoother customer experience.",
      ],
    ],
    [
      "04",
      "Pharmmar / Full-Stack Developer",
      "06/2025 — 11/2025",
      [
        "Built a mobile-first SaaS landing page for a B2B pharmaceutical marketplace, translating a complex product into a clear value proposition.",
        "Developed the waitlist flow and secure backend form handling to improve data accuracy, lead capture, and user trust.",
        "Created an early-access experience designed to increase qualified sign-ups and support the product's launch pipeline.",
      ],
    ],
  ];

  return (
    <>
      <section id="about" className="editorial-section">
        <div className="section-heading">
          <span className="section-number">01 / About</span>
          <h2 className="section-title">
            A developer
            <br />
            with range.
          </h2>
        </div>
        <div className="about-intro">
          <span className="eyebrow">A little context</span>
          <div>
            <p>
              I&apos;m Badmus O. Usman, a full-stack engineer with half a decade
              of experience building production SaaS and fintech products. I
              create secure payment systems, high-converting experiences, and
              scalable dashboards that improve trust, engagement, and revenue.
            </p>
            <div className="about-meta">
              <a href="/cv/Badmus-Usman.pdf" download="Badmus-Usman.pdf">
                Download resume ↗
              </a>
              <a href="#contact">Let&apos;s talk ↘</a>
            </div>
          </div>
        </div>
        <div className="stack-list" aria-label="Technology stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="credentials">
          <span>
            <strong>Education</strong> B.Sc. Building Technology · Federal
            University of Technology Akure · May 2024
          </span>
          <span>
            <strong>Service</strong> NYSC · June 2024 — June 2025
          </span>
        </div>
      </section>

      <section className="editorial-section">
        <div className="section-heading">
          <span className="section-number">02 / Experience</span>
          <h2 className="section-title">
            Work that
            <br />
            moves things.
          </h2>
        </div>
        <div className="experience-list">
          {experience.map(([number, title, date, bullets]) => (
            <article className="experience-row" key={number}>
              <span className="section-number">{number}</span>
              <h3>{title}</h3>
              <span className="experience-date">{date}</span>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
