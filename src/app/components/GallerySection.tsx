import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const shows = [
  {
    id: 1,
    title: 'Show de fuego y Luces',
    description: 'Espectáculo de fuego y luces que combina danza, manipulación de elementos y efectos lumínicos para crear una experiencia visual intensa, segura y memorable.',
    image: '/Images/FireShow.gif',
  },
  {
    id: 2,
    title: 'Show de Burbujas Gigantes',
    description: 'Un espectáculo lleno de asombro donde miles de burbujas flotan, brillan y transforman el aire en un juego de luz y movimiento. Figuras efímeras, burbujas gigantes y momentos interactivos invitan a niñas, niños y personas adultas a reconectar con la sorpresa, la risa y la imaginación.',
    image: '/Images/bubbleShow.jpg',
  },
  {
    id: 3,
    title: 'Fiestas infantiles y Celebraciones',
    description: 'Espectáculos diseñados para fiestas infantiles y celebraciones, donde el juego, la música y la imaginación se unen para crear momentos inolvidables. Personajes, burbujas gigantes, luces y dinámicas participativas transforman cada encuentro en una experiencia llena de risas, asombro y alegría compartida.',
    image: '/Images/Celebrations.jpg',
  },
  {
    id: 4,
    title: 'El show de Repentina',
    description: 'Un momento difícil puede sentirse como una verdadera tragedia, hasta que te descubres navegando en medio del mar y comprendes la importancia de aprender a remar.',
    image: '/Images/RepentinaShow.jpg',
  },
  {
    id: 5,
    image: '/Images/Indigopresenta.gif',
  },
  {
    id: 6,
    title: 'Pandora la abeja trabajadora',
    description: 'Obra de circo-teatro que invita a reflexionar sobre el cuidado de la vida y el equilibrio de los ecosistemas a través de la polinización. Pandora, una abeja ágil y audaz, emprende junto a los habitantes del bosque una misión para restaurar su jardín y proteger la vida de su colmena.',
    image: '/Images/Bee.jpg',
  },
  {
    id: 7,
    title: 'Siembra Conciencia',
    description:'Siembra Conciencia es una obra de circo-teatro que reflexiona sobre la relación de los seres humanos con su entorno. A través de personajes que representan hábitos cotidianos y escenas teatrales combinadas con actos circenses, la obra invita a pensar sobre el cuidado de la vida y el uso responsable de los recursos naturales en distintos espacios como bosques, ríos, mares y ciudades.',
    image: '/Images/siembra.jpg',
  },
  {
    id: 8,
    title: 'Valeri cumple sus sueños',
    description:
      'Immerse yourself in a world of neon lights and pulsating energy that ignites the imagination.',
    image: '/Images/Valeri.png',
  },

];


export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % shows.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + shows.length) % shows.length);
  };

  return (
    <section className="relative py-24 px-6 bg-[var(--midnight-blue)] overflow-hidden">
      {/* Dramatic background lighting */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--spotlight-amber)] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--accent-cyan)] blur-3xl" />
      </div>

      {/* Top spotlight beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse at top, var(--spotlight-white) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-6xl md:text-7xl mb-4 uppercase tracking-wider text-[var(--spotlight-white)]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 40px rgba(255, 215, 0, 0.4)',
            }}
          >
            Nuestros Shows
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--spotlight-gold)] to-transparent mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main slide display */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            {shows.map((show, index) => (
              <motion.div
                key={show.id}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 0.95,
                  zIndex: index === currentSlide ? 1 : 0,
                }}
                transition={{ duration: 0.7 }}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Dramatic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-blue)] via-[var(--midnight-blue)]/60 to-transparent" />

                  {/* Spotlight effect on image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 70%, rgba(10, 14, 39, 0.8) 100%)',
                    }}
                  />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <motion.h3
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-6xl mb-4 uppercase tracking-wider"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--spotlight-white)',
                      textShadow: '0 0 30px rgba(255, 215, 0, 0.6)',
                    }}
                  >
                    {show.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-[var(--spotlight-white)]/90 max-w-2xl"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {show.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation arrows - styled like stage controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-[var(--midnight-blue)]/80 backdrop-blur-sm border-2 border-[var(--spotlight-gold)] flex items-center justify-center text-[var(--spotlight-gold)] hover:bg-[var(--spotlight-gold)] hover:text-[var(--midnight-blue)] transition-all duration-300 group"
            style={{
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
            }}
          >
            <ChevronLeft className="w-8 h-8" />
            <div className="absolute inset-0 rounded-full bg-[var(--spotlight-gold)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-[var(--midnight-blue)]/80 backdrop-blur-sm border-2 border-[var(--spotlight-gold)] flex items-center justify-center text-[var(--spotlight-gold)] hover:bg-[var(--spotlight-gold)] hover:text-[var(--midnight-blue)] transition-all duration-300 group"
            style={{
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
            }}
          >
            <ChevronRight className="w-8 h-8" />
            <div className="absolute inset-0 rounded-full bg-[var(--spotlight-gold)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {shows.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-12 h-1 rounded-full transition-all duration-300"
                style={{
                  background: index === currentSlide
                    ? 'var(--spotlight-gold)'
                    : 'rgba(255, 215, 0, 0.3)',
                  boxShadow: index === currentSlide
                    ? '0 0 20px var(--spotlight-gold)'
                    : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
