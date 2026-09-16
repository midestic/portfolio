export const Projects = () => {
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
        <article className="project-row">
          <span className="section-number">01</span>
          <h3>Flospay</h3>
          <p>11/2025 — Present · Thousands of users · Secure payments</p>
          <a href="https://flospay.com/" target="_blank" rel="noreferrer">
            View ↗
          </a>
        </article>
        <article className="project-row">
          <span className="section-number">02</span>
          <h3>IGW App</h3>
          <p>11/2025 — 01/2026 · 300+ terms · Compliance tooling</p>
          <a
            href="https://app.igamingwritenow.com/"
            target="_blank"
            rel="noreferrer"
          >
            View ↗
          </a>
        </article>
        <article className="project-row">
          <span className="section-number">03</span>
          <h3>Mahjeq</h3>
          <p>10/2025 — 01/2026 · 35% efficiency gain · Paystack</p>
          <a href="https://mahjeqfoods.com/" target="_blank" rel="noreferrer">
            View ↗
          </a>
        </article>
        <article className="project-row">
          <span className="section-number">04</span>
          <h3>Pharmmar</h3>
          <p>06/2025 — 11/2025 · Waitlist growth · B2B marketplace</p>
          <a href="https://pharmmar.com/" target="_blank" rel="noreferrer">
            View ↗
          </a>
        </article>
      </div>
    </section>
  );
};
