export default function AjoPay() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition z-10"
    >
      <h3 className="text-xl font-bold mb-2">
        Ajopay - Cooperative Savings Platform
      </h3>
      <p className="text-gray-400 mb-4">
        <p>
          Worked on the backend development of Ajopay, a cooperative and Ajo
          savings platform designed to automate group savings, payout
          management, and direct debit processing.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Built RESTful APIs using Node.js and Express.js for user
            authentication, savings cycles, and payout management.
          </li>

          <li>
            Implemented JWT-based authentication and middleware for secure route
            protection and user validation.
          </li>

          <li>
            Designed and managed relational data models using Sequelize ORM and
            MySQL.
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
