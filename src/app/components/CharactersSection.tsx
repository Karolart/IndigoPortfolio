import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const characters = [
  {
    id: 1,
    name: "VIOLETA ENRIQUETA",
    role: "Personaje artístico – animación y mediación pedagógica",
    description:
      "Personaje que anima eventos a través de magia, malabarismos y equilibrios, combinando diversión con mensajes pedagógicos sobre la prevención del bullying y los derechos de niñas, niños y adolescentes.",
    image: "/Images/1.png",
  },
  {
    id: 2,
    name: "REPENTINA DE LAS FLORES",
    role: "Personaje artístico – mediación ambiental y social",
    description:
      "Campesina que conoce y defiende sus derechos y los de la naturaleza. A través de habilidades escénicas y la creación de objetos musicales y artísticos con materiales reciclables, promueve el empoderamiento de las mujeres y nuevas formas de reutilización de los residuos.",
    image: "/Images/2.jpg",
  },
  {
    id: 3,
    name: "ESTELLA",
    role: "Personaje artístico – sensibilización laboral",
    description:
      "Personaje multifacético adaptable a diferentes contextos, ideal para abordar de manera lúdica temas como productividad laboral, prevención de riesgos y salud y seguridad en el trabajo.",
    image: "/Images/3.png",
  },
  {
    id: 4,
    name: "LA DOCTORA REPENTINA",
    role: "Personaje escénico – educación y acompañamiento en salud",
    description:
      "Personaje idóneo para campañas de promoción de la salud, acompañamiento a pacientes hospitalizados y abordaje lúdico de temas de salud sexual y reproductiva.",
    image: "/Images/4.png",
  },
  {
    id: 5,
    name: "DEPORTINA",
    role: "Personaje escénico – sensibilización en bienestar y salud",
    description:
      "Personaje idóneo para campañas de promoción de estilos de vida saludables, que integran la actividad física, hábitos alimenticios y el uso adecuado de dispositivos tecnológicos.",
    image: "/Images/5.png",
  },
  {
    id: 6,
    name: "CACHIVACHA",
    role: "Personaje artístico – sensibilización ambiental y social",
    description:
      "Personaje que conecta el saber del campo con la reflexión cotidiana, invitando al público a pensar sobre el cuidado de la vida, los hábitos diarios y la relación entre las ideas, el territorio y las acciones humanas, a través del juego y la expresión escénica.",
    image: "/Images/6.png",
  },
];

export function CharactersSection() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % characters.length);
  const prev = () => setIndex((prev) => (prev - 1 + characters.length) % characters.length);

  /* ================= KEYBOARD SUPPORT ================= */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* ================= TOUCH SUPPORT ================= */
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

    if (distance > 50) next();      // swipe left → next
    if (distance < -50) prev();     // swipe right → prev
  };

  const getRelativeIndex = (i: number) => {
    let diff = i - index;
    if (diff > characters.length / 2) diff -= characters.length;
    if (diff < -characters.length / 2) diff += characters.length;
    return diff;
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[var(--deep-indigo)] to-[var(--midnight-blue)] overflow-hidden">

      <div className="relative max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2
            className="text-6xl md:text-7xl mb-4 uppercase tracking-wider text-[var(--spotlight-white)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Los Personajes
          </h2>

          <div className="w-28 h-[2px] bg-[var(--accent-cyan)]/40 mx-auto" />
        </div>

        {/* CAROUSEL */}
        <div
          className="relative w-full h-[700px] flex items-center justify-center overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-6 z-50 bg-[var(--midnight-blue)]/70 backdrop-blur-md p-4 rounded-full border border-[var(--accent-cyan)]/30 hover:scale-110 transition"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={next}
            className="absolute right-6 z-50 bg-[var(--midnight-blue)]/70 backdrop-blur-md p-4 rounded-full border border-[var(--accent-cyan)]/30 hover:scale-110 transition"
          >
            <ChevronRight size={30} />
          </button>

          {/* TRACK */}
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">

            {characters.map((character, i) => {
              const position = getRelativeIndex(i);
              const isCenter = position === 0;

              return (
                <motion.div
                  key={character.id}
                  className="absolute w-[340px]"
                  animate={{
                    x: position * 360,

                    // ⭐ IDLE CINEMATICO
                    scale: isCenter ? [1, 1.018, 1] : 0.82,
                    y: isCenter ? [0, -8, 0] : 0,
                    rotateZ: isCenter ? [0, 0.8, 0, -0.8, 0] : 0,

                    opacity: Math.abs(position) > 2 ? 0 : isCenter ? 1 : 0.55,
                    zIndex: isCenter ? 30 : 20 - Math.abs(position),

                    filter: isCenter
                      ? "brightness(1.12) saturate(1.05)"
                      : "brightness(0.65) blur(1px)",
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 110, damping: 18 },

                    // ⭐ tiempos distintos = sensación orgánica
                    scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: { duration: 16, repeat: Infinity, ease: "easeInOut" },
                  }}
                >

                  {/* PARTICLES */}
                  {isCenter && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: 2,
                            height: 2,
                            background: "rgba(129,140,248,0.6)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -60, 0],
                            x: [0, Math.random() * 40 - 20, 0],
                            opacity: [0, 0.9, 0],
                            scale: [0.6, 1.2, 0.6],
                          }}
                          transition={{
                            duration: 12 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 6,
                            ease: "easeInOut",
                          }}

                        />
                      ))}
                    </div>
                  )}

                  {/* LED FRAME */}
                  {isCenter && (
                    <div
                      className="absolute -inset-2 rounded-xl pointer-events-none"
                      style={{
                        border: "2px solid rgba(99,102,241,0.5)",
                        boxShadow:
                          "0 0 18px rgba(99,102,241,0.25), inset 0 0 12px rgba(129,140,248,0.15)",
                      }}
                    />
                  )}

                  {/* CARD */}
                  <div className="overflow-hidden rounded-xl bg-[var(--midnight-blue)]/80 backdrop-blur-sm">

                    <div className="relative aspect-[3/4]">
                      <ImageWithFallback
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-blue)] via-transparent to-[var(--midnight-blue)]/60" />
                    </div>

                    <div className="p-6 border-t border-[var(--accent-cyan)]/20">
                      <h3
                        className="text-2xl mb-2 uppercase tracking-wide text-[var(--spotlight-white)]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {character.name}
                      </h3>

                      <p className="text-sm text-[var(--accent-cyan)] uppercase tracking-wider mb-3">
                        {character.role}
                      </p>

                      <p className="text-[var(--spotlight-white)]/80 text-sm leading-relaxed">
                        {character.description}
                      </p>
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
