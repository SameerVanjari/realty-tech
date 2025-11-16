import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import GalleryShowcase from '../components/GalleryShowcase'
import WhyItHelps from '../components/WhyItHelps'
import PricingSection from '../components/PricingSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center">
        <HeroSection />
        <HowItWorks />
        <GalleryShowcase />
        <WhyItHelps />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
