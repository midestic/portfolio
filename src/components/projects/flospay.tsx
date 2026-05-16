export default function Flospay() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition z-10"
    >
      <h3 className="text-xl font-bold mb-2">
        Flospay - Payment Fintech Platform
      </h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Built core features for Flospay, a payments platform serving
            thousands of users with group savings, P2P transfers, and secure
            payouts.
          </li>

          <li>
            Migrated authentication to secure HttpOnly session cookies,
            eliminating XSS risks and significantly strengthening user trust and
            regulatory compliance.
          </li>

          <li>
            Implemented idempotency keys across all money-movement features,
            preventing double charges and reducing financial risk while ensuring
            audit-safe transactions.
          </li>

          <li>
            Developed real-time dashboards and transaction systems that improved
            user engagement and accelerated money movement for the platform.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["React", "BootStrap", "Chart.js", "Recharts", "Node.js"].map(
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
          href="https://flospay.com/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        {/* <a
          href="https://github.com/midestic/lapoapp"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a> */}
      </div>
    </div>
  );
}
