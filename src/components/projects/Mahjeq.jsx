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
            A fullstack food ordering platform built for a real restaurant,
            allowing customers to browse menus, add items to cart, and complete
            orders through a seamless and modern interface.
          </li>

          <li>
            Implemented full cart functionality, order flow, delivery or pickup
            selection, and an OTP-based order verification system. After
            successful orders, users receive a generated order slip containing
            order details and a unique OTP for pickup or delivery.
          </li>

          <li>
            Integrated with Google Maps to guide users to the restaurant when
            choosing the pickup option.
          </li>

          <li>
            Built an Admin Dashboard where admins can manage menus, view all
            users, track orders, update order states, and monitor overall
            performance through analytics and charts.
          </li>

          <li>
            Implemented frontend & backend data caching using Next.js Validate,
            reducing unnecessary API calls and improving overall performance.
          </li>

          <li>
            Used React Spinners for smooth loading animations and improved user
            experience during API interactions.
          </li>
        </ul>
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn UI"].map(
          (tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              {tech}
            </span>
          )
        )}
      </div>

      <div className="flex justify-between items-center">
        <a
          href="https://mahjeq.netlify.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        <a
          href="https://github.com/midestic"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
