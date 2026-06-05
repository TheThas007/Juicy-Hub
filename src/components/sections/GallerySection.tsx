"use client"

import * as React from "react"
import { GalleryImage, getGallery } from "@/lib/db"

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
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-12 text-center">
          Our Gallery
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative group rounded-2xl overflow-hidden aspect-square">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                src={img.url}
                alt={img.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
