import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import ImageTextSection from "./sections/ImageTextSection";

const sections = [
  { id: "home", label: "Home", component: <Home /> },
  {
    id: "feature1",
    label: "Feature 1",
    component: (
      <ImageTextSection
        id="feature1"
        title="Image Left, Text Right"
        text="This is the normal layout."
        imageUrl="https://via.placeholder.com/400x300"
      />
    ),
  },
  {
    id: "feature2",
    label: "Feature 2",
    component: (
      <ImageTextSection
        id="feature2"
        title="Image Right, Text Left"
        text="This layout is reversed using the reverse prop."
        imageUrl="https://via.placeholder.com/400x300"
        reverse={true} // image on the right
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
