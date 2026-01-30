import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { TechniquesSection } from "@/components/landing/techniques-section"
import { WhyChooseSection } from "@/components/landing/why-choose-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PurchaseSection } from "@/components/landing/purchase-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { FloatingCTA } from "@/components/landing/floating-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <TechniquesSection />
      <PurchaseSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <Footer />
      <WhatsAppButton />
      <FloatingCTA />
    </main>
  )
}
