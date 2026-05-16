export default function Mahjeq() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition z-10"
    >
      <h3 className="text-xl font-bold mb-2">Mahjeq Restaurant App</h3>

      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Built Mahjeq, a full-stack restaurant ordering platform used by a
            live restaurant to manage customer orders, payments, and operations.
          </li>

          <li>
            Developed complete ordering system with real-time tracking, admin
            analytics, and Paystack integration, resulting in 35% improved
            operational efficiency and higher completed orders.
          </li>

          <li>
            Integrated Google Maps, OTP verification, and dynamic order slips,
            enhancing customer experience and increasing sales.
          </li>

          <li>
            Optimized performance with Next.js caching, delivering faster load
            times and smoother user journeys.
          </li>
        </ul>
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Next.js 16",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "Node.js",
        ].map((tech, key) => (
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
          href="https://mahjeqfoods.com/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        {/* <a
          href="https://github.com/midestic"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a> */}
      </div>
    </div>
  );
}
