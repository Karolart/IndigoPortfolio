import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ExpandedExperienceProps {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
  };

  onClose: () => void;
}

export function ExpandedExperience({
  item,
  onClose,
}: ExpandedExperienceProps) {
  
  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="
          fixed inset-0

          z-[999]

          overflow-y-auto
        "
      >
        {/* BACKDROP */}
        <div
          onClick={onClose}
          className="
            absolute inset-0

            bg-black/70

            backdrop-blur-xl
          "
        />

        {/* PANEL */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 30,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            relative z-10

            min-h-screen

            flex items-center justify-center

            px-5
            py-10
          "
        >
          {/* CONTENT CONTAINER */}
          <div
            className="
              relative

              w-full
              max-w-6xl

              overflow-hidden

              rounded-[2rem]

              border border-white/10

              bg-[#090b1d]/95

              shadow-2xl
            "
          >
            {/* HERO IMAGE */}
            <div
              className="
                relative

                h-[320px]
                md:h-[460px]

                overflow-hidden
              "
            >
              {/* IMAGE */}
              <div
                className="
                  absolute inset-0

                  bg-cover bg-center
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to bottom,
                      rgba(0,0,0,0.15),
                      rgba(0,0,0,0.75)
                    ),
                    url('${item.image}')
                  `,
                }}
              />

              {/* ATMOSPHERIC GLOW */}
              <div
                className="
                  absolute top-[-120px] right-[-120px]

                  w-[320px]
                  h-[320px]

                  rounded-full

                  bg-indigo-400/20

                  blur-3xl
                "
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                className="
                  absolute top-5 right-5 z-20

                  w-12 h-12

                  rounded-full

                  border border-white/10

                  bg-black/40

                  backdrop-blur-md

                  flex items-center justify-center

                  hover:bg-white/10

                  transition
                "
              >
                <X
                  size={20}
                  className="text-white/70"
                />
              </button>

              {/* TITLE */}
              <div
                className="
                  absolute bottom-10 left-10

                  max-w-xl
                "
              >
                {/* LABEL */}
                <p
                  className="
                    text-white/40

                    uppercase

                    tracking-[0.25em]

                    text-[11px]

                    mb-4
                  "
                >
                  ÍNDIGO EXPERIENCE
                </p>

                {/* TITLE */}
                <h2
                  className="
                    text-4xl
                    md:text-6xl

                    leading-[0.9]

                    uppercase

                    text-white
                  "
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {item.title}
                </h2>
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2

                gap-10

                px-6
                md:px-10

                py-10
              "
            >
              {/* LEFT */}
              <div>
                {/* DESCRIPTION */}
                <p
                  className="
                    text-white/70

                    leading-relaxed

                    text-base
                    md:text-lg
                  "
                >
                  {item.description}
                </p>

                {/* EXTRA TEXT */}
                <p
                  className="
                    mt-6

                    text-white/45

                    leading-relaxed

                    text-sm
                    md:text-base
                  "
                >
                  Experiencias escénicas diseñadas para
                  generar conexión emocional, interacción
                  colectiva y momentos memorables mediante
                  performance, música, visualidad y narrativa.
                </p>

                {/* TAGS */}
                <div
                  className="
                    flex flex-wrap

                    gap-3

                    mt-8
                  "
                >
                  {[
                    "Performance",
                    "Narrativa",
                    "Interacción",
                    "Experiencia",
                    "Arte Vivo",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="
                        px-4 py-2

                        rounded-full

                        border border-white/10

                        bg-white/5

                        text-white/55

                        text-xs

                        uppercase

                        tracking-[0.15em]
                      "
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                {/* MINI GALLERY */}
                <div
                  className="
                    grid
                    grid-cols-2

                    gap-4
                  "
                >
                  {[1, 2, 3, 4].map((img) => (
                    <div
                      key={img}
                      className="
                        h-[140px]

                        rounded-2xl

                        overflow-hidden

                        border border-white/10
                      "
                    >
                      <div
                        className="
                          w-full h-full

                          bg-cover bg-center

                          hover:scale-105

                          transition-transform
                          duration-700
                        "
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              to bottom,
                              rgba(0,0,0,0.1),
                              rgba(0,0,0,0.45)
                            ),
                            url('${item.image}')
                          `,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="
                    mt-8

                    w-full

                    py-4

                    rounded-2xl

                    border border-white/10

                    bg-white/5

                    text-white/80

                    uppercase

                    tracking-[0.2em]

                    text-sm

                    hover:bg-white/10

                    transition
                  "
                >
                  Diseñar experiencia
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}