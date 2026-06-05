"use client"

import * as React from "react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav
      className="sticky top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-[#EAEAEA]"
      id="main-header"
    >
      <div className="max-w-[1200px] mx-auto h-20 px-5 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <img
              alt="Juicy Hub Logo"
              className="h-10 w-auto object-contain"
              src="/logo.png"
            />
            <span className="text-2xl font-extrabold tracking-tight leading-none">
              <span className="text-[#14532D]">Juicy</span><span className="text-[#E53935]"> Hub</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              href="#hero"
              className="text-sm font-bold border-b-2 border-black pb-1 text-black"
            >
              HOME
            </Link>
            <Link
              href="#menu"
              className="text-sm text-[#666666] hover:text-black transition-colors"
            >
              MENU
            </Link>
            <Link
              href="#about"
              className="text-sm text-[#666666] hover:text-black transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="#shop"
              className="text-sm text-[#666666] hover:text-black transition-colors"
            >
              SHOP
            </Link>
            <Link
              href="#location"
              className="text-sm text-[#666666] hover:text-black transition-colors"
            >
              LOCATIONS
            </Link>
            <Link
              href="#community"
              className="text-sm text-[#666666] hover:text-black transition-colors"
            >
              COMMUNITY
            </Link>
            <Link
              href="#contact"
              className="text-sm text-[#666666] hover:text-black transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button className="p-2 hover:opacity-80 transition-opacity text-[#111111]">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
          <a 
            href="https://www.doordash.com/store/juicy-hub-inc-scarborough-36820619/84085154/?rwg_token=AFd1xnH-lj5FZ9q8-YywWYKSzw9DNnvusDWehSNqyPy02GSFMnsjR-RlOse2PDRuSw5gB7Hu00xrkRMOP7QswjBuqFXE3akZ8A=="
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-3 rounded-full btn-magnetic font-bold transition-all bg-black text-white hover:bg-black/90"
          >
            Order Now
          </a>
          <button className="md:hidden p-2 text-[#111111]">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>

      {/* Mobile nav is now handled by MobileBottomNav */}
    </nav>
  )
}
