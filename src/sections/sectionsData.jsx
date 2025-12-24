import Home from "./Home";
import ImageTextSection from "./ImageTextSection";
import ImageOnlySection from "./ImageOnlySection";
import TextSection from "./TextSection";
import { images } from "../data/images";
import ScheduleSection from "./ScheduleSection";
import { schedule } from "../data/schedule";

export const sections = [
  {
    id: "hero",
    label: "Gallery",
    component: (
      <ImageOnlySection
        id="hero"
        imageUrl={images.landsEnd1}
        imageAlt="Wedding photo"
        height="80vh"
      />
    ),
  },

  {
    id: "location",
    label: "Location",
    component: (
      <ImageTextSection
        id="location"
        title="Location"
        text="Sunol, CA"
        imageUrl={images.ellistonHouse}
      />
    ),
  },

  {
    id: "venue",
    label: "Venue",
    component: (
      <TextSection
        id="venue"
        title="About the Venue"
        text="Nestled in the hills of Sunol, the venue offers sweeping views, historic charm, and a relaxed, intimate atmosphere."
        align="center"
        className="light-background"
      />
    ),
  },

  {
    id: "schedule",
    label: "Schedule",
    component: (
      <ScheduleSection
        id="schedule"
        title="Schedule of the Day"
        items={schedule}
      />
    ),
  },

  {
    id: "details",
    label: "Details",
    component: (
      <ImageTextSection
        id="details"
        title="Wedding Details"
        text="Ceremony and reception to follow. More information coming soon."
        imageUrl={images.landsEndHug}
        reverse
      />
    ),
  },
];
