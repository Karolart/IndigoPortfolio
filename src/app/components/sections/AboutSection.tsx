import { motion } from "motion/react";

const concepts = [
  "Arte vivo",
  "Narrativa escénica",
  "Transformación colectiva",
];

export function WhoWeAreSection() {
  return (
    <section
    id="nosotros"
      className="
        relative

        py-16
        md:py-20

        px-6

        overflow-hidden

        bg-[#080b1d]
      "
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute top-1/4 left-1/2
            -translate-x-1/2

            w-[340px]
            h-[340px]

            rounded-full

            opacity-[0.05]

            blur-3xl
          "
          style={{
            background:
              "radial-gradient(circle, rgba(120,130,255,0.35), transparent 72%)",
          }}
        />
      </div>

      <div
        className="
          relative z-10

          max-w-3xl
          mx-auto

          text-center
        "
      >
        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-white/28

            uppercase

            tracking-[0.22em]

            text-[10px]

            mb-4
          "
        >
          TRAS BAMBALINAS
        </motion.p>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            text-3xl
            md:text-4xl

            uppercase

            tracking-[0.03em]

            text-white

            mb-7
          "
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          ÍNDIGO
        </motion.h2>

        {/* MANIFESTO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="
            max-w-2xl
            mx-auto

            text-white/62

            leading-[1.9]

            text-base
            md:text-lg
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Creamos experiencias escénicas que conectan
          arte, emoción y encuentro humano mediante
          personajes, narrativa visual y acciones vivas
          diseñadas para transformar espacios cotidianos
          en momentos memorables.
        </motion.p>

        {/* CONCEPTS */}
        <div
          className="
            flex flex-wrap

            justify-center

            gap-3

            mt-10
          "
        >
          {concepts.map((concept, index) => (
            <motion.div
              key={concept}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                px-4
                py-2

                rounded-full

                border border-white/8

                bg-white/[0.025]

                backdrop-blur-sm

                text-white/52

                uppercase

                tracking-[0.16em]

                text-[10px]
              "
            >
              {concept}
            </motion.div>
          ))}
        </div>

        {/* CLOSING */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
          viewport={{ once: true }}
          className="
            mt-12

            text-white/30

            italic

            text-xs
            md:text-sm
          "
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Arte vivo para celebrar, imaginar y transformar.
        </motion.p>
      </div>
    </section>
  );
}