export default function Recipe() {
  return (
    <div
      className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
    >
      <h3 className="text-xl font-bold mb-2">Food Recipe App</h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Developed a responsive web application using React that allows users
            to search for and view detailed recipes.
          </li>

          <li>
            {" "}
            Implemented a dynamic search bar, an interactive food map, and a
            detailed food information modal for an enhanced user experience.
          </li>

          <li>
            Integrated the Spoonacular API to fetch real-time recipe data,
            including ingredients, nutritional information, and preparation
            steps.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["React", "CSS Modules", "Spoonacular API"].map((tech, key) => (
          <span
            key={key}
            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          href="https://recipe-app-dusky-gamma.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        <a
          href="https://github.com/midestic/recipe-app"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
