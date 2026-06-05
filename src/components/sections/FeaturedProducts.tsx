"use client"

import * as React from "react"

const CATEGORIES = ["All", "Juices", "Smoothies", "Tea", "Coffee", "Milkshakes", "Snacks"]

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = React.useState("All")

  const allProducts = [
    {
      name: "Sugarcane Juice",
      desc: "Pure pressed cane, naturally sweet with a hint of lime. A refreshing classic.",
      price: "$7.50",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpIXEd0FubH3gBA2EEhYXLHJq2A2hZAbxej29msqm16oQcSGWQrg5wDws37Tc28CJthkWsvHLY-cefZ2u1TTUsbH-ndBLsixUG3voPBiI5gk1emYXe3ySZS-twGbXhIxQ1_x5p9BL3kcoxLJiprntE9kOQKZony4ua9NICyJQw9zn_9w6GIZINOcL5aetln3TH3sAl5c8R9Ub3GlLcTtLD2_Gphjqz1mQc7fSmAhvC1q_mnXSOBrirxw1aZKovhdawopFvnLH9UM0",
      category: "Juices",
      featured: true,
    },
    {
      name: "ABC Glow",
      desc: "Apple, Beetroot, Carrot. The ultimate skin detox elixir.",
      price: "$8.95",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4AAmA-HdE_li1RFS9yTMAA86pvXZ4Fu_3OJ9TSQiwcgdOfUb4LTaQ6SDMOA27Ng7NnrAyICHTm-nspSLIgSAp4tBQsD2OssR61iUcUHpRfV9sYYOjMbc4n4Q6NwsJmbnY261a_lqAP2CEqi-o84tjWaJ5ijPY3HuOPVV0_YhkQcPd1_5ByCTqc3PhayM3jaK3z9zIsU7PdbSMsct0wxxKSTM8HXi9CikfOnx4OxsqXvkTTaKq-Nj0HbGS_BLYFfQNl0UU-IaPyU",
      category: "Juices",
    },
    {
      name: "Pure Orange",
      desc: "100% Florida citrus, squeezed to order. Vitamin C powerhouse.",
      price: "$6.50",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuChnmr8bubAL04AGzXfmjQ7uagMyG3uQf2Cc7Y9J2JuMUtZIhKeyPauMvOvWoCW9XAQMgosG7sZkb3nBa44WvMhuoRmokSj0v_CVIiR6shOfK5_D6YKZ-mx_IRuk6xm9_eQly7bb1Rewq0LWEeDNWibQK1E9YyinKcnU-d0iZzCJK_7W3cZn8b0cBCykoKKhCvCqlB0imwaWVjHfH1zZwgl0RzbVe1TCaWJq2vddttpRJ6aIfxu0bTBZ18kgV5LDAJBYRet_P9mcjg",
      category: "Juices",
    },
    {
      name: "Pineapple Zing",
      desc: "Sweet pineapple with a touch of ginger for digestive health.",
      price: "$7.95",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLewevG2XDmOiS6cqtGCONpWBiqhMkMBRaEhTBfi9Hy-DI5l2X_fxXEnjawZSj5pvQddL2jam6ad_yd-PcRBTSUuJzhgYY1m_1tvZ4dkqtM1pzbfq8cKZMplhcmnfVKWVm_mu46hsYDGPHio0EqgKuvoeYVDFWZ4mzF9jfmxF03RkZM3wfEdAYn_lcsmfFfM3BpX3kCvozzH8oBfE3aAWn_InyUqYTgwFC3ZwcvpDmh1oN16fGEKDsGTrTbBRz1cXFXIDkOk6siWM",
      category: "Smoothies",
    },
    {
      name: "Matcha Latte",
      desc: "Premium ceremonial grade matcha with oat milk.",
      price: "$6.50",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA144oDpwisdF0XcEY4hHpZ9_RkLtCfiQJfYwlBGvjyr8nFwDXU5aeYRvmnkM6fUinHjQGxO6MX9sL-ow7pk83W0JulPjy8sI2ew4dVYNL8HEQyz1DVd6U9CAptqY2wjLxp1g91ChLwzpOSnq6Qpfyg6ojSRqhx-eJlG_YL8AWPI2ldDLAekR88TOxT5NHSONJhz6rzRX4exzI4v3OYUe-CS8Hucy9Erx69OAGP4kOrcXWo7EvcTYoERf89ePlHL61cG79k70BDxg",
      category: "Tea",
    },
    {
      name: "Royal Falooda",
      desc: "Rose syrup, vermicelli, sweet basil seeds and ice cream.",
      price: "$8.50",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpIXEd0FubH3gBA2EEhYXLHJq2A2hZAbxej29msqm16oQcSGWQrg5wDws37Tc28CJthkWsvHLY-cefZ2u1TTUsbH-ndBLsixUG3voPBiI5gk1emYXe3ySZS-twGbXhIxQ1_x5p9BL3kcoxLJiprntE9kOQKZony4ua9NICyJQw9zn_9w6GIZINOcL5aetln3TH3sAl5c8R9Ub3GlLcTtLD2_Gphjqz1mQc7fSmAhvC1q_mnXSOBrirxw1aZKovhdawopFvnLH9UM0",
      category: "Milkshakes",
    }
  ]

  const filteredProducts = activeTab === "All" 
    ? allProducts 
    : allProducts.filter((p) => p.category === activeTab)

  return (
    <section className="py-32 bg-[#fafafa]" id="menu">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8">
          <div>
            <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight">
              Crafted for you.
            </h2>
            <p className="text-lg text-[#666666] mt-4 max-w-md">
              Explore our full range of zero-compromise beverages, made fresh to order.
            </p>
          </div>
          
          {/* Apple-style filter tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto lg:max-w-[60%] lg:justify-end">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-[#666666] border border-[#EAEAEA] hover:border-black/20 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Linear/Apple style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[320px]">
          {filteredProducts.map((product, index) => {
            // Make the first item larger if we have enough items
            const isLarge = index === 0 && filteredProducts.length >= 3;
            
            return (
              <div
                key={product.name + index}
                className={`group relative rounded-[32px] overflow-hidden bg-white border border-[#EAEAEA] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col ${
                  isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                <img
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={product.image}
                  loading="lazy"
                />
                
                <div className="relative z-20 mt-auto p-8 flex flex-col justify-end h-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-3 inline-block">
                        {product.category}
                      </span>
                      <h3 className={`font-bold text-white ${isLarge ? 'text-4xl mb-2' : 'text-2xl mb-1'}`}>
                        {product.name}
                      </h3>
                      {isLarge && (
                        <p className="text-white/80 text-lg max-w-sm">
                          {product.desc}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-xl font-bold text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                        {product.price}
                      </span>
                      <a 
                        href="https://www.doordash.com/store/juicy-hub-inc-scarborough-36820619/84085154/?rwg_token=AFd1xnH-lj5FZ9q8-YywWYKSzw9DNnvusDWehSNqyPy02GSFMnsjR-RlOse2PDRuSw5gB7Hu00xrkRMOP7QswjBuqFXE3akZ8A=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg inline-flex"
                      >
                        <span className="material-symbols-outlined">add</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
