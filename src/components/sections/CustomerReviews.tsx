import * as React from "react"

export function CustomerReviews() {
  const reviews = [
    {
      text: "\"The freshest juices in Scarborough. I come here every morning for my ABC Glow. The environment is so clean and peaceful.\"",
      name: "Sarah Jenkins",
      label: "LOCAL GUIDE",
    },
    {
      text: <>" <span className="text-[#14532D] font-bold">Juicy</span> <span className="text-[#E53935] font-bold">Hub</span> is a gem. Their Sugarcane juice is actually pressed fresh right in front of you. Truly zero compromise on quality."</>,
      name: "Michael Chen",
      label: "LOYAL CUSTOMER",
    },
    {
      text: "\"Best smoothies I've ever had! The Pineapple Zing totally transformed my morning routine. Plus, the staff is incredibly friendly.\"",
      name: "Emily Rodriguez",
      label: "FITNESS ENTHUSIAST",
    },
    {
      text: "\"I order their wellness shots every week. You can really taste the raw, organic ingredients. Highly recommend to everyone.\"",
      name: "David Kim",
      label: "VERIFIED BUYER",
    },
    {
      text: "\"A luxury juice experience without the crazy prices. The Royal Falooda is out of this world. I'm a customer for life.\"",
      name: "Jessica Patel",
      label: "FOOD BLOGGER",
    },
  ]

  // Duplicate the reviews array so the marquee can scroll infinitely without jumping
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="py-32 bg-[#fafafa] overflow-hidden" id="community">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 mb-16 text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-[#666666] uppercase mb-4 block">
          Testimonials
        </span>
        <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight">
          Loved by the community.
        </h2>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden">
        {/* Gradient fades on the edges for a premium look */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10"></div>

        <div className="flex animate-marquee w-[200%] md:w-[250%] lg:w-[200%] gap-6 py-4 px-6 hover:pause">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-none w-[320px] md:w-[400px] bg-white border border-[#EAEAEA] p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer"
            >
              <div className="flex text-[#FFD700] mb-5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-[#111111] font-medium mb-8 line-clamp-4">
                {review.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-bold text-[#111111]">{review.name}</p>
                  <p className="text-[10px] font-bold tracking-[0.1em] text-[#666666] uppercase mt-1">
                    {review.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
