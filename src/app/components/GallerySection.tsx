import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const shows = [
  {
    id: 1,
    title: "Show de fuego y Luces",
    description:
      "Espectáculo de fuego y luces que combina danza, manipulación de elementos y efectos lumínicos para crear una experiencia visual intensa, segura y memorable.",
    image: "/Images/FireShow.gif",
  },
  {
    id: 2,
    title: "Show de Burbujas Gigantes",
    description:
      "Un espectáculo lleno de asombro donde miles de burbujas flotan, brillan y transforman el aire en un juego de luz y movimiento.",
    image: "/Images/bubbleShow.gif",
  },
  {
    id: 3,
    title: "Fiestas infantiles y Celebraciones",
    description:
      "Espectáculos diseñados para fiestas infantiles y celebraciones, donde el juego, la música y la imaginación se unen.",
    image: "/Images/Celebrations.jpg",
  },
  {
    id: 4,
    title: "El show de Repentina",
    description:
      "Un momento difícil puede sentirse como una verdadera tragedia, hasta que te descubres navegando en medio del mar.",
    image: "/Images/RepentinaShow.jpg",
  },
  {
    id: 5,
    image: "/Images/Indigopresenta.gif",
  },
  {
    id: 6,
    title: "Pandora la abeja trabajadora",
    description:
      "Obra de circo-teatro que invita a reflexionar sobre el cuidado de la vida y el equilibrio de los ecosistemas.",
    image: "/Images/Bee.jpg",
  },
  {
    id: 7,
    title: "Siembra Conciencia",
    description:
      "Obra de circo-teatro que reflexiona sobre la relación de los seres humanos con su entorno.",
    image: "/Images/siembra.jpg",
  },
  {
    id: 8,
    title: "Valeri cumple sus sueños",
    description:
      "Obra que combina teatro, rap y break dance para resaltar la importancia de los entornos protectores.",
    image: "/Images/Valeri.jpg",
  },
];

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= TOUCH ================= */
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % shows.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + shows.length) % shows.length);
  };

  /* ================= KEYBOARD ================= */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* ================= TOUCH EVENTS ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <section className="relative py-24 px-6 bg-[var(--midnight-blue)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2
            className="text-6xl md:text-7xl mb-4 uppercase tracking-wider text-[var(--spotlight-white)]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Nuestros Shows
          </h2>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* SLIDES */}
          <div className="relative h-[600px] flex items-center justify-center">
            {shows.map((show, index) => {
              const isActive = index === currentSlide;

              return (
                <motion.div
                  key={show.id}
                  className="absolute w-full h-full flex items-center justify-center"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative w-[85%] h-[90%]">
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

                    {/* Frame */}
                    <div
                      className="relative w-full h-full p-[6px] rounded-3xl"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(255,215,0,0.8), rgba(255,215,0,0.2), rgba(255,215,0,0.7))",
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <ImageWithFallback
                          src={show.image}
                          alt={show.title || "show"}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-blue)] via-[var(--midnight-blue)]/50 to-transparent" />

                        {/* TEXT */}
                        {(show.title || show.description) && (
                          <div className="absolute bottom-0 left-0 right-0 p-12">
                            {show.title && (
                              <h3 className="text-5xl mb-4 uppercase tracking-wider text-[var(--spotlight-white)]">
                                {show.title}
                              </h3>
                            )}
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
                </motion.div>
              );
            })}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-[var(--midnight-blue)]/80 border-2 border-[var(--spotlight-gold)] flex items-center justify-center"
          >
            <ChevronLeft className="w-8 h-8 text-[var(--spotlight-gold)]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-[var(--midnight-blue)]/80 border-2 border-[var(--spotlight-gold)] flex items-center justify-center"
          >
            <ChevronRight className="w-8 h-8 text-[var(--spotlight-gold)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
