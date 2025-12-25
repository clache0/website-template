// src/pages/HomePage.jsx
import PageLayout from "../layouts/PageLayout";
import ImageOnlySection from "../sections/ImageOnlySection";
import ImageTextSection from "../sections/ImageTextSection";
import TextSection from "../sections/TextSection";
import ScheduleSection from "../sections/ScheduleSection";
import { images } from "../data/images";
import { schedule } from "../data/schedule";

const homeSections = [
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

export default function HomePage() {
  return <PageLayout sections={homeSections} />;
}
