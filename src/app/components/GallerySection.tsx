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
    description: 'Un espectáculo lleno de asombro donde miles de burbujas flotan, brillan y transforman el aire en un juego de luz y movimiento.',
    image: '/Images/bubbleShow.gif',
  },
  {
    id: 3,
    title: 'Fiestas infantiles y Celebraciones',
    description: 'Espectáculos diseñados para fiestas infantiles y celebraciones llenas de juego, música e imaginación.',
    image: '/Images/Celebrations.jpg',
  },
  {
    id: 4,
    title: 'El show de Repentina',
    description: 'Una historia sobre aprender a navegar los momentos difíciles y descubrir la fuerza interior.',
    image: '/Images/RepentinaShow.jpg',
  },
  {
    id: 5,
    image: '/Images/Indigopresenta.gif',
  },
  {
    id: 6,
    title: 'Pandora la abeja trabajadora',
    description: 'Obra de circo-teatro sobre el cuidado de la vida y el equilibrio de los ecosistemas.',
    image: '/Images/Bee.jpg',
  },
  {
    id: 7,
    title: 'Siembra Conciencia',
    description:'Obra de circo-teatro que reflexiona sobre la relación humana con el entorno.',
    image: '/Images/siembra.jpg',
  },
  {
    id: 8,
    title: 'Valeri cumple sus sueños',
    description: 'Obra que combina teatro, rap y break dance para fortalecer habilidades para la vida.',
    image: '/Images/Valeri.jpg',
  },
];

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % shows.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + shows.length) % shows.length);

  return (
    <section className="relative py-20 md:py-24 px-4 md:px-6 bg-[var(--midnight-blue)] overflow-hidden">

      {/* ATMOSFERA */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-[var(--spotlight-amber)] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-[var(--accent-cyan)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-7xl uppercase tracking-wider text-[var(--spotlight-white)]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 40px rgba(255,215,0,0.4)',
            }}
          >
            Nuestros Shows
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative">

          <div className="relative h-[520px] md:h-[600px] flex items-center justify-center">

            {shows.map((show, index) => {
              const isActive = index === currentSlide;

              return (
                <motion.div
                  key={show.id}
                  className="absolute w-full h-full flex flex-col items-center justify-center"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.7 }}
                >

                  {/* ===== MARCO + IMAGEN ===== */}
                  <div className="relative w-[95%] md:w-[85%] h-[70%] md:h-[90%]">

                    {/* Glow */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        animate={{ opacity: [0.85, 1, 0.9, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        style={{
                          boxShadow: `
                            0 0 60px rgba(255,215,0,0.35),
                            0 0 140px rgba(255,215,0,0.18)
                          `,
                        }}
                      />
                    )}

                    {/* Marco Dorado */}
                    <div
                      className="relative w-full h-full p-[5px] md:p-[6px] rounded-3xl"
                      style={{
                        background:
                          'linear-gradient(145deg, rgba(255,215,0,0.85), rgba(255,215,0,0.25), rgba(255,215,0,0.7))',
                        boxShadow:
                          '0 0 40px rgba(255,215,0,0.25), inset 0 0 40px rgba(0,0,0,0.6)',
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">

                        <ImageWithFallback
                          src={show.image}
                          alt={show.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay SOLO desktop */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[var(--midnight-blue)] via-[var(--midnight-blue)]/50 to-transparent" />

                        {/* TEXTO SOBRE IMAGEN SOLO DESKTOP */}
                        {show.title && (
                          <div className="hidden md:block absolute bottom-0 left-0 right-0 p-12">
                            <h3
                              className="text-5xl mb-4 uppercase tracking-wider"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                color: 'var(--spotlight-white)',
                                textShadow: '0 0 30px rgba(255,215,0,0.6)',
                              }}
                            >
                              {show.title}
                            </h3>

                            {show.description && (
                              <p className="text-xl text-[var(--spotlight-white)]/90 max-w-2xl">
                                {show.description}
                              </p>
                            )}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>

                  {/* ===== TEXTO SEPARADO SOLO MOBILE ===== */}
                  {show.title && (
                    <div className="
                      md:hidden
                      w-[95%]
                      mt-6
                      p-6
                      rounded-2xl
                      backdrop-blur-md
                      border border-[var(--spotlight-gold)]/30
                    "
                      style={{
                        background: 'rgba(10,14,39,0.65)',
                        boxShadow: '0 0 30px rgba(255,215,0,0.15)'
                      }}
                    >
                      <h3
                        className="text-2xl mb-3 uppercase tracking-wider text-[var(--spotlight-white)]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {show.title}
                      </h3>

                      {show.description && (
                        <p className="text-sm text-[var(--spotlight-white)]/90">
                          {show.description}
                        </p>
                      )}
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--midnight-blue)]/80 border-2 border-[var(--spotlight-gold)] flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[var(--spotlight-gold)]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--midnight-blue)]/80 border-2 border-[var(--spotlight-gold)] flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[var(--spotlight-gold)]" />
          </button>

        </div>
      </div>
    </section>
  );
}
