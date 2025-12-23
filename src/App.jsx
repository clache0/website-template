import Navbar from "./components/Navbar";
import { sections } from "./sections/sectionsData";

export default function App() {
  return (
    <>
      <Navbar sections={sections} />
      <main>
        {sections.map((section) => (
          <div key={section.id}>{section.component}</div>
        ))}
      </main>
    </>
  );
}
