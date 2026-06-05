export function BestSellers() {
  return (
    <section className="py-24 reveal-on-scroll" id="shop">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-12">
          Scarborough&apos;s Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-6 md:h-[600px]">
          {/* Falooda - tall card */}
          <div className="md:col-span-1 md:row-span-2 relative group rounded-3xl overflow-hidden bg-black text-white p-8 flex flex-col justify-end min-h-[250px] md:min-h-[400px]">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNc7mjysQw-pBtuH4QTjNSChAPO9xmD_tC5UdqufnP4dVydgZvjyGratI2XKd4teXdXlmJQ2nohtsAwzIrCXjHIUdDp_OhoMz171nMtmCibCXxSDCSCbKdsUHEJJE9OjeapeEAMLoAzANAUzmI1ud1X_80ZzTwSl5vQuT9B8hm6lDi436eNoWQf4jDj4KQEyHFc9uVOyvetXolYaF1o9HywAmvOstM6E4OAQmphRxzF7qgtdqeL8d7kw_HilyUIdgJ-W6h8ukhvVk"
              alt="Classic Falooda"
            />
            <div className="relative z-10">
              <span className="text-xs font-semibold tracking-[0.1em] mb-2 block text-white/70 uppercase">
                DESSERT BEVERAGE
              </span>
              <h3 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-4 text-white">
                Classic Falooda
              </h3>
              <p className="text-base text-white/80 mb-6 leading-relaxed">
                A decadent layered treat with rose, basil seeds, and cream.
              </p>
              <a 
                href="https://www.doordash.com/store/juicy-hub-inc-scarborough-36820619/84085154/?rwg_token=AFd1xnH-lj5FZ9q8-YywWYKSzw9DNnvusDWehSNqyPy02GSFMnsjR-RlOse2PDRuSw5gB7Hu00xrkRMOP7QswjBuqFXE3akZ8A=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 rounded-xl font-bold hover:bg-white/90 transition-colors btn-magnetic inline-block"
              >
                Order $9.50
              </a>
            </div>
          </div>

          {/* Masala Tea */}
          <div className="relative group rounded-3xl overflow-hidden bg-[#f0edec] p-8 flex flex-col justify-end min-h-[180px] md:min-h-[250px]">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF0ZY4x6XRIqBRFpPi2UlQzoWTr5n21MpPJMK0UawRlHFtKGWgZ5dzwHeXumqS3XrLn95Bri4fE7awQIwLbfd75JZpRtmM_crGWjg5EQSIZse-DNdm2IyDrJviw1wAFyuHkHudGujQcbOKezlF0f1xEfCShxOor6oCur5WTRhp3SjzxYg1BIHGEdbyOOSp0MYXQBcf5OqiH9KJJ3RXelevszTFLHxctBfXjbZZLdV4gPv0t-mQOqalMESgL_CFqL3cbbfVlYcVOiE"
              alt="Masala Tea"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em]">
                Masala Tea
              </h3>
              <p className="text-base opacity-80">$4.50</p>
            </div>
          </div>

          {/* Milk Sarbath */}
          <div className="relative group rounded-3xl overflow-hidden bg-[#f0edec] p-8 flex flex-col justify-end min-h-[180px] md:min-h-[250px]">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDNe7cDN668GpET0_Gpb4bkDwBJ62oXT8ZdnIY3lVpwLLvF_1h0UNU86DDpmwBBoxiiJPn5rW2nCbfQGa0G345_lNTLedQUs3Q50J4d-XNx3hP6WiYHif-0EmYGoweAiAwIf3PlgFLMnEcjYPzF9X86ELq728qR5DaVBDZuYs_B2uE5tAQPtj3x0-Br_S9j3Sc7UPeidyw1WvmppGYqO_mJDnbdt0qNdGlaRXZz0EeW2SXAdUh6wa509JObC7lc_V2UcqwdF0q2ng"
              alt="Milk Sarbath"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em]">
                Milk Sarbath
              </h3>
              <p className="text-base opacity-80">$6.95</p>
            </div>
          </div>

          {/* Watermelon Splash - wide card */}
          <div className="md:col-span-2 relative group rounded-3xl overflow-hidden bg-[#f0edec] p-8 flex flex-col justify-end min-h-[180px] md:min-h-[250px]">
            <div className="absolute inset-0 bg-[#F8F8F8]"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.1em] text-[#666666] mb-2 block uppercase">
                  HYDRATION HERO
                </span>
                <h3 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em]">
                  Watermelon Splash
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  Pure watermelon, lime, and a touch of sea salt.
                </p>
              </div>
              <span className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em]">
                $7.25
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
