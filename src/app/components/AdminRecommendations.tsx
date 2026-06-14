import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { supabase } from "../../lib/supabase";

type Recommendation = {
  id: string;
  name: string;
  role?: string;
  event_type?: string;
  text: string;
  rating: number;
  approved: boolean;
};

const quotes = [
  "Las ideas pequeñas también merecen existir.",
  "Construir algo propio toma tiempo.",
  "La sensibilidad también es una fortaleza.",
  "Crear lentamente sigue siendo crear.",
  "Todo proyecto empieza siendo invisible.",
  "El arte también es una forma de resistencia.",
  "La constancia transforma lo imposible.",
];

export function AdminRecommendations() {

  const [reviews, setReviews] = useState<
    Recommendation[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [quote, setQuote] = useState("");

  useEffect(() => {

    fetchReviews();

    setQuote(
      quotes[
        Math.floor(
          Math.random() * quotes.length
        )
      ]
    );

  }, []);

  const fetchReviews = async () => {

    setLoading(true);

    const { data, error } = await supabase
      .from("recommendations")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setReviews(data || []);
    setLoading(false);
  };

  const approveReview = async (
    id: string
  ) => {

    await supabase
      .from("recommendations")
      .update({
        approved: true,
      })
      .eq("id", id);

    fetchReviews();
  };

  const deleteReview = async (
    id: string
  ) => {

    await supabase
      .from("recommendations")
      .delete()
      .eq("id", id);

    fetchReviews();
  };

  return (
    <section
      className="
        min-h-screen

        bg-[#080b1d]

        text-white

        px-5
        py-14
      "
    >
      {/* ATMOSPHERE */}
      <div
        className="
          fixed top-0 left-1/2
          -translate-x-1/2

          w-[500px]
          h-[500px]

          rounded-full

          opacity-[0.04]

          blur-3xl

          pointer-events-none
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              text-white/25

              uppercase

              tracking-[0.25em]

              text-[10px]

              mb-4
            "
          >
            ÍNDIGO ADMIN
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            className="
              text-3xl
              md:text-4xl

              uppercase

              tracking-[0.03em]

              mb-5
            "
            style={{
              fontFamily:
                "'Playfair Display', serif",
            }}
          >
            Recomendaciones
          </motion.h1>

          {/* QUOTE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
            }}
            className="
              max-w-lg
              mx-auto

              text-white/38

              italic

              leading-[1.9]

              text-sm
            "
            style={{
              fontFamily:
                "'Playfair Display', serif",
            }}
          >
            “{quote}”
          </motion.p>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-white/30">
            Cargando...
          </p>
        )}

        {/* EMPTY */}
        {!loading &&
          reviews.length === 0 && (
            <p className="text-white/30">
              No hay recomendaciones aún.
            </p>
          )}

        {/* REVIEWS */}
        <div className="space-y-4">

          {reviews.map((review, index) => (

            <motion.div
              key={review.id}

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.05,
              }}

              className="
                rounded-[2rem]

                border border-white/8

                bg-white/[0.03]

                backdrop-blur-xl

                p-6
              "
            >
              {/* TOP */}
              <div
                className="
                  flex justify-between

                  gap-4

                  mb-5
                "
              >
                <div>

                  <p className="text-white/88">
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

                <span
                  className={
                    review.approved
                      ? "text-emerald-400/70 text-[10px] tracking-[0.18em]"
                      : "text-amber-300/70 text-[10px] tracking-[0.18em]"
                  }
                >
                  {review.approved
                    ? "VISIBLE"
                    : "PENDIENTE"}
                </span>
              </div>

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

                  mb-6
                "
              >
                “{review.text}”
              </p>

              {/* ACTIONS */}
              <div className="flex gap-3">

                {!review.approved && (
                  <button
                    onClick={() =>
                      approveReview(review.id)
                    }
                    className="
                      text-emerald-300/70

                      text-[10px]

                      uppercase

                      tracking-[0.16em]

                      hover:text-emerald-200

                      transition
                    "
                  >
                    Aprobar
                  </button>
                )}

                <button
                  onClick={() =>
                    deleteReview(review.id)
                  }
                  className="
                    text-red-300/60

                    text-[10px]

                    uppercase

                    tracking-[0.16em]

                    hover:text-red-200

                    transition
                  "
                >
                  Eliminar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}