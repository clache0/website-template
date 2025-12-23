import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import ImageOnlySection from "./sections/ImageOnlySection";
import ImageTextSection from "./sections/ImageTextSection";

const sections = [
  { id: "home", label: "Home", component: <Home /> },
  {
    id: "hero",
    label: "Hero",
    component: (
      <ImageOnlySection
        id="hero"
        imageUrl="https://via.placeholder.com/1200x600"
        imageAlt="Hero banner"
        height="80vh"
      />
    ),
  },
  {
    id: "feature",
    label: "Feature",
    component: (
      <ImageTextSection
        id="feature"
        title="Feature Section"
        text="This is a reusable image-text section."
        imageUrl="https://via.placeholder.com/400x300"
      />
    ),
  },
];

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
