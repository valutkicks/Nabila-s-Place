import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    text: "Absolutely delicious seafood and excellent service. The lemon butter prawns are to die for! Will definitely be back.",
    rating: 5,
  },
  {
    name: "James T.",
    text: "A hidden gem in Benoni. The paella was authentic and packed with flavor. Great family atmosphere.",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "Highly recommended — worth every visit. The crayfish tails were perfectly cooked and the portions are generous.",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "Best Portuguese food I've had outside of Lisbon. The rissois are incredible and the staff make you feel like family.",
    rating: 5,
  },
  {
    name: "Zanele N.",
    text: "Came for a birthday celebration and they made it so special. Food was outstanding and the pudim is a must-try!",
    rating: 5,
  },
  {
    name: "David L.",
    text: "Consistent quality every time we visit. The seafood combo is perfect for sharing. A Benoni favorite!",
    rating: 4,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-amber-400" : "text-muted/50"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say 
            about their experience at Nabila&apos;s Place.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-8 h-8 ${i < 4 ? "text-amber-400" : "text-amber-400/50"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="font-serif text-2xl font-bold text-foreground">4.4 out of 5</div>
              <div className="text-sm text-muted-foreground">Based on 400+ reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent/50 mb-4" />
                <p className="text-foreground mb-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-xs text-muted-foreground">Verified Customer</div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
