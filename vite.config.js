import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";
import sendEmail from "./api/send-email.js";

function localApiPlugin(env) {
  return {
    name: "local-contact-api",
    configureServer(server) {
      Object.assign(process.env, {
        RESEND_API_KEY: env.RESEND_API_KEY,
        CONTACT_TO_EMAIL: env.CONTACT_TO_EMAIL,
        CONTACT_FROM_EMAIL: env.CONTACT_FROM_EMAIL,
      });

      server.middlewares.use("/api/send-email", async (request, response) => {
        if (request.method !== "POST") {
          response.statusCode = 405;
          response.setHeader("Allow", "POST");
          response.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        let body = "";
        request.on("data", (chunk) => {
          body += chunk;
        });
        request.on("end", async () => {
          try {
            request.body = JSON.parse(body || "{}");
            const adaptedResponse = {
              setHeader: response.setHeader.bind(response),
              status(code) {
                response.statusCode = code;
                return this;
              },
              json(payload) {
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify(payload));
              },
            };
            await sendEmail(request, adaptedResponse);
          } catch {
            response.statusCode = 400;
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify({ error: "Invalid request body." }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), localApiPlugin(env)],

    build: {
      rollupOptions: {
        external: ["react-icons"],
      },
    },
  };
});
