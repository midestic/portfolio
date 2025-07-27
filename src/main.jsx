import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Particles from "./components/animations/Particles.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ width: "100%", height: "100vh", position: "fixed" }}>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
    <App />
  </StrictMode>
);
