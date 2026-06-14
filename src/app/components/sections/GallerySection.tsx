import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const shows = [
  {
    id: 1,
    title: 'Show de fuego y Luces',
    description:
      'Espectáculo visual con fuego, danza y luces escénicas.',
    image: '/Images/Fire.gif',
  },

  {
    id: 2,
    title: 'Show de Burbujas Gigantes',
    description:
      'Experiencia inmersiva llena de luz y movimiento.',
    image: '/Images/bubbleShow.gif',
  },

  {
    id: 3,
    title: 'Fiestas y Celebraciones',
    description:
      'Experiencias artísticas para momentos memorables.',
    image: '/Images/Celebrations.jpg',
  },

  {
    id: 4,
    title: 'El show de Repentina',
    description:
      'Narrativa escénica sobre resiliencia y transformación.',
    image: '/Images/RepentinaShow.jpg',
  },

  {
    id: 5,
    image: '/Images/Indigopresenta.gif',
  },

  {
    id: 6,
    title: 'Pandora la abeja trabajadora',
    description:
      'Circo-teatro sobre el cuidado de la vida.',
    image: '/Images/Bee.jpg',
  },

  {
    id: 7,
    title: 'Siembra Conciencia',
    description:
      'Experiencia escénica sobre humanidad y entorno.',
    image: '/Images/siembra.jpg',
  },

  {
    id: 8,
    title: 'Valeri cumple sus sueños',
    description:
      'Teatro, rap y movimiento para fortalecer habilidades.',
    image: '/Images/Valeri.jpg',
  },
];

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1) % shows.length);

  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + shows.length) % shows.length);

  return (
    <section
     id="shows"
      className="
        relative

        py-14
        md:py-16

        px-4
        md:px-6

        overflow-hidden

        bg-[var(--midnight-blue)]
      "
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">

        <div
          className="
            absolute top-1/4 left-1/4

            w-72 md:w-96
            h-72 md:h-96

            rounded-full

            bg-[var(--spotlight-amber)]

            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-1/4 right-1/4

            w-72 md:w-96
            h-72 md:h-96

            rounded-full

            bg-[var(--accent-cyan)]

            blur-3xl
          "
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-white/30

              uppercase

              tracking-[0.24em]

              text-[10px]

              mb-3
            "
          >
            EXPERIENCIAS ESCÉNICAS
          </motion.p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              uppercase

              tracking-[0.03em]

              text-[var(--spotlight-white)]
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Nuestros Shows
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative">

          <div
            className="
              relative

              h-[440px]
              md:h-[520px]

              flex items-center justify-center
            "
          >
            {shows.map((show, index) => {
              const isActive = index === currentSlide;

              return (
                <motion.div
                  key={show.id}
                  className="
                    absolute

                    w-full
                    h-full

                    flex items-center justify-center
                  "
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.985,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  {/* FRAME */}
                  <div
                    className="
                      relative

                      w-[96%]
                      md:w-[88%]

                      h-[82%]

                      overflow-hidden

                      rounded-[2rem]

                      border border-white/10
                    "
                  >
                    {/* GLOW */}
                    {isActive && (
                      <motion.div
                        className="
                          absolute inset-0

                          rounded-[2rem]

                          pointer-events-none

                          z-10
                        "
                        animate={{
                          opacity: [0.6, 0.9, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        style={{
                          boxShadow: `
                            0 0 30px rgba(255,215,0,0.18),
                            0 0 90px rgba(255,215,0,0.08)
                          `,
                        }}
                      />
                    )}

                    {/* IMAGE */}
                    <ImageWithFallback
                      src={show.image}
                      alt={show.title || 'ÍNDIGO'}
                      className="
                        w-full
                        h-full

                        object-cover

                        saturate-[0.88]
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute inset-0

                        bg-gradient-to-t
                        from-[var(--midnight-blue)]
                        via-[var(--midnight-blue)]/20
                        to-transparent
                      "
                    />

                    {/* CONTENT */}
                    {show.title && (
                      <div
                        className="
                          absolute bottom-0 left-0 right-0

                          p-6
                          md:p-10
                        "
                      >
                        <h3
                          className="
                            text-3xl
                            md:text-4xl

                            uppercase

                            tracking-[0.03em]

                            text-[var(--spotlight-white)]

                            mb-3
                          "
                          style={{
                            fontFamily:
                              "'Playfair Display', serif",

                            textShadow:
                              '0 0 20px rgba(255,215,0,0.18)',
                          }}
                        >
                          {show.title}
                        </h3>

                        {show.description && (
                          <p
                            className="
                              max-w-xl

                              text-sm
                              md:text-base

                              leading-relaxed

                              text-[var(--spotlight-white)]/78
                            "
                          >
                            {show.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="
              absolute left-1 md:left-3 top-1/2

              -translate-y-1/2

              z-20

              w-10 h-10
              md:w-12 md:h-12

              rounded-full

              bg-[var(--midnight-blue)]/75

              border border-white/10

              backdrop-blur-md

              flex items-center justify-center

              hover:bg-white/10

              transition
            "
          >
            <ChevronLeft
              className="
                w-5 h-5

                text-white/70
              "
            />
          </button>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="
              absolute right-1 md:right-3 top-1/2

              -translate-y-1/2

              z-20

              w-10 h-10
              md:w-12 md:h-12

              rounded-full

              bg-[var(--midnight-blue)]/75

              border border-white/10

              backdrop-blur-md

              flex items-center justify-center

              hover:bg-white/10

              transition
            "
          >
            <ChevronRight
              className="
                w-5 h-5

                text-white/70
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}