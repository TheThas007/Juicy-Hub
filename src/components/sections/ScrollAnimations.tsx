"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    // Header scroll effect
    const header = document.getElementById("main-header")
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
      }
    }
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
          revealObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      revealObserver.observe(el)
    })

    // Staggered delay for product grid items
    const productGridItems = document.querySelectorAll(
      "#product-grid > .reveal-on-scroll"
    )
    productGridItems.forEach((item, index) => {
      ;(item as HTMLElement).style.transitionDelay = `${index * 100}ms`
    })

    // Staggered delay for why columns
    const whyItems = document.querySelectorAll(
      "#why-columns > .reveal-on-scroll"
    )
    whyItems.forEach((item, index) => {
      ;(item as HTMLElement).style.transitionDelay = `${index * 150}ms`
    })

    // Parallax mouse effect for hero image
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) / 80
      const moveY = (e.clientY - window.innerHeight / 2) / 80

      const heroImg = document.querySelector("header img") as HTMLElement
      if (heroImg && window.innerWidth > 768) {
        heroImg.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }
    document.addEventListener("mousemove", handleMouseMove)

    // Magnetic button effect
    const magneticBtns = document.querySelectorAll(".btn-magnetic")
    const handlers: Array<{
      el: Element
      move: (e: MouseEvent) => void
      leave: () => void
    }> = []

    magneticBtns.forEach((btn) => {
      const moveHandler = (e: MouseEvent) => {
        const rect = (btn as HTMLElement).getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        ;(btn as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`
      }
      const leaveHandler = () => {
        ;(btn as HTMLElement).style.transform = ""
      }
      btn.addEventListener("mousemove", moveHandler as EventListener)
      btn.addEventListener("mouseleave", leaveHandler as EventListener)
      handlers.push({ el: btn, move: moveHandler, leave: leaveHandler })
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousemove", handleMouseMove)
      revealObserver.disconnect()
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move as EventListener)
        el.removeEventListener("mouseleave", leave as EventListener)
      })
    }
  }, [])

  return null
}
