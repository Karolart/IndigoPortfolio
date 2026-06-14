import Navbar from "./components/layout/Navbar";

import { HeroSection } from "./components/sections/HeroSection";
import { ExperiencesSection } from "./components/sections/ExperiencesSection";
import { GallerySection } from "./components/sections/GallerySection";
import { CharactersSection } from "./components/sections/CharactersSection";
import { WhoWeAreSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ReviewsSection } from "./components/sections/ReviewsSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />

      <ExperiencesSection />

      <GallerySection />

      <CharactersSection />

      <WhoWeAreSection />

      <ReviewsSection />

      <ContactSection />
    </div>
  );
}