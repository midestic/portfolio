import PropTypes from "prop-types";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
      <button
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-close"
        aria-label="Close Menu"
      >
        <span />
        <span />
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        <span>01</span>Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        <span>02</span>About
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        <span>03</span>Projects
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        <span>04</span>Contact
      </a>

      <a
        href="/cv/Badmus-Usman.pdf"
        download="Badmus-Usman.pdf"
        className="mobile-menu-resume"
      >
        Download resume ↗
      </a>
    </div>
  );
}

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
