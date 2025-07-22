import React from "react";

export default function DaToothsomeHub() {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
      <h3 className="text-xl font-bold mb-2">
        {" "}
        🍫 daToothsomeHub – Sweetening the E-Commerce Experience
      </h3>
      <p className="text-gray-400 mb-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Product Showcase: High-quality images and detailed descriptions for
            each product, allowing customers to make informed choices.
          </li>

          <li>
            User-Friendly Checkout: Streamlined checkout process with secure
            payment integration, ensuring a hassle-free purchase experience.
          </li>

          <li>
            {" "}
            Responsive Design: Optimized for all devices, providing a consistent
            user experience across desktops, tablets, and smartphones.
          </li>

          <li>
            {" "}
            Contact & Support: Easy-to-access contact form for customer
            inquiries, enhancing trust and reliability.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Next.JS", "Tailwind CSS", "EmailJS", "Stripe", "Zustand"].map(
          (tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
            >
              {tech}
            </span>
          )
        )}
      </div>

      <div className="flex justify-between items-center">
        <a
          href="https://datoothsomehub.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        <a
          href="https://github.com/midestic/datoothsomehub"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
