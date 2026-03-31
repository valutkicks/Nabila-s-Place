"use client"

import Image from "next/image"
import { Phone, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-seafood.jpg"
          alt="Delicious seafood platter at Nabila's Place"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? "text-amber-400" : "text-amber-400/50"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium">4.4 Stars • 400+ Reviews</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            A Taste of Authentic
            <br />
            <span className="text-amber-300">Flavor</span> in Benoni
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the finest Portuguese-inspired seafood cuisine. Fresh prawns, 
            succulent crayfish, and traditional flavors that keep our guests coming back.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:0644771122" className="gap-3">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-6 text-lg"
              asChild
            >
              <a
                href="https://maps.google.com/?q=Shop+1+Lakefield+Square+106+Lakefield+Ave+Benoni"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to learn more"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
