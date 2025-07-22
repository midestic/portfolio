export default function Pharmmar() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition"
    >
      <h3 className="text-xl font-bold mb-2">
        💊 Pharmmar Pharmaceutical Marketplace Startup
      </h3>
      <p className="text-gray-400 mb-4">
        <p>
          Pharmmar is a pharmaceutical marketplace startup focused on bridging
          the gap between pharmacies, suppliers, and consumers through a
          streamlined online platform. As the frontend engineer, I’m helping
          bring the product vision to life by building fast, accessible, and
          responsive user interfaces.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Collaborating with the design and backend teams to build features
            like product listings, real-time search, and secure checkout flows.
          </li>

          <li>
            Ensuring pixel-perfect UI implementation and smooth user experiences
            across devices.
          </li>

          <li>
            GitHub repository is private; project is under active development
            with new features being rolled out incrementally.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Next.js", "Typescript", "Tailwind CSS", "Shadcn", "Nodejs"].map(
          (tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
            >
              {tech}
            </span>
          )
        )}
      </div>

      <div className="flex justify-between items-center">
        <a
          href="https://startup-product.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
