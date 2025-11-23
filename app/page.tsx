import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import WhySection from "./components/WhySection";
import Contact from "./components/Contact";
import VideoSection from "./components/VideoSection";
import AboutSection from "./components/AboutSection";

export const metadata = {
  title: "Traamp | Home",
  description: "Explore places, find guides, and discover the world with Traamp.",
};


export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhySection />
      <VideoSection/>
      <Partners />
      <AboutSection/>
      <Contact />
    </div>
  );
}

