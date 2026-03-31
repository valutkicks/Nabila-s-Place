import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Warm and inviting interior of Nabila's Place"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Welcome to
                <br />
                <span className="text-primary">Nabila&apos;s Place</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nestled in the heart of Benoni, Nabila&apos;s Place has become a beloved 
                destination for those seeking authentic Portuguese-inspired seafood cuisine. 
                What started as a family passion for exceptional food has grown into a 
                cherished local gem.
              </p>
              <p>
                Our kitchen is dedicated to bringing you the freshest seafood, prepared with 
                time-honored recipes and a generous spirit. From our signature lemon butter 
                prawns to our aromatic paella, every dish tells a story of quality, tradition, 
                and love.
              </p>
              <p>
                Whether you&apos;re celebrating a special occasion or enjoying a casual meal with 
                loved ones, we welcome you to experience the warmth and flavors that make 
                Nabila&apos;s Place feel like home.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">Happy Reviews</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">4.4★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">Fresh</div>
                <div className="text-sm text-muted-foreground">Daily Seafood</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
