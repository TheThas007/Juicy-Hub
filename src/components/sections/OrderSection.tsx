import Link from "next/link"

export function OrderSection() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Order Online Card */}
          <div className="bg-black rounded-[40px] py-16 px-10 text-center text-white relative overflow-hidden flex flex-col justify-center items-center reveal-on-scroll">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-md mx-auto space-y-6">
              <span className="material-symbols-outlined text-5xl opacity-80">shopping_bag</span>
              <h2 className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight">
                Ready For Real Fresh Juice?
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Order online for pickup or delivery and taste the difference of
                zero-compromise ingredients.
              </p>
              <div className="pt-6">
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-base hover:scale-105 transition-all shadow-lg">
                  Order Online Now
                </button>
              </div>
            </div>
          </div>

          {/* Live Stations Card */}
          <div className="bg-[#f4f4f4] rounded-[40px] py-16 px-10 text-center text-black relative overflow-hidden flex flex-col justify-center items-center reveal-on-scroll border border-[#EAEAEA]">
            <div className="relative z-10 max-w-md mx-auto space-y-6">
              <span className="material-symbols-outlined text-5xl text-[#FF8A00]">celebration</span>
              <h2 className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight">
                Book Live Stations for Your Event
              </h2>
              <p className="text-base text-[#666666] leading-relaxed">
                Bring the <span className="text-[#14532D] font-bold">Juicy</span> <span className="text-[#E53935] font-bold">Hub</span> experience to your next event and treat your guests to fresh drinks made right in front of them.<br/><br/>
                <span className="font-semibold text-black">Perfect for birthdays, weddings, corporate events, and private parties.</span>
              </p>
              
              <div className="flex flex-col gap-3 pt-4">
                <p className="text-sm font-bold tracking-widest text-[#666666] uppercase mb-2">Contact Us to Book</p>
                <Link 
                  href="https://wa.me/14164340909" 
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-all shadow-md"
                >
                  <span className="material-symbols-outlined">chat</span>
                  WhatsApp (416) 434-0909
                </Link>
                <Link 
                  href="mailto:contact@juicyhub.com"
                  className="flex items-center justify-center gap-3 bg-white border border-[#EAEAEA] text-black px-8 py-4 rounded-full font-bold text-base hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined">mail</span>
                  contact@juicyhub.com
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
