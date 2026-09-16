import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";

import { Projects } from "./components/sections/Projects";
import AboutEditorial from "./components/sections/AboutEditorial";
import ContactEditorial from "./components/sections/ContactEditorial";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="site-shell">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <AboutEditorial />
        <Projects />
        <ContactEditorial />
      </div>
    </div>
  );
}

export default App;
