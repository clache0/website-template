import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/navbar.css";

export default function Navbar({ sections = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar" ref={navbarRef}>
      {/* Title */}
      <div className="navbar-title">
        <Link to="/" className="navbar-home" onClick={() => setIsOpen(false)}>
          <span className="navbar-name">Kristine and Clayton</span>
          <span className="navbar-date">October 10, 2026</span>
        </Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      {/* Links */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {/* Page links */}
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

        {/* Section links (only on home page) */}
        {isHomePage &&
          sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
            >
              {section.label}
            </a>
          ))}
      </div>
    </nav>
  );
}
