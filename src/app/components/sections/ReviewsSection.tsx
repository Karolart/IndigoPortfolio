import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { supabase } from "../../../lib/supabase";

type Review = {
  id?: string;
  name: string;
  role?: string;
  event_type?: string;
  text: string;
  rating: number;
  approved?: boolean;
};

export function ReviewsSection() {

  const [reviews, setReviews] = useState<Review[]>([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [eventType, setEventType] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {

    const { data } = await supabase
      .from("recommendations")
      .select("*")
      .eq("approved", true)
      .order("created_at", {
        ascending: false,
      });

    if (data) {
      setReviews(data);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const { error } = await supabase
      .from("recommendations")
      .insert([
        {
          name,
          role,
          event_type: eventType,
          text,
          rating,
          approved: false,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Tu experiencia fue enviada.");

    setName("");
    setRole("");
    setEventType("");
    setText("");
    setRating(5);
  };

  return (
    <section
      id="reviews"
      className="
        relative

        py-20
        px-5

        overflow-hidden

        bg-[#080b1d]
      "
    >
      {/* ATMOSPHERE */}
      <div
        className="
          absolute top-0 left-1/2
          -translate-x-1/2

          w-[400px]
          h-[400px]

          rounded-full

          opacity-[0.04]

          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(120,130,255,0.4), transparent 70%)",
        }}
      />

      <div
        className="
          relative z-10

          max-w-5xl
          mx-auto
        "
      >
        {/* HEADER */}
        <div className="text-center mb-14">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
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
            VOCES DEL PÚBLICO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              text-3xl
              md:text-4xl

              text-white

              uppercase

              tracking-[0.03em]

              mb-5
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Experiencias compartidas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              max-w-xl
              mx-auto

              text-white/42

              leading-[1.9]

              text-sm
              md:text-base
            "
          >
            Fragmentos de encuentros,
            emociones y experiencias vividas
            junto a ÍNDIGO.
          </motion.p>
        </div>

        {/* REVIEWS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2

            gap-4

            mb-16
          "
        >
          {reviews.map((review, index) => (

            <motion.div
              key={review.id}

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}

              viewport={{ once: true }}

              className="
                relative

                rounded-[2rem]

                border border-white/8

                bg-white/[0.03]

                backdrop-blur-xl

                p-6
              "
            >
              {/* STARS */}
              <div
                className="
                  flex gap-1

                  mb-5

                  text-[#d6b36a]
                "
              >
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill={
                      star <= review.rating
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}
              </div>

              {/* TEXT */}
              <p
                className="
                  text-white/72

                  leading-[1.9]

                  text-sm
                  md:text-[15px]

                  mb-8
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                “{review.text}”
              </p>

              {/* FOOTER */}
              <div
                className="
                  border-t border-white/6

                  pt-4
                "
              >
                <p
                  className="
                    text-white/88

                    text-sm
                  "
                >
                  {review.name}
                </p>

                {(review.role ||
                  review.event_type) && (
                  <p
                    className="
                      text-white/35

                      text-[11px]

                      uppercase

                      tracking-[0.12em]

                      mt-2
                    "
                  >
                    {review.role}

                    {review.role &&
                      review.event_type &&
                      " · "}

                    {review.event_type}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORM */}
        <div
          className="
            max-w-2xl
            mx-auto

            rounded-[2rem]

            border border-white/8

            bg-white/[0.025]

            backdrop-blur-xl

            p-7
            md:p-9
          "
        >
          <div className="text-center mb-10">

            <p
              className="
                text-white/28

                uppercase

                tracking-[0.22em]

                text-[10px]

                mb-3
              "
            >
              COMPARTIR EXPERIENCIA
            </p>

            <h3
              className="
                text-2xl

                text-white
              "
              style={{
                fontFamily:
                  "'Playfair Display', serif",
              }}
            >
              Déjanos tus palabras
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[

              {
                placeholder: "Nombre",
                value: name,
                setter: setName,
              },

              {
                placeholder: "Rol o tipo de cliente",
                value: role,
                setter: setRole,
              },

              {
                placeholder: "Tipo de evento",
                value: eventType,
                setter: setEventType,
              },

            ].map((field) => (

              <input
                key={field.placeholder}

                placeholder={field.placeholder}

                value={field.value}

                onChange={(e) =>
                  field.setter(e.target.value)
                }

                className="
                  w-full

                  bg-transparent

                  border-b border-white/10

                  pb-3

                  text-sm

                  text-white/75

                  placeholder:text-white/25

                  focus:outline-none
                  focus:border-white/30

                  transition
                "
              />
            ))}

            {/* TEXTAREA */}
            <textarea
              rows={4}

              placeholder="Describe tu experiencia..."

              value={text}

              onChange={(e) =>
                setText(e.target.value)
              }

              className="
                w-full

                resize-none

                bg-transparent

                border-b border-white/10

                pb-3

                text-sm

                text-white/75

                placeholder:text-white/25

                focus:outline-none
                focus:border-white/30

                transition
              "
            />

            {/* RATING */}
            <div className="flex justify-center gap-3 pt-2">

              {[1,2,3,4,5].map((star) => (

                <button
                  key={star}

                  type="button"

                  onClick={() =>
                    setRating(star)
                  }

                  className="
                    transition
                    hover:scale-110
                  "
                >
                  <Star
                    size={18}
                    className={
                      star <= rating
                        ? "text-[#d6b36a] fill-[#d6b36a]"
                        : "text-white/15"
                    }
                  />
                </button>
              ))}
            </div>

            {/* SUBMIT */}
            <div className="text-center pt-4">

              <button
                type="submit"
                className="
                  text-white/55

                  uppercase

                  tracking-[0.18em]

                  text-[11px]

                  hover:text-white

                  transition
                "
              >
                Compartir experiencia
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}