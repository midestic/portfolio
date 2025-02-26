import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                NAPTIP CDS Group (National Youth Service Corps){" "}
              </h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Designed and developed a website for the NAPTIP Community
                    Development Service (CDS) group.
                  </li>

                  <li>
                    Enhanced the group's online presence and accessibility of
                    resources.
                  </li>

                  <li>
                    {" "}
                    Implemented user-friendly navigation and responsive design.
                    Showcased updates, events, and awareness campaigns on human
                    trafficking.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "BootStrap", "Firebase"].map((tech, key) => (
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
                  href="https://naptip-ikd.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">LAPO APP DASHBOARD</h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    The LAPO App Dashboard is a data visualization and
                    management tool built using React.js. It provides users with
                    an intuitive interface to monitor key metrics and insights
                    efficiently.
                  </li>

                  <li>
                    Data Visualization – The dashboard includes bar charts, pie
                    charts, and line charts to display trends, comparisons, and
                    distributions effectively.
                  </li>

                  <li>
                    Tables for Structured Data – Users can view detailed data
                    records in well-organized tables, enhancing readability and
                    decision-making.
                  </li>

                  <li>
                    Interactive UI – Built with React.js, ensuring smooth
                    performance and a responsive experience.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "BootStrap", "Chart.js", "Recharts"].map(
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
                  href="https://lapoapp.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

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
                    Developed a responsive web application using React that
                    allows users to search for and view detailed recipes.
                  </li>

                  <li>
                    {" "}
                    Implemented a dynamic search bar, an interactive food map,
                    and a detailed food information modal for an enhanced user
                    experience.
                  </li>

                  <li>
                    Integrated the Spoonacular API to fetch real-time recipe
                    data, including ingredients, nutritional information, and
                    preparation steps.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CSS Modules", "Spoonacular API"].map(
                  (tech, key) => (
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
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://recipe-app-dusky-gamma.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Mandem Store Homepage (<i>In Development</i>)
              </h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Designed and developed the homepage for Mandem Store,
                    ensuring a modern and user-friendly interface.
                  </li>

                  <li>
                    {" "}
                    Focused on branding and visual appeal to create an engaging
                    first impression for visitors.
                  </li>

                  <li>
                    Currently working on integrating dynamic content and
                    interactive elements.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "TailwindCSS"].map((tech) => (
                  <span
                    key={tech}
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
                  href="https://emm-flow.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    City-based Search: Enter any city name to get real-time
                    weather information
                  </li>

                  <li>
                    Weather Display: Shows temperature, humidity, and a
                    description of the current weather conditions.
                  </li>

                  <li>
                    Weather Emojis: Provides an emoji for a quick, visual
                    representation of the weather.
                  </li>

                  <li>
                    Error Handling: Alerts the user if the city name is missing
                    or if data cannot be fetched.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Rapid API"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <a
                  href="https://weather-app-rho-henna-45.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Jobs Finder</h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Job Finder is a dynamic web application built with React,
                    designed to connect job seekers with potential employers.
                    The platform is currently under development and aims to
                    offer an intuitive, user-friendly interface for browsing and
                    applying for job opportunities.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TypeScript", "React"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <a
                  href="https://midestic.github.io/Midestic_jobs/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Sound Keyboard</h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Our Music Keyboard App, which is built using JavaScript,
                    transforms your keyboard into an instrument. With each key
                    linked to a distinct sound, you may compose and play songs
                    directly from your keyboard. This software offers an
                    entertaining and engaging approach to play with music,
                    regardless of whether you're a musician or just enjoy making
                    noises.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <a
                  href="https://sound-keyboard-iota.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
