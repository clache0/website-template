import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import NewSection from "./sections/NewSection";

const sections = [
  { id: "home", label: "Home", component: <Home /> },
  { id: "about", label: "About", component: <About /> },
  { id: "newsection", label: "NewSection", component: <NewSection /> },
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
