export function HeroSection() {
  return (
    <header className="relative overflow-hidden pt-12 pb-24 md:py-32 bg-white" id="hero">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="space-y-8">
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.03em] md:tracking-[-0.04em] text-black">
              Fresh Juice.<br />
              Pure Ingredients.<br />
              <span className="text-[#666666]">
                Zero<br />
                Compromise.
              </span>
            </h1>
            <p className="hidden sm:block text-lg leading-relaxed text-[#666666] max-w-lg">
              Handcrafted fresh juices, smoothies, milkshakes, teas and healthy
              beverages made daily with real ingredients.<br />
              Experience Scarborough&apos;s premium wellness destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
              <a 
                href="https://www.doordash.com/store/juicy-hub-inc-scarborough-36820619/84085154/?rwg_token=AFd1xnH-lj5FZ9q8-YywWYKSzw9DNnvusDWehSNqyPy02GSFMnsjR-RlOse2PDRuSw5gB7Hu00xrkRMOP7QswjBuqFXE3akZ8A=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-semibold text-base btn-magnetic hover:scale-[1.02] active:scale-95 transition-all text-center block"
              >
                Order Online
              </a>
              <button className="w-full sm:w-auto border border-[#EAEAEA] bg-white text-[#111111] px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#F8F8F8] transition-all text-center">
                View Menu
              </button>
            </div>
          </div>
          <div className="relative">
            <video
              src="/images/img-1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-[32px] object-cover drop-shadow-2xl bg-[#f0f0f0]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-[#EAEAEA] shadow-xl hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-black">bolt</span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.1em] text-[#666666] uppercase">
                    ENERGY BOOST
                  </p>
                  <p className="text-sm font-bold text-black">100% Raw Ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
