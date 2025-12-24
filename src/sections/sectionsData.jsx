import React from "react";
import Home from "./Home";
import ImageTextSection from "./ImageTextSection";
import ImageOnlySection from "./ImageOnlySection";
import TextSection from "./TextSection";
import { images } from "../data/images";

export const sections = [
  { id: "home", label: "Home", component: <Home /> },
  {
    id: "hero",
    label: "Hero",
    component: (
      <ImageOnlySection
        id="hero"
        imageUrl={images.cityHallStairs}
        imageAlt="City Hall Stairs"
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
        title="Location"
        text="it's in Sunol, CA"
        imageUrl={images.ellistonHouse}
      />
    ),
  },
  {
    id: "text",
    label: "Text",
    component: (
      <TextSection
        id="text"
        title="About the venue"
        text="This section is fully reusable. You can align it, add background color, and set padding."
        align="center"
        className=""
      />
    ),
  },
];
