export default function Lapo() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition"
    >
      <h3 className="text-xl font-bold mb-2">LAPO APP DASHBOARD</h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            The LAPO App Dashboard is a data visualization and management tool
            built using React.js. It provides users with an intuitive interface
            to monitor key metrics and insights efficiently.
          </li>

          <li>
            Data Visualization – The dashboard includes bar charts, pie charts,
            and line charts to display trends, comparisons, and distributions
            effectively.
          </li>

          <li>
            Tables for Structured Data – Users can view detailed data records in
            well-organized tables, enhancing readability and decision-making.
          </li>

          <li>
            Interactive UI – Built with React.js, ensuring smooth performance
            and a responsive experience.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["React", "BootStrap", "Chart.js", "Recharts"].map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a
          href="https://lapoapp.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        <a
          href="https://github.com/midestic/lapoapp"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
