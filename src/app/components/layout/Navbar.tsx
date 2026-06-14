import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "auto";
  }, [open]);

  const links = [

    ["Shows", "#shows"],

    ["Experiencias", "#experiencias"],

    ["Personajes", "#characters"],

    ["Nosotros", "#nosotros"],

    ["Reseñas", "#reviews"],

    ["Contacto", "#contacto"],

  ];

  const handleNavigate = (
    href: string
  ) => {

    setOpen(false);

    const element =
      document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* BUTTON */}
      <nav
        className="
          fixed top-5 left-5

          z-50
        "
      >
        <button
          onClick={() => setOpen(true)}

          className="
            group

            w-11 h-11

            rounded-full

            border border-white/10

            bg-black/25

            backdrop-blur-md

            flex items-center justify-center

            hover:bg-white/[0.05]

            transition
          "
        >
          <Menu
            size={17}
            className="
              text-white/70

              group-hover:text-white

              transition
            "
          />
        </button>
      </nav>

      {/* OVERLAY */}
      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              fixed inset-0

              z-[100]
            "
          >
            {/* BACKDROP */}
            <div
              onClick={() => setOpen(false)}

              className="
                absolute inset-0

                bg-black/35

                backdrop-blur-[2px]
              "
            />

            {/* PANEL */}
            <motion.div

              initial={{
                x: -40,
                opacity: 0,
              }}

              animate={{
                x: 0,
                opacity: 1,
              }}

              exit={{
                x: -40,
                opacity: 0,
              }}

              transition={{
                duration: 0.35,
              }}

              className="
                relative

                h-full
                w-[280px]

                bg-[#070916]/92

                border-r border-white/8

                backdrop-blur-2xl

                overflow-hidden
              "
            >
              {/* ATMOSPHERIC GLOW */}
              <div
                className="
                  absolute top-[-100px]
                  left-[-100px]

                  w-[240px]
                  h-[240px]

                  rounded-full

                  opacity-[0.06]

                  blur-3xl
                "
                style={{
                  background:
                    "radial-gradient(circle, rgba(120,130,255,0.5), transparent 70%)",
                }}
              />

              {/* HEADER */}
              <div
                className="
                  relative z-10

                  flex items-center
                  justify-between

                  px-6
                  py-6
                "
              >
                <p
                  className="
                    text-white/22

                    uppercase

                    tracking-[0.22em]

                    text-[10px]
                  "
                >
                  ÍNDIGO
                </p>

                <button
                  onClick={() => setOpen(false)}

                  className="
                    w-9 h-9

                    rounded-full

                    border border-white/8

                    bg-white/[0.03]

                    flex items-center justify-center

                    hover:bg-white/[0.06]

                    transition
                  "
                >
                  <X
                    size={16}
                    className="text-white/65"
                  />
                </button>
              </div>

              {/* LINKS */}
              <div
                className="
                  relative z-10

                  flex flex-col

                  px-6
                  pt-10

                  gap-7
                "
              >
                {links.map(
                  ([label, href], index) => (

                    <motion.button
                      key={label}

                      onClick={() =>
                        handleNavigate(href)
                      }

                      initial={{
                        opacity: 0,
                        x: -10,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay:
                          0.08 + index * 0.05,
                      }}

                      className="
                        group

                        flex items-center

                        text-white/65

                        hover:text-white

                        transition

                        text-left
                      "
                    >
                      <span
                        className="
                          uppercase

                          tracking-[0.12em]

                          text-lg
                        "
                        style={{
                          fontFamily:
                            "'Playfair Display', serif",
                        }}
                      >
                        {label}
                      </span>

                      <div
                        className="
                          ml-3

                          w-0
                          h-[1px]

                          bg-white/30

                          group-hover:w-10

                          transition-all
                          duration-300
                        "
                      />
                    </motion.button>
                  )
                )}
              </div>

              {/* FOOTER */}
              <div
                className="
                  absolute bottom-8 left-6

                  text-white/18

                  uppercase

                  tracking-[0.18em]

                  text-[10px]
                "
              >
                Arte vivo para celebrar
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}