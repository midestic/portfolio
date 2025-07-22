import React from "react";

export default function Naptip() {
  return (
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
            Enhanced the group's online presence and accessibility of resources.
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
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        {" "}
        <a
          href="https://naptip-ikd.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
        <a
          href="https://github.com/midestic/naptip-ikd"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
