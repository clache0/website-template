import "../styles/components/navbar.css";

export default function Navbar({ sections }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">My Website</div>
      <div className="navbar-links">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
