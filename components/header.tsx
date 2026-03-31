"use client"

import { useState, useEffect } from "react"
import { Phone, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex flex-col"
          >
            <span className="font-serif text-2xl font-bold text-primary">
              Nabila&apos;s Place
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Seafood & Portuguese
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:0644771122" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href="https://maps.google.com/?q=Shop+1+Lakefield+Square+106+Lakefield+Ave+Benoni"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <MapPin className="h-4 w-4" />
                Directions
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href="tel:0644771122" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a
                    href="https://maps.google.com/?q=Shop+1+Lakefield+Square+106+Lakefield+Ave+Benoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
