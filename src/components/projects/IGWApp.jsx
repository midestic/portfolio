export default function IGWApp() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition z-10"
    >
      <h3 className="text-xl font-bold mb-2">
        IGW App(iGaming WriteNow) – iGaming Glossary & Localisation Platform
      </h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Designed and launched iGW App, a glossary and localisation tool used
            by iGaming writers, marketers, and brands to create compliant, SEO
            friendly content.
          </li>

          <li>
            Delivered 300+ expert terms with definitions, use cases, and country
            specific localisation checklists, helping users reduce compliance
            risks and expand into new markets safely.
          </li>

          <li>
            Built smart search, tagging, Term of the Day, and per-user progress
            tracking features that increased platform engagement and user
            retention.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
          (tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
            >
              {tech}
            </span>
          ),
        )}
      </div>

      <div className="flex justify-between items-center">
        <a
          href="https://app.igamingwritenow.com/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
