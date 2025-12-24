import { useState, useRef, useEffect } from "react";
import "../styles/components/navbar.css";

export default function Navbar({ sections }) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-title">
        <a href="#home" className="navbar-home">
          <span className="navbar-name">Kristine and Clayton</span>
          <span className="navbar-date">October 10, 2026</span>
        </a>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Links */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {sections.map((section) => (
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
