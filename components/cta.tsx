import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Experience the Flavor
            <br />
            <span className="text-amber-300">for Yourself</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join us at Nabila&apos;s Place and discover why our guests keep coming back. 
            Fresh seafood, authentic Portuguese flavors, and warm hospitality await you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-10 py-7 text-lg"
              asChild
            >
              <a
                href="https://maps.google.com/?q=Shop+1+Lakefield+Square+106+Lakefield+Ave+Benoni"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <MapPin className="h-5 w-5" />
                Visit Us Today
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-10 py-7 text-lg"
              asChild
            >
              <a href="tel:0644771122" className="gap-3">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/60">
            <div className="flex items-center gap-2">
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
              <span className="text-sm">4.4★ Rating</span>
            </div>
            <div className="w-px h-4 bg-primary-foreground/30" />
            <span className="text-sm">400+ Happy Reviews</span>
            <div className="w-px h-4 bg-primary-foreground/30" />
            <span className="text-sm">Fresh Seafood Daily</span>
          </div>
        </div>
      </div>
    </section>
  )
}
