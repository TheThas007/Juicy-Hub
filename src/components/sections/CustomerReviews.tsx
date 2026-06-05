import * as React from "react"

export function CustomerReviews() {
  const reviews = [
    {
      text: "\"I dropped by at juice hub pretty close to their closing time and honestly didn't expect to be accommodated. But Shianna, who was working there, went out of her way to make a drink for me anyway. She was super kind and cheerful. Definitely made my evening a lot better.\"",
      name: "Rajeshwar Singh",
      label: "LOCAL GUIDE",
    },
    {
      text: "\"Hands down one of the best juice spots around! Everything tastes super fresh, not overly sweet, and you can tell they use real ingredients. Staff is friendly and the place is always clean. Highly recommend always!\"",
      name: "Menusan Sivanesan",
      label: "CUSTOMER",
    },
    {
      text: "\"Just discovered this place and I must say I am incredibly impressed! The juice is all fresh made, incredibly delicious, and Ranu is the star of the show she makes you feel right at home! Absolutely amazing vibes in this place it's a must visit!\"",
      name: "Luvy Jawanda",
      label: "LOCAL GUIDE",
    },
    {
      text: "\"Tried the ABC Glow healthy drink and the Beetroot juice at Juicy Hub both were excellent. The juices tasted fresh, pure, and natural with no water mixed in. You can really tell the quality. Highly recommend if you're looking for authentic healthy juice options\"",
      name: "Palasingham Thivaharan",
      label: "CUSTOMER",
    },
    {
      text: "\"Juicy Hub is a hidden gem in Scarborough serving refreshing drinks, delicious ice cream, and the perfect variety of snacks—all in one cozy spot!\"",
      name: "Marina Yaseen",
      label: "LOCAL GUIDE",
    },
    {
      text: "\"We ordered Irani Kadak Chai, Bru coffee and Masala Chai. It was one of the best Chai that we had in Toronto outside of our home. This little gem of a place has the potential to become very popular!\"",
      name: "Karan Mahimkar",
      label: "CUSTOMER",
    },
    {
      text: "\"I haven been to this little cafe twice, and the service has been phenomenal. They are so kind, accommodating and full of energy. Whether you ask for a coffee, a shake or something to eat everything was great. Definitely recommend\"",
      name: "Neetisha Gupta",
      label: "CUSTOMER",
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
