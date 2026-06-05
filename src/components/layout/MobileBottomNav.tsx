"use client"

import * as React from "react"
import Link from "next/link"

export function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#EAEAEA] z-[110] px-2 py-2 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center">
        <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex flex-col items-center gap-1 p-2 text-black transition-transform hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[10px] font-semibold">Home</span>
        </a>
        <a href="#menu" onClick={(e) => { e.preventDefault(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex flex-col items-center gap-1 p-2 text-[#666666] hover:text-black transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-[24px]">restaurant_menu</span>
          <span className="text-[10px] font-semibold">Menu</span>
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex flex-col items-center gap-1 p-2 text-[#666666] hover:text-black transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-[24px]">celebration</span>
          <span className="text-[10px] font-semibold">Events</span>
        </a>
        <a href="#location" onClick={(e) => { e.preventDefault(); document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex flex-col items-center gap-1 p-2 text-[#666666] hover:text-black transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-[24px]">location_on</span>
          <span className="text-[10px] font-semibold">Location</span>
        </a>
      </div>
    </div>
  )
}
