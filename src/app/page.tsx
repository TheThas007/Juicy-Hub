import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { FeaturedProducts } from "@/components/sections/FeaturedProducts"
import { WhyJuicyHub } from "@/components/sections/WhyJuicyHub"
import { BestSellers } from "@/components/sections/BestSellers"
import { CustomerReviews } from "@/components/sections/CustomerReviews"
import { Location } from "@/components/sections/Location"
import { OrderSection } from "@/components/sections/OrderSection"
import { ScrollAnimations } from "@/components/sections/ScrollAnimations"
import { GallerySection } from "@/components/sections/GallerySection"
import { FloatingOrderButton } from "@/components/ui/FloatingOrderButton"
import { MobileBottomNav } from "@/components/layout/MobileBottomNav"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pb-20 md:pb-0">
        <HeroSection />
        <TrustSection />
        <FeaturedProducts />
        <WhyJuicyHub />
        <BestSellers />
        <GallerySection />
        <CustomerReviews />
        <Location />
        <OrderSection />
      </main>
      <Footer />
      <ScrollAnimations />
      <FloatingOrderButton />
      <MobileBottomNav />
    </>
  )
}
