import { motion } from "motion/react";

interface ExperienceCardProps {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
  };

  onClick: () => void;
}

export function ExperienceCard({
  item,
  onClick,
}: ExperienceCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="
        group
        relative

        w-full
        h-[260px]

        overflow-hidden

        rounded-[1.6rem]

        border border-white/10

        bg-black/30

        text-left

        cursor-pointer
      "
    >
      {/* IMAGE */}
      <div
        className="
          absolute inset-0

          bg-cover bg-center

          scale-100
          group-hover:scale-105

          transition-transform
          duration-[1800ms]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.15),
              rgba(0,0,0,0.78)
            ),
            url('${item.image}')
          `,
        }}
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-br
          from-indigo-500/10
          via-transparent
          to-violet-500/10

          opacity-60
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10

          h-full

          flex flex-col justify-end

          p-5
        "
      >
        {/* LABEL */}
        <p
          className="
            text-white/35

            uppercase

            tracking-[0.22em]

            text-[10px]

            mb-2
          "
        >
          ÍNDIGO EXPERIENCE
        </p>

        {/* TITLE */}
        <h3
          className="
            text-white

            text-2xl
            md:text-3xl

            uppercase

            tracking-[0.02em]

            mb-3
          "
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-white/60

            text-sm
            md:text-base

            leading-relaxed

            max-w-sm
          "
        >
          {item.description}
        </p>

        {/* EXPLORE */}
        <div
          className="
            mt-5

            flex items-center gap-3

            text-white/45

            uppercase

            tracking-[0.18em]

            text-[10px]
          "
        >
          <span>Explorar</span>

          <div
            className="
              w-8 h-[1px]

              bg-white/25

              group-hover:w-14
              group-hover:bg-indigo-300

              transition-all duration-500
            "
          />
        </div>
      </div>

      {/* GLOW */}
      <div
        className="
          absolute bottom-[-60px] right-[-60px]

          w-[140px]
          h-[140px]

          rounded-full

          bg-indigo-400/10

          blur-3xl

          opacity-0
          group-hover:opacity-100

          transition duration-700
        "
      />
    </motion.button>
  );
}