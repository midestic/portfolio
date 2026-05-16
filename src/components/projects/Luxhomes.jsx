export default function Luxhomes() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition z-10"
    >
      <h3 className="text-xl font-bold mb-2">
        Luxhomes – Property Management Platform
      </h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Developed Luxhomes, a complete property management platform for
            hosts and admins in the vacation rental and real estate sector.
          </li>

          <li>
            Designed RESTful APIs for property management, image uploads, and
            admin approval workflows, significantly streamlining operations and
            reducing manual workload.
          </li>

          <li>
            Built responsive Admin and Host dashboards with role-based access,
            real-time updates, and detail sheets, improving productivity for
            both hosts and platform administrators.
          </li>

          <li>
            Implemented server-side protection and optimistic updates, creating
            a secure, maintainable system that supports scalable real estate
            operations.
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
          href="https://luxhome.archsaintnexus.com/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
