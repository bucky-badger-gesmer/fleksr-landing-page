import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

