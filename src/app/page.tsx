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
import { FloatingOrderButton } from "@/components/ui/FloatingOrderButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <TrustSection />
        <FeaturedProducts />
        <WhyJuicyHub />
        <BestSellers />
        <CustomerReviews />
        <Location />
        <OrderSection />
      </main>
      <Footer />
      <ScrollAnimations />
      <FloatingOrderButton />
    </>
  )
}
