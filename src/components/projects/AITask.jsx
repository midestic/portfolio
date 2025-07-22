import React from "react";

export default function AITask() {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              transition"
    >
      <h3 className="text-xl font-bold mb-2">
        🤖 AI Task Generator — Text-to-Headline, Image, and Audio App
      </h3>
      <p className="text-gray-400 mb-4">
        <p>
          AI Task Generator is an interactive web app that takes a user's text
          input and uses multiple AI agents to generate a rich media output.
          It’s designed to showcase how language, image, and audio generation
          can work together seamlessly in a single flow.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            🧠 Headline Generation: Uses OpenAI's GPT-3.5 to create a short,
            catchy headline based on the user’s input.
          </li>

          <li>
            🖼️ Image Generation: Converts the text into a visual using DALL·E or
            an image generation API.
          </li>

          <li>
            🔊 Audio Output: Uses a Text-to-Speech (TTS) API to generate and
            play audio from the generated headline or input.
          </li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Next.js",
          "Typescript",
          "Tailwind CSS",
          "Shadcn",
          "Nodejs",
          "OpenAI GPT-3.5",
          "DALL·E",
          "Text-to-Speech API",
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
          href="https://ai-task-theta.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>

        <a
          href="https://github.com/midestic/AI-Task"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
}
