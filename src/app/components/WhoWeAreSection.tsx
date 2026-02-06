import { motion } from 'motion/react';
import { Zap, Eye, Flame } from 'lucide-react';

export function WhoWeAreSection() {
  return (
    <section className="relative py-24 px-6 bg-[var(--midnight-blue)] overflow-hidden">
      {/* Backstage atmosphere - darker with soft accent lighting */}
      <div className="absolute inset-0">
        {/* Dim work lights */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[var(--spotlight-amber)] opacity-5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[var(--accent-cyan)] opacity-5 blur-3xl" />

        {/* Backstage grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(var(--spotlight-gold) 1px, transparent 1px), linear-gradient(90deg, var(--spotlight-gold) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-6xl md:text-7xl mb-6 uppercase tracking-wider text-[var(--spotlight-white)]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
            }}
          >
            Tras bambalinas          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--spotlight-gold)] to-transparent mx-auto mb-8" />
        </motion.div>

        {/* Main story - backstage narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[var(--deep-indigo)] to-[var(--midnight-blue)] p-10 md:p-16 border-l-4 border-[var(--spotlight-gold)] relative overflow-hidden">
            {/* Subtle spotlight effect */}
            <div
              className="absolute top-0 left-0 w-64 h-64 opacity-10"
              style={{
                background: 'radial-gradient(circle, var(--spotlight-white) 0%, transparent 70%)',
              }}
            />

            <p
              className="text-2xl md:text-3xl leading-relaxed text-[var(--spotlight-white)] mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 0 20px rgba(255, 215, 0, 0.2)',
              }}
            >
              Somos arquitectos del asombro y acompañantes de procesos que transforman realidades.
            </p>

            <div className="space-y-6 text-[var(--spotlight-white)]/90 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="leading-relaxed">
                Desde la primera chispa creativa que nace tras bambalinas hasta el encuentro vivo con las comunidades,
                creamos experiencias artísticas que despiertan la imaginación, invitan al juego y generan espacios de disfrute,
                aprendizaje y reflexión. Cada acción es una composición cuidadosa de movimiento, expresión, pedagogía y
                talento humano comprometido.
              </p>

              <p className="leading-relaxed">
                Nuestro escenario es el territorio donde el arte se encuentra con lo social. Donde el teatro,
                los personajes, el cuerpo y lo simbólico se convierten en lenguajes de cuidado y transformación.
                Cada experiencia cuenta una historia de dedicación colectiva, sensibilidad artística y una búsqueda constante
                por construir entornos protectores, creativos y significativos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core values - theatrical elements */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Flame,
              title: 'PASIÓN',
              description: 'Cada proceso está atravesado por el compromiso, la entrega y el amor por el arte como motor de cambio social.',
            },
            {
              icon: Eye,
              title: 'VISION',
              description: 'Crear experiencias artísticas y pedagógicas que inspiren, fortalezcan comunidades y amplíen las posibilidades de imaginar y habitar otros mundos.',
            },
            {
              icon: Zap,
              title: 'ENERGÍA',
              description: 'Acciones vivas, participativas y sensibles que vibran con la fuerza del juego, la creatividad y la magia del encuentro humano.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-[var(--stage-indigo)] to-[var(--deep-indigo)] p-8 border border-[var(--spotlight-gold)]/20 hover:border-[var(--spotlight-gold)]/60 transition-all duration-500 overflow-hidden">
                {/* Spotlight effect on hover */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(ellipse at top, var(--spotlight-gold) 0%, transparent 50%)',
                  }}
                />

                {/* Icon with glow */}
                <div className="relative mb-6 inline-flex">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--spotlight-gold)] to-[var(--spotlight-amber)] flex items-center justify-center text-[var(--midnight-blue)] group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <div
                    className="absolute inset-0 rounded-full bg-[var(--spotlight-gold)] opacity-30 blur-xl group-hover:opacity-50 transition-opacity"
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-2xl mb-3 uppercase tracking-wide text-[var(--spotlight-white)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[var(--spotlight-white)]/80 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {value.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--spotlight-gold)] to-transparent opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p
            className="text-2xl text-[var(--spotlight-white)] italic max-w-3xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 20px rgba(255, 215, 0, 0.2)',
            }}
          >
            ÍNDIGO transforma espacios cotidianos en experiencias significativas que inspiran, conectan y despiertan el niño interior.          </p>
        </motion.div>
      </div>
    </section>
  );
}
