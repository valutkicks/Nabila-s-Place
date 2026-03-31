import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold">Nabila&apos;s Place</span>
              <p className="text-sm text-background/60 mt-1">Seafood & Portuguese Cuisine</p>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              A hidden gem in Benoni, serving authentic Portuguese-inspired seafood 
              with love and passion since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-background transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-background transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Shop 1, Lakefield Square<br />
                  106 Lakefield Ave, Benoni
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:0644771122" className="text-sm hover:text-background transition-colors">
                  064 477 1122
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0" />
                <span className="text-sm">Closes at 9:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>Until 9:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>Until 9:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Until 9:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Nabila&apos;s Place. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Shop 1, Lakefield Square, 106 Lakefield Ave, Lakefield, Benoni, 1501
          </p>
        </div>
      </div>
    </footer>
  )
}
