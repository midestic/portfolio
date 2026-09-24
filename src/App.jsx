import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import "./index.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Squiggle from "./components/Squiggle";
import { setLenis } from "./lib/scroll";

function App() {
  const [ready, setReady] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(lenis);

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  const handlePreloaderDone = useCallback(() => {
    setReady(true);
    setShowPreloader(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <div className="App">
      <div className="site-shell">
        <AnimatePresence onExitComplete={() => {}}>
          {showPreloader && <Preloader onComplete={handlePreloaderDone} />}
        </AnimatePresence>
        <Cursor />
        <Navbar />
        <main>
          <Hero ready={ready} />
          <About />
          <TechStack />
          <div className="relative">
            <Squiggle />
            <Experience />
            <Projects />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
