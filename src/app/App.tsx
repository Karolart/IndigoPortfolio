import { HeroSection } from '@/app/components/HeroSection';
import { GallerySection } from '@/app/components/GallerySection';
import { CharactersSection } from '@/app/components/CharactersSection';
import { WhoWeAreSection } from '@/app/components/WhoWeAreSection';
import { ContactSection } from '@/app/components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <CharactersSection />
      <WhoWeAreSection />
      <ContactSection />
    </div>
  );
}
