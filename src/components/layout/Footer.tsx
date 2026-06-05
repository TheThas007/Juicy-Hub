import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#EAEAEA] bg-white pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img
                alt="Juicy Hub Logo"
                className="h-16 md:h-20 w-auto"
                src="/logo.png"
              />
              <span className="text-2xl font-extrabold tracking-tight leading-none">
                <span className="text-black">Juicy Hub</span>
              </span>
            </div>
            <p className="text-base text-[#666666] leading-relaxed">
              Zero compromise on freshness, health, and taste. Handcrafted
              daily in Scarborough.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-black">
              Explore
            </h4>
            <ul className="space-y-3 text-base text-[#666666]">
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Juice Cleanses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Milkshakes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Catering
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-black">
              Company
            </h4>
            <ul className="space-y-3 text-base text-[#666666]">
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Sourcing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-black">
              Legal
            </h4>
            <ul className="space-y-3 text-base text-[#666666]">
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li className="pt-4 flex gap-4">
                <Link
                  href="https://www.instagram.com/juicyhub.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:text-[#E1306C] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.tiktok.com/@juicyhub.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:text-[#000000] transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#EAEAEA] gap-4">
          <p className="text-base text-[#666666]">
            © 2024 <span className="text-black font-bold">Juicy Hub</span>. Zero Compromise.
          </p>
          <div className="flex items-center gap-2 text-[#666666] opacity-50 text-[10px] font-semibold tracking-[0.1em]">
            <span>DESIGNED FOR PERFORMANCE</span>
            <span className="w-1 h-1 bg-[#666666] rounded-full"></span>
            <span>SCARBOROUGH, CA</span>
            <span className="w-1 h-1 bg-[#666666] rounded-full"></span>
            <Link href="/admin" className="hover:text-black transition-colors">ADMIN PANEL</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
