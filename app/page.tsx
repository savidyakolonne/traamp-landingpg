import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import WhySection from "./components/WhySection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhySection />
      <Partners />
      <Contact />
    </div>
  );
}
