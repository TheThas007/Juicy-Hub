"use client"

import * as React from "react"
import { useEffect, useState, useRef } from "react"

function CountUp({ end, decimals = 0, duration = 2000, suffix = "" }: { end: number, decimals?: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setCount(easeProgress * end)

      if (progress < 1) {
        window.requestAnimationFrame(animate)
      }
    }
    
    window.requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}{suffix}
    </span>
  )
}

export function TrustSection() {
  return (
    <section className="bg-[#F8F8F8] py-12" id="trust-bar">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-80">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold leading-[1.3]">
              <CountUp end={4.9} decimals={1} />
            </span>
            <div className="flex text-black">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="text-base text-[#666666]">(<CountUp end={330} suffix="+" /> Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-black">eco</span>
            <span className="text-xs font-semibold tracking-[0.1em] uppercase">
              <CountUp end={100} suffix="% Fresh" />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-black">
              do_not_disturb_on
            </span>
            <span className="text-xs font-semibold tracking-[0.1em] uppercase">
              No Added Sugar
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-black">female</span>
            <span className="text-xs font-semibold tracking-[0.1em] uppercase">
              Women-Owned
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
