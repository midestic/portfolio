export default function Famr() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition"
    >
      <h3 className="text-xl font-bold mb-2">
        🧑‍🌾 FAMR (In Development) — Empowering Rural Farmers with Digital
        Visibility
      </h3>
      <p className="text-gray-400 mb-4">
        <p>
          FAMR is an ongoing web platform project aimed at helping farmers in
          rural communities gain online visibility and connect directly with
          buyers. It allows users to list farm products for sale, promoting
          local agriculture and enabling easier access to broader markets.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Developing responsive and user-friendly frontend components using
            React, Tailwind CSS, and Shadcn UI.
          </li>

          <li>
            Implementing product listing features, including dynamic forms and
            filters for farm produce.
          </li>

          <li>
            Ensuring mobile-first design and accessibility for users with
            limited device capabilities or internet bandwidth.
          </li>

          <li>
            Collaborating closely with backend developers to integrate APIs for
            product uploads, user accounts, and more.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Next.js",
          "Tailwind CSS",
          "Typescript",
          "Shadcn",
          "Nodejs, Express.js",
        ].map((tech, key) => (
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
          href="https://famr.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        <a
          href="https://github.com/midestic/famr"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
