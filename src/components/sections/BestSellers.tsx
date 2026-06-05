"use client"

import * as React from "react"
import { Product } from "@/lib/db"

export function BestSellers() {
  const [bestSellers, setBestSellers] = React.useState<Product[]>([])

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products")
        const data = await res.json()
        setBestSellers(data.filter((p: Product) => p.isBestSeller).slice(0, 4))
      } catch (error) {
        console.error("Failed to fetch best sellers", error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="py-24 reveal-on-scroll" id="shop">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-12">
          Scarborough&apos;s Favorites
        </h2>
        
        {bestSellers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-6 md:h-[600px]">
            {bestSellers.map((product, index) => {
              // Replicating the specific layout from original design
              if (index === 0) {
                // First item (Tall card)
                return (
                  <div key={product.id} className="md:col-span-1 md:row-span-2 relative group rounded-3xl overflow-hidden bg-black text-white p-8 flex flex-col justify-end min-h-[250px] md:min-h-[400px]">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="relative z-10">
                      <span className="text-xs font-semibold tracking-[0.1em] mb-2 block text-white/70 uppercase">
                        {product.category}
                      </span>
                      <h3 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-4 text-white">
                        {product.name}
                      </h3>
                      <p className="text-base text-white/80 mb-6 leading-relaxed">
                        {product.desc}
                      </p>
                      <a 
                        href="https://www.doordash.com/store/juicy-hub-inc-scarborough-36820619/84085154/?rwg_token=AFd1xnH-lj5FZ9q8-YywWYKSzw9DNnvusDWehSNqyPy02GSFMnsjR-RlOse2PDRuSw5gB7Hu00xrkRMOP7QswjBuqFXE3akZ8A=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-2 rounded-xl font-bold hover:bg-white/90 transition-colors btn-magnetic inline-block"
                      >
                        Order {product.price}
                      </a>
                    </div>
                  </div>
                )
              }
              
              if (index === bestSellers.length - 1 && index === 3) {
                // Last item out of 4 (Wide card)
                return (
                  <div key={product.id} className="md:col-span-2 relative group rounded-3xl overflow-hidden bg-[#f0edec] p-8 flex flex-col justify-end min-h-[180px] md:min-h-[250px]">
                    <div className="absolute inset-0 bg-[#F8F8F8]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <span className="text-xs font-semibold tracking-[0.1em] text-[#666666] mb-2 block uppercase">
                          {product.category}
                        </span>
                        <h3 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em]">
                          {product.name}
                        </h3>
                        <p className="text-base text-[#666666] leading-relaxed">
                          {product.desc}
                        </p>
                      </div>
                      <span className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em]">
                        {product.price}
                      </span>
                    </div>
                  </div>
                )
              }

              // Standard items
              return (
                <div key={product.id} className="relative group rounded-3xl overflow-hidden bg-[#f0edec] p-8 flex flex-col justify-end min-h-[180px] md:min-h-[250px]">
                  <img
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="relative z-10 text-white">
                    <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em]">
                      {product.name}
                    </h3>
                    <p className="text-base opacity-80">{product.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
