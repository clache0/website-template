// src/pages/AboutPage.jsx
import PageLayout from "../layouts/PageLayout";
import TextSection from "../sections/TextSection";

const aboutSections = [
  {
    id: "about",
    label: "About",
    component: (
      <TextSection
        id="about"
        title="About Us"
        text="A short story about Kristine and Clayton, how you met, what the day means, etc."
        align="center"
      />
    ),
  },
];

export default function AboutPage() {
  return <PageLayout sections={aboutSections} />;
}
