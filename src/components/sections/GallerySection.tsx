"use client"

import * as React from "react"
import { GalleryImage, getGallery } from "@/lib/db"

const getGridClass = (index: number) => {
  const p = index % 10;
  if (p === 0) return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
  if (p === 1 || p === 2) return "col-span-1 row-span-1 md:col-span-1 md:row-span-1";
  if (p === 3) return "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
  if (p === 4) return "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
  if (p === 5) return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
  if (p === 6 || p === 7) return "col-span-1 row-span-1 md:col-span-1 md:row-span-1";
  if (p === 8) return "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
  if (p === 9) return "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
  return "col-span-1 row-span-1";
}

export function GallerySection() {
  const [images, setImages] = React.useState<GalleryImage[]>([])

  React.useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGallery()
        setImages(data)
      } catch (error) {
        console.error("Failed to fetch gallery", error)
      }
    }
    fetchGallery()
  }, [])

  if (images.length === 0) return null;

  return (
    <section className="py-32 bg-[#111111]" id="gallery">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#FFD700] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Inside Juicy Hub
          </span>
          <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Moments we share.
          </h2>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors border border-white/20 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-white/10">
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            Follow our journey
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-4 md:gap-6">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`relative group rounded-[32px] overflow-hidden bg-[#222222] ${getGridClass(index)}`}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                src={img.url}
                alt={img.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[20px]">favorite</span>
                  </div>
                  <span className="text-white font-medium text-sm drop-shadow-md">Juicy Hub Vibe</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
