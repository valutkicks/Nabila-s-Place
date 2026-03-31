"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button - Desktop */}
      <a
        href="https://wa.me/27644771122"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-medium">WhatsApp</span>
      </a>

      {/* Mobile Floating Call Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-area-pb">
        <div className="flex gap-3">
          <Button size="lg" className="flex-1 py-6" asChild>
            <a href="tel:0644771122" className="gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-green-500 hover:bg-green-600 border-green-500 text-white hover:text-white"
            asChild
          >
            <a
              href="https://wa.me/27644771122"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}
