export function WhyJuicyHub() {
  const features = [
    {
      icon: "schedule",
      title: "Fresh Daily",
      desc: "We press our juices every single morning. No bottles sitting on shelves, no pasteurization, just raw nature.",
    },
    {
      icon: "forest",
      title: "100% Natural",
      desc: "Pure ingredients from local farms. No concentrates, no artificial colors, and absolutely no added syrups.",
    },
    {
      icon: "health_and_safety",
      title: "Healthy Choice",
      desc: "Crafted by nutrition enthusiasts to ensure every sip contributes to your daily wellness and energy levels.",
    },
  ]

  return (
    <section className="py-24 bg-[#F8F8F8]" id="about">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 text-center">
        <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-20 reveal-on-scroll">
          The Zero Compromise Standard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16" id="why-columns">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 reveal-on-scroll">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <span className="material-symbols-outlined text-black text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em]">
                {feature.title}
              </h3>
              <p className="text-base text-[#666666] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
