import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const characters = [
  {
    id: 1,
    name: 'VIOLETA ENRIQUETA',
    role: 'Personaje artístico – animación y mediación pedagógica',
    description: 'Personaje que anima eventos a través de magia, malabarismos y equilibrios, combinando diversión con mensajes pedagógicos sobre la prevención del bullying y los derechos de niñas, niños y adolescentes.',
    image: '/Images/1.png',
  },
  {
    id: 2,
    name: 'REPENTINA DE LAS FLORES',
    role: 'Personaje artístico – mediación ambiental y socialr',
    description: 'Campesina que conoce y defiende sus derechos y los de la naturaleza. A través de habilidades escénicas y la creación de objetos musicales y artísticos con materiales reciclables, promueve el empoderamiento de las mujeres y nuevas formas de reutilización de los residuos.',
    image: '/Images/2.jpg',
  },
  {
    id: 3,
    name: 'ESTELLA',
    role: 'Personaje artístico – sensibilización laboral',
    description: 'Personaje multifacético adaptable a diferentes contextos, ideal para abordar de manera lúdica temas como productividad laboral, prevención de riesgos y salud y seguridad en el trabajo.',
    image: '/Images/3.png',
  },
  {
    id: 4,
    name: 'LA DOCTORA REPENTINA',
    role: 'Personaje escénico – educación y acompañamiento en salud',
    description: 'Personaje idóneo para campañas de promoción de la salud, acompañamiento a pacientes hospitalizados y abordaje lúdico de temas de salud sexual y reproductiva.',
    image: '/Images/4.png',
  },
   {
    id: 5,
    name: 'DEPORTINA',
    role: 'Personaje escénico – sensibilización en bienestar y salud',
    description: 'Personaje idóneo para campañas de promoción de estilos de vida saludables, que integran la actividad física, hábitos alimenticios y el uso adecuado de dispositivos tecnológicos.',
    image: '/Images/5.png',
  },
   { id: 6,
    name: 'CACHIVACHA',
    role: 'Personaje artístico – sensibilización ambiental y social',
    description: 'Personaje que conecta el saber del campo con la reflexión cotidiana, invitando al público a pensar sobre el cuidado de la vida, los hábitos diarios y la relación entre las ideas, el territorio y las acciones humanas, a través del juego y la expresión escénica.',
    image: '/Images/6.png'
   },
];

export function CharactersSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[var(--deep-indigo)] to-[var(--midnight-blue)] overflow-hidden">
      {/* Stage lighting from above */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-64 h-full"
            style={{
              left: `${25 * i}%`,
              background: 'radial-gradient(ellipse at top, rgba(255, 215, 0, 0.4) 0%, transparent 50%)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-6xl md:text-7xl mb-4 uppercase tracking-wider text-[var(--spotlight-white)]"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 40px rgba(255, 215, 0, 0.4)',
            }}
          >
           Los Personajes
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--spotlight-gold)] to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card with dramatic lighting */}
              <div className="relative overflow-hidden">
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dramatic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-blue)] via-transparent to-[var(--midnight-blue)]/60" />
                  
                  {/* Spotlight effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.3) 0%, transparent 60%)',
                    }}
                  />
                  
                  {/* Top stage light beam */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(ellipse at top, var(--spotlight-white) 0%, transparent 50%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative bg-[var(--midnight-blue)]/90 backdrop-blur-sm p-6 border-t-2 border-[var(--spotlight-gold)]/30">
                  {/* Name */}
                  <h3 
                    className="text-2xl mb-2 uppercase tracking-wide text-[var(--spotlight-white)] group-hover:text-[var(--spotlight-gold)] transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                    }}
                  >
                    {character.name}
                  </h3>
                  
                  {/* Role */}
                  <p 
                    className="text-sm text-[var(--spotlight-amber)] uppercase tracking-wider mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {character.role}
                  </p>
                  
                  {/* Description */}
                  <p 
                    className="text-[var(--spotlight-white)]/80 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {character.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--spotlight-gold)] to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                </div>

                {/* Glowing border on hover */}
                <div className="absolute inset-0 border-2 border-[var(--spotlight-gold)] opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" 
                  style={{
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
