import { motion } from 'motion/react';

export function StageSpotlights() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main spotlight beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-full"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255, 215, 0, 0.3) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-full"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255, 191, 0, 0.25) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-full"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255, 254, 247, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      
      {/* Light particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--spotlight-gold)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Radial light beams */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-1/2 w-px h-full origin-top"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.4) 0%, transparent 50%)',
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
