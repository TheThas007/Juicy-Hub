"use client"

import * as React from "react"
import { useEffect, useState } from "react"

export function FloatingOrderButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check immediately

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://www.doordash.com/store/juicy-hub-inc-scarborough-36820619/84085154/?rwg_token=AFd1xnH-lj5FZ9q8-YywWYKSzw9DNnvusDWehSNqyPy02GSFMnsjR-RlOse2PDRuSw5gB7Hu00xrkRMOP7QswjBuqFXE3akZ8A=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all group relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        <span className="relative z-10 text-xl">🍹</span>
        <span className="relative z-10 text-sm tracking-wide">Order Now</span>
      </a>
    </div>
  )
}
