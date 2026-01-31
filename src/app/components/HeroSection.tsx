import { motion } from 'motion/react';
import { useRef, useState } from 'react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image + indigo overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(10, 10, 35, 0.85),
              rgba(5, 5, 25, 0.95)
            ),
            url('/StageSpotlights.jpg')
          `,
        }}
      />

      {/* Stage floor shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Spotlights overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen"
        style={{
          backgroundImage: "url('/StageSpotlights.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      />

      {/* Curtain shadow */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent" />

      {/* Indigo glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(120,130,255,0.6) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-wider"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: 'var(--spotlight-white)',
            textShadow: '0 0 20px rgba(120,130,255,0.4)',
          }}
        >
          ÍNDIGO
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-300">
            Arte vivo para celebrar
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl mb-14 text-white/85 uppercase tracking-widest max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Dónde celebrar es crear mundos
        </motion.p>

        {/* Audio Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={toggleAudio}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center"
            style={{
              background:
                'radial-gradient(circle, var(--deep-indigo) 40%, var(--midnight-blue) 100%)',
              boxShadow: isPlaying
                ? `
                  0 0 35px rgba(120,130,255,0.8),
                  0 0 90px rgba(120,130,255,0.5)
                `
                : `
                  0 0 25px rgba(90,100,255,0.4),
                  0 0 70px rgba(120,130,255,0.25)
                `,
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-60"
              style={{
                background:
                  'radial-gradient(circle, rgba(120,130,255,0.35) 0%, transparent 70%)',
              }}
            />

            {/* Logo */}
            <img
              src="/Images/IndigoLogo.jpg"
              alt="Play / Pause audio"
              className="relative z-10 w-full h-full object-cover rounded-full"
            />
          </motion.button>

          {/* Audio */}
          <audio
            ref={audioRef}
            src="/audio/TiersenSound.mp3"
            preload="auto"
            onEnded={() => setIsPlaying(false)}
          />
        </motion.div>

        {/* Light indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex justify-center gap-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: 'rgba(140,150,255,0.8)',
                boxShadow: '0 0 15px rgba(140,150,255,0.8)',
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-50" />
    </section>
  );
}
