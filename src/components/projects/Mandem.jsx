import React from "react";

export default function Mandem() {
  return (
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
            Designed and developed the homepage for Mandem Store, ensuring a
            modern and user-friendly interface.
          </li>

          <li>
            {" "}
            Focused on branding and visual appeal to create an engaging first
            impression for visitors.
          </li>

          <li>
            Currently working on integrating dynamic content and interactive
            elements.
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

        <a
          href="https://github.com/midestic/emm-flow"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
