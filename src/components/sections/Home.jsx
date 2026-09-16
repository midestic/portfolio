import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  const marqueeItems = [
    "Digital product builder",
    "Frontend experiences",
    "Scalable backend systems",
    "Secure APIs",
    "Fintech engineering",
    "Full-stack development",
  ];

  return (
    <section id="home" className="hero">
      <RevealOnScroll>
        <div className="hero-inner">
          <p className="eyebrow hero-location">Based in Lagos, NG</p>
          <div className="hero-copy">
            <p className="eyebrow">Full-stack engineer / builder</p>
            <h1>
              I turn ideas
              <br />
              <em>into useful products.</em>
            </h1>
            <p className="hero-description">
              I&apos;m Badmus O. Usman, a full-stack engineer with half a decade
              of experience building secure SaaS and fintech products for
              thousands of users.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="text-link">
                Explore selected work <span>↘</span>
              </a>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/usman-badmus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/midestic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/midestic_JS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <p className="eyebrow hero-scroll">Scroll ↓</p>
        </div>
      </RevealOnScroll>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
