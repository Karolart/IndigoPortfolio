import { useState } from "react";
import { motion } from "motion/react";

import { experiences } from "../experiences/experiencesData";
import { ExperienceCard } from "../experiences/ExperienceCard";
import { ExpandedExperience } from "../experiences/ExpandedExperience";

export function ExperiencesSection() {

  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="experiencias"
      className="
        relative

        py-20
        px-5

        overflow-hidden
      "
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div
        className="
          absolute inset-0
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(8,10,28,0) 0%,
              rgba(8,10,28,0.92) 18%,
              rgba(8,10,28,1) 100%
            )
          `,
        }}
      />

      {/* SUBTLE GLOW */}
      <div
        className="
          absolute top-0 left-1/2
          -translate-x-1/2

          w-[260px]
          h-[260px]

          rounded-full

          opacity-[0.05]

          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(120,130,255,0.35), transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10

          max-w-5xl
          mx-auto
        "
      >
        {/* HEADER */}
        <div
          className="
            text-center

            mb-12
          "
        >
          {/* LABEL */}
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
            EXPERIENCIAS ÍNDIGO
          </motion.p>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              text-3xl
              md:text-4xl

              text-white

              uppercase

              tracking-[0.02em]

              mb-4
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Experiencias
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              max-w-xl
              mx-auto

              text-white/45

              leading-relaxed

              text-sm
              md:text-base
            "
          >
            Arte vivo diseñado para espacios educativos,
            corporativos, culturales y celebrativos.
          </motion.p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2

            gap-4
          "
        >
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <ExperienceCard
                item={item}
                onClick={() => setSelected(item)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN EXPERIENCE */}
      {selected && (
        <ExpandedExperience
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}