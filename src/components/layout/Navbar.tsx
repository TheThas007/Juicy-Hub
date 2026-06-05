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
        <div className="flex items-center gap-6">
          <button className="hidden sm:block p-2 hover:opacity-80 transition-opacity text-[#111111]">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
          <button className="px-6 py-3 rounded-full btn-magnetic font-bold transition-all bg-black text-white hover:bg-black/90">
            Order Now
          </button>
          <button
            className="md:hidden text-[#111111]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-[#EAEAEA] bg-white p-6 absolute top-[100%] left-0 w-full flex flex-col gap-4 shadow-lg z-50 text-black">
          <Link href="#hero" className="text-base font-bold" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="#menu" className="text-base text-[#666666]" onClick={() => setIsOpen(false)}>MENU</Link>
          <Link href="#about" className="text-base text-[#666666]" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          <Link href="#shop" className="text-base text-[#666666]" onClick={() => setIsOpen(false)}>SHOP</Link>
          <Link href="#location" className="text-base text-[#666666]" onClick={() => setIsOpen(false)}>LOCATIONS</Link>
          <Link href="#community" className="text-base text-[#666666]" onClick={() => setIsOpen(false)}>COMMUNITY</Link>
          <Link href="#contact" className="text-base text-[#666666]" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#EAEAEA]">
            <button className="bg-black text-white px-6 py-3 rounded-full w-full font-bold">Order Now</button>
          </div>
        </div>
      )}
    </nav>
  )
}
