import { motion } from 'motion/react';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';

export function ContactSection() {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WHATSAPP',
      href: 'https://wa.me/573182181887?text=Hola%20quiero%20información',
      gradient: 'from-green-400 to-green-600',
      glow: 'rgba(34, 197, 94, 0.5)',
    },
    ,
    {
      icon: Instagram,
      label: 'INSTAGRAM',
      href: 'https://www.instagram.com/indigo_artistico/',
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
      glow: 'rgba(168, 85, 247, 0.5)',
    },
    {
      icon: Facebook,
      label: 'FACEBOOK',
      href: 'https://www.facebook.com/61564393210447/about/',
      gradient: 'from-blue-500 to-blue-700',
      glow: 'rgba(59, 130, 246, 0.5)',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[var(--midnight-blue)] to-black overflow-hidden">
      {/* Stage lighting from above - final act */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse at top, var(--spotlight-gold) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Accent lights */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[var(--spotlight-amber)] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--accent-cyan)] opacity-10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-6xl md:text-7xl mb-6 uppercase tracking-wider text-[var(--spotlight-white)]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 40px rgba(255, 215, 0, 0.4)',
            }}
          >
            ÚNETE AL ESPECTÁCULO
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--spotlight-gold)] to-transparent mx-auto mb-8" />

          <p
            className="text-xl text-[var(--spotlight-white)]/90 mb-16 max-w-2xl mx-auto uppercase tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Conéctate con nosotros
          </p>
        </motion.div>

        {/* Social buttons - illuminated like stage lights */}
        <div className="flex flex-wrap justify-center gap-12 mb-20">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Main button container */}
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${link.glow} 0%, transparent 70%)`,
                    filter: 'blur(20px)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Button */}
                <div className="relative flex flex-col items-center">
                  {/* Icon circle */}
                  <div
                    className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white mb-4 transition-all duration-500`}
                    style={{
                      boxShadow: `0 0 30px ${link.glow}, 0 0 60px ${link.glow}`,
                    }}
                  >
                    <link.icon className="w-12 h-12" />

                    {/* Pulsing glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-50"
                      style={{
                        background: `radial-gradient(circle, ${link.glow} 0%, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  {/* Label */}
                  <span
                    className="text-[var(--spotlight-white)] tracking-wider group-hover:text-[var(--spotlight-gold)] transition-colors duration-300"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                    }}
                  >
                    {link.label}
                  </span>
                </div>

                {/* Bottom spotlight beam */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-24 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(180deg, ${link.glow} 0%, transparent 100%)`,
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stage lights divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-px bg-gradient-to-r from-transparent via-[var(--spotlight-gold)] to-transparent mb-12"
        />

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p
            className="text-[var(--spotlight-white)]/60 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The Grand Spectacle. Magic for everyone, always on stage.<br></br>
            Diseñado con amor para Índigo Artístico
            por Karol Díaz ·{' '}
            <a
              href="https://github.com/Karolart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Karolart90
            </a>

          </p>
          {/* Karolart logo */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                src="/Images/Karolart90Logo.jpg"
                alt="Karolart logo"
                className="w-full h-full object-cover rounded-full"
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
                }}
              />
            </div>
          </div>
          {/* Final accent lights */}
          <div className="flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-[var(--spotlight-gold)]"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                style={{
                  boxShadow: '0 0 10px var(--spotlight-gold)',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
