import { motion } from "motion/react";
import {
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/573182181887?text=Hola%20quiero%20información",
    },

    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/indigo_artistico/",
    },

    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/61564393210447/about/",
    },
  ];

  return (
    <section
    
      id="contacto"
      className="
        relative

        py-20
        px-6

        overflow-hidden

        bg-gradient-to-b
        from-[#080b1d]
        to-black
      "
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute bottom-0 left-1/2
            -translate-x-1/2

            w-[400px]
            h-[400px]

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
          CONTACTO
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

            mb-6
          "
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Conectemos
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            max-w-xl
            mx-auto

            text-white/55

            leading-[1.9]

            text-sm
            md:text-base
          "
        >
          Si deseas construir una experiencia
          artística junto a ÍNDIGO, puedes
          encontrarnos aquí.
        </motion.p>

        {/* SOCIALS */}
        <div
          className="
            flex flex-wrap

            justify-center

            gap-4

            mt-12
          "
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"

              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}

              whileHover={{
                y: -2,
              }}

              className="
                flex items-center gap-3

                px-5
                py-3

                rounded-full

                border border-white/8

                bg-white/[0.03]

                backdrop-blur-sm

                text-white/65

                hover:text-white

                transition-all duration-300
              "
            >
              <link.icon size={16} />

              <span
                className="
                  uppercase

                  tracking-[0.14em]

                  text-[11px]
                "
              >
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            mt-16

            text-white/22

            text-xs

            leading-loose
          "
        >
          <p>
            Diseñado con amor para ÍNDIGO
          </p>

          <p className="mt-2">
            Karol Díaz · Karolart90
          </p>

          {/* LOGO */}
          <div className="flex justify-center mt-6">
            <div
              className="
                w-12 h-12

                rounded-full

                overflow-hidden

                opacity-70
              "
            >
              <img
                src="/Images/Karolart90Logo.jpg"
                alt="Karolart"
                className="
                  w-full h-full

                  object-cover
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}