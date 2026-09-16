import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="site-nav">
      <a href="#home" className="wordmark">
        <span className="wordmark-mark">
          <span>BU</span>
        </span>
        <span>Badmus Usman</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
        <a
          href="/cv/Badmus-Usman.pdf"
          download="Badmus-Usman.pdf"
          className="nav-cv"
        >
          Resume ↗
        </a>
      </div>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
