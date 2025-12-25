// src/layouts/PageLayout.jsx
import Navbar from "../components/Navbar";

export default function PageLayout({ sections }) {
  return (
    <>
      <Navbar sections={sections} />

      <main>
        {sections.map((section) => (
          <div key={section.id}>
            {section.component}
          </div>
        ))}
      </main>
    </>
  );
}
