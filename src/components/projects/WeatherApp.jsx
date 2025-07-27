export default function WeatherApp() {
  return (
    <div
      className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all z-10
            "
    >
      <h3 className="text-xl font-bold mb-2">Weather App</h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            City-based Search: Enter any city name to get real-time weather
            information
          </li>

          <li>
            Weather Display: Shows temperature, humidity, and a description of
            the current weather conditions.
          </li>

          <li>
            Weather Emojis: Provides an emoji for a quick, visual representation
            of the weather.
          </li>

          <li>
            Error Handling: Alerts the user if the city name is missing or if
            data cannot be fetched.
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

        <a
          href="https://github.com/midestic/weather-app"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
