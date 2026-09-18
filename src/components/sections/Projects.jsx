export const Projects = () => {
  const projects = [
    {
      name: "Flospay",
      details: "11/2025 — Present · Thousands of users · Secure payments",
      href: "https://flospay.com/",
    },
    {
      name: "Pharmmar",
      details: "2025 — Present · Pharmaceutical marketplace · Buyer workflows",
      href: "https://pharmmar.com/",
    },
    {
      name: "LASBCA",
      details: "2026 — Present · Building compliance · Offline field workflows",
      href: "https://lasbca-ms.netlify.app/",
    },
    {
      name: "Wedding RSVP Platform",
      details: "05/2026 — 08/2026 · Guest management · Admin dashboard",
      href: "https://ola-dotun-2026.netlify.app/",
    },
    {
      name: "IGW App",
      details: "11/2025 — 01/2026 · 300+ terms · Compliance tooling",
      href: "https://app.igamingwritenow.com/",
    },
    {
      name: "Mahjeq",
      details: "10/2025 — 01/2026 · 35% efficiency gain · Paystack",
      href: "https://mahjeqfoods.com/",
    },
    {
      name: "Pharmmar Waitlist",
      details: "06/2025 — 11/2025 · SaaS landing page · Lead generation",
      href: "https://pharmmar.com/",
    },
  ];

  return (
    <section id="projects" className="editorial-section">
      <div className="section-heading">
        <span className="section-number">03 / Work</span>
        <div>
          <h2 className="section-title">
            Selected
            <br />
            projects.
          </h2>
          <a className="section-link" href="#contact">
            Have a project in mind? ↗
          </a>
        </div>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.name}>
            <span className="section-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{project.name}</h3>
            <p>{project.details}</p>
            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer">
                View ↗
              </a>
            ) : (
              <span className="project-status">Selected work</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
