import { motion } from "motion/react";
import { useRef, useState } from "react";

export function HeroSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="
        relative

        min-h-screen

        flex items-center justify-center

        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0

          bg-cover bg-center
          scale-105
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(6, 6, 20, 0.82),
              rgba(8, 8, 24, 0.96)
            ),
            url('/StageSpotlights.jpg')
          `,
        }}
      />

      {/* ATMOSPHERIC LIGHT */}
      <div
        className="
          absolute inset-0

          opacity-[0.12]

          mix-blend-screen

          pointer-events-none
        "
        style={{
          backgroundImage: "url('/StageSpotlights.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      />

      {/* TOP SHADOW */}
      <div
        className="
          absolute top-0 left-0

          w-full h-40

          bg-gradient-to-b
          from-black/70
          to-transparent
        "
      />

      {/* BOTTOM FADE */}
      <div
        className="
          absolute bottom-0 left-0

          w-full h-56

          bg-gradient-to-t
          from-[#090b1d]
          via-[#090b1d]/70
          to-transparent
        "
      />

      {/* MAIN GLOW */}
      <div
        className="
          absolute left-1/2 top-[56%]

          -translate-x-1/2
          -translate-y-1/2

          w-[380px]
          h-[380px]

          rounded-full

          opacity-[0.08]

          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(120,130,255,0.4), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10

          max-w-2xl
          mx-auto

          px-6

          pt-12

          text-center
        "
      >
        {/* BRAND */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-white/75

            uppercase

            tracking-[0.22em]

            text-lg
            md:text-xl

            mb-5
          "
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          ÍNDIGO
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="
            text-5xl
            md:text-6xl

            leading-[0.88]

            uppercase

            tracking-[-0.05em]

            text-transparent
            bg-clip-text

            bg-gradient-to-b
            from-indigo-100
            via-indigo-200
            to-indigo-300

            mb-10
          "
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: "0 0 20px rgba(120,130,255,0.12)",
          }}
        >
          ARTE
          <br />
          VIVO PARA
          <br />
          CELEBRAR
        </motion.h1>

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={toggleAudio}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              relative

              w-24 h-24
              md:w-28 md:h-28

              rounded-full

              overflow-hidden

              flex items-center justify-center
            "
            style={{
              boxShadow: isPlaying
                ? `
                  0 0 18px rgba(120,130,255,0.4),
                  0 0 45px rgba(120,130,255,0.10)
                `
                : `
                  0 0 10px rgba(120,130,255,0.18),
                  0 0 25px rgba(120,130,255,0.05)
                `,
            }}
          >
            {/* INNER GLOW */}
            <div
              className="
                absolute inset-0

                rounded-full

                blur-2xl

                opacity-25
              "
              style={{
                background:
                  "radial-gradient(circle, rgba(120,130,255,0.2), transparent 70%)",
              }}
            />

            {/* IMAGE */}
            <img
              src="/Images/IndigoLogo.jpg"
              alt="ÍNDIGO"
              className="
                relative z-10

                w-full h-full

                object-cover

                rounded-full
              "
            />
          </motion.button>

          {/* AUDIO */}
          <audio
            ref={audioRef}
            src="/audio/TiersenSound.mp3"
            preload="auto"
            onEnded={() => setIsPlaying(false)}
          />
        </motion.div>
      </div>
    </section>
  );
}