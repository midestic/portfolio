import React from "react";

export default function Ecommerce() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition"
    >
      <h3 className="text-xl font-bold mb-2">🛒 Modern E-commerce Store </h3>
      <p className="text-gray-400 mb-4">
        <p>
          A fully responsive, feature-rich e-commerce application designed to
          showcase a modern shopping experience. Built with Next.js 15 and
          TypeScript, it enables users to browse, search, and filter a wide
          variety of products, all fetched dynamically from the Fake Store API.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            🛍️ Product Catalog: View products across categories with real-time
            filtering and dynamic search
          </li>

          <li>🔍 Advanced Filters: Filter by category, price, and keywords</li>

          <li>
            📄 Product Detail Pages: Rich product information via dynamic
            routing.
          </li>

          <li>
            📱 Responsive UI: Optimized for desktop, tablet, and mobile routing.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn",
          "Fake Store API",
        ].map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a
          href="https://ecommerce-opal-two.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        <a
          href="https://github.com/midestic/whatbytes"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
