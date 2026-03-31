import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { Experience } from "@/components/experience"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Reviews />
      <Contact />
      <CTA />
      <Footer />
      <FloatingButtons />
      
      {/* Safe area padding for mobile sticky footer */}
      <div className="h-20 md:h-0" />
    </main>
  )
}
