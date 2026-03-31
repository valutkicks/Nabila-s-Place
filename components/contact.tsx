import { Phone, MapPin, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Find Your Way to
            <br />
            <span className="text-primary">Nabila&apos;s Place</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We&apos;re conveniently located in Lakefield Square, Benoni. Come visit us or give us a call!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d28.3275!3d-26.1653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzU1LjEiUyAyOMKwMTknMzkuMCJF!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Nabila's Place Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      Shop 1, Lakefield Square
                      <br />
                      106 Lakefield Ave, Lakefield
                      <br />
                      Benoni, 1501
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Located in Pick n Pay MM Lakefield
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:0644771122"
                      className="text-xl font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      064 477 1122
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call for reservations or orders
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday
                      <br />
                      <span className="font-medium text-foreground">Closes at 9:30 PM</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1 py-6" asChild>
                <a href="tel:0644771122" className="gap-3">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 py-6" asChild>
                <a
                  href="https://maps.google.com/?q=Shop+1+Lakefield+Square+106+Lakefield+Ave+Benoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-3"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
