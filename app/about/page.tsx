import type { Metadata } from "next";

import AboutHero from "./AboutHero";
import Aim from "./Aim";
import Details from "./Details";
import Journey from "./Journey";
import Team from "./Team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the team behind Traamp — students from IIT & UOW building a smart travel assistant that connects travelers with guides and hidden locations.",
  keywords: [
    "Traamp team",
    "about Traamp",
    "travel discovery platform",
    "IIT UOW students project",
    "tourism technology",
  ],
  openGraph: {
    title: "About Traamp",
    description:
      "Meet the team behind Traamp and explore our mission to transform the travel experience.",
    url: "https://traamp.com/about",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "Traamp Logo",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <Details />
      <Team />
      <Aim />
      <Journey />
    </div>
  );
}
