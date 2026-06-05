export function Location() {
  return (
    <section className="bg-black py-24 text-white reveal-on-scroll" id="location">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em]">
              Visit Our Hub
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-white/60">
                  location_on
                </span>
                <div>
                  <p className="text-base font-bold">Address</p>
                  <p className="text-base text-white/70">
                    3331 Markham Rd Unit 117,
                    <br />
                    Scarborough, ON M1X 1B6
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-white/60">
                  schedule
                </span>
                <div>
                  <p className="text-base font-bold">Opening Hours</p>
                  <p className="text-base text-white/70">
                    Open Daily: 10:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-white/60">
                  call
                </span>
                <div>
                  <p className="text-base font-bold">Phone</p>
                  <a
                    className="text-base text-white/70 hover:text-white transition-colors"
                    href="tel:+14164340909"
                  >
                    +1 416-434-0909
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <a
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all btn-magnetic"
                href="https://www.google.com/maps/place/Juicy+Hub/@43.8337092,-79.2596202,15.81z/data=!3m1!5s0x89d4d6de0898bd7d:0xf546c29d6e8a27a4!4m15!1m8!3m7!1s0x89d4d75ebcfac6d7:0xebfff18c57f66690!2sJuicy+Hub!8m2!3d43.8350875!4d-79.2503986!10e5!16s%2Fg%2F11wq04xxjz!3m5!1s0x89d4d75ebcfac6d7:0xebfff18c57f66690!8m2!3d43.8350875!4d-79.2503986!16s%2Fg%2F11wq04xxjz?hl=en-CA&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg">map</span>
              </a>
              <a
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all btn-magnetic"
                href="tel:+14164340909"
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>
          <div className="h-96 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="Juicy Hub Location"
              src="https://www.google.com/maps?q=Juicy+Hub,+3331+Markham+Rd+Unit+117,+Scarborough,+ON+M1X+1S8&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) contrast(1.2)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
