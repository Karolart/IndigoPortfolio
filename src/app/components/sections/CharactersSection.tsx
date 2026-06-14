import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const characters = [
  {
    id: 1,
    name: "VIOLETA ENRIQUETA",
    role: "Animación y mediación pedagógica",
    image: "/Images/1.png",
  },

  {
    id: 2,
    name: "REPENTINA DE LAS FLORES",
    role: "Mediación ambiental y social",
    image: "/Images/2.jpg",
  },

  {
    id: 3,
    name: "ESTELLA",
    role: "Sensibilización laboral",
    image: "/Images/3.png",
  },

  {
    id: 4,
    name: "LA DOCTORA REPENTINA",
    role: "Educación y salud",
    image: "/Images/4.png",
  },

  {
    id: 5,
    name: "DEPORTINA",
    role: "Bienestar y hábitos saludables",
    image: "/Images/5.png",
  },

  {
    id: 6,
    name: "CACHIVACHA",
    role: "Reflexión ambiental y social",
    image: "/Images/6.png",
  },
];

export function CharactersSection() {
  const [index, setIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % characters.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  /* AUTO CINEMATIC MOVEMENT */
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* KEYBOARD */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  /* TOUCH */
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

    if (distance > 50) next();
    if (distance < -50) prev();
  };

  const getRelativeIndex = (i: number) => {
    let diff = i - index;

    if (diff > characters.length / 2) {
      diff -= characters.length;
    }

    if (diff < -characters.length / 2) {
      diff += characters.length;
    }

    return diff;
  };

  return (
    <section
      
      id="characters"
      className="
        relative

        py-20
        px-4
        md:px-6

        overflow-hidden

        bg-gradient-to-b
        from-[#090b1d]
        to-[var(--midnight-blue)]
      "
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none opacity-20">

        <div
          className="
            absolute top-1/3 left-1/4

            w-72 h-72

            rounded-full

            bg-indigo-500/20

            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-1/4 right-1/4

            w-72 h-72

            rounded-full

            bg-violet-500/20

            blur-3xl
          "
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

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
            UNIVERSO ESCÉNICO
          </motion.p>

          <h2
            className="
              text-3xl
              md:text-5xl

              uppercase

              tracking-[0.03em]

              text-white
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Los Personajes
          </h2>
        </div>

        {/* CAROUSEL */}
        <div
          className="
            relative

            w-full

            h-[480px]
            md:h-[520px]

            flex items-center justify-center

            overflow-hidden
          "
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* LEFT */}
          <button
            onClick={prev}
            className="
              absolute left-2 md:left-4

              z-50

              w-10 h-10

              rounded-full

              bg-black/40

              border border-white/10

              backdrop-blur-md

              flex items-center justify-center

              hover:bg-white/10

              transition
            "
          >
            <ChevronLeft
              size={18}
              className="text-white/70"
            />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="
              absolute right-2 md:right-4

              z-50

              w-10 h-10

              rounded-full

              bg-black/40

              border border-white/10

              backdrop-blur-md

              flex items-center justify-center

              hover:bg-white/10

              transition
            "
          >
            <ChevronRight
              size={18}
              className="text-white/70"
            />
          </button>

          {/* TRACK */}
          <div
            className="
              relative

              w-full
              h-full

              flex items-center justify-center
            "
          >
            {characters.map((character, i) => {
              const position = getRelativeIndex(i);

              const isCenter = position === 0;

              return (
                <motion.div
                  key={character.id}
                  className="
                    absolute

                    w-[240px]
                    md:w-[260px]
                  "
                  animate={{
                    x: position * 260,

                    scale: isCenter
                      ? [1, 1.015, 1]
                      : 0.78,

                    y: isCenter
                      ? [0, -6, 0]
                      : 10,

                    opacity:
                      Math.abs(position) > 2
                        ? 0
                        : isCenter
                        ? 1
                        : 0.35,

                    rotateZ: isCenter
                      ? [0, 0.5, 0, -0.5, 0]
                      : 0,

                    zIndex: isCenter
                      ? 30
                      : 20 - Math.abs(position),

                    filter: isCenter
                      ? "brightness(1)"
                      : "brightness(0.55) blur(0.5px)",
                  }}
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                    },

                    scale: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },

                    y: {
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },

                    rotateZ: {
                      duration: 18,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* FRAME */}
                  <div
                    className="
                      overflow-hidden

                      rounded-[1.6rem]

                      border border-white/10

                      bg-black/25

                      backdrop-blur-md
                    "
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[3/4]">

                      <ImageWithFallback
                        src={character.image}
                        alt={character.name}
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
                          from-[#090b1d]
                          via-transparent
                          to-black/30
                        "
                      />
                    </div>

                    {/* CONTENT */}
                    <div
                      className="
                        p-4

                        border-t border-white/10
                      "
                    >
                      <h3
                        className="
                          text-lg
                          md:text-xl

                          uppercase

                          tracking-[0.04em]

                          text-white

                          mb-2
                        "
                        style={{
                          fontFamily:
                            "'Playfair Display', serif",
                        }}
                      >
                        {character.name}
                      </h3>

                      <p
                        className="
                          text-[11px]

                          uppercase

                          tracking-[0.18em]

                          text-indigo-200/60
                        "
                      >
                        {character.role}
                      </p>
                    </div>
                  </div>

                  {/* SOFT GLOW */}
                  {isCenter && (
                    <motion.div
                      className="
                        absolute inset-0

                        rounded-[1.6rem]

                        pointer-events-none
                      "
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      style={{
                        boxShadow:
                          "0 0 18px rgba(120,130,255,0.10)",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}