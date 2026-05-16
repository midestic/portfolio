export default function AjoPay() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition z-10"
    >
      <h3 className="text-xl font-bold mb-2">
        Ajopay – Cooperative Savings Platform
      </h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Contributing to Ajopay, a cooperative savings (Ajo) platform focused
            on automated group savings and payouts.
          </li>

          <li>
            Designed secure RESTful APIs and relational database schemas,
            improving transaction reliability and building user trust.
          </li>

          <li>
            Implemented JWT authentication and role-based access control,
            strengthening data security and supporting safe platform growth.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Expressjs.", "Nodejs"].map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a
          href="https://ajo-pay.netlify.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        {/* <a
          href="https://github.com/midestic/AI-Task"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a> */}
      </div>
    </div>
  );
}
