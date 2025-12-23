import React from "react";
import Home from "./Home";
import ImageTextSection from "./ImageTextSection";
import ImageOnlySection from "./ImageOnlySection";
import TextSection from "./TextSection";

export const sections = [
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
  {
    id: "text",
    label: "Text",
    component: (
      <TextSection
        id="text"
        title="Text Only Section"
        text="This section is fully reusable. You can align it, add background color, and set padding."
        align="center"
        backgroundColor="#f9f9f9"
      />
    ),
  },
];
