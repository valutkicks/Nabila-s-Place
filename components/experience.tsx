import { Fish, Flame, Heart, Users, Sparkles, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    icon: Fish,
    title: "Fresh Seafood",
    description: "We source the freshest seafood daily to ensure every dish meets our high standards.",
  },
  {
    icon: Flame,
    title: "Portuguese Flavors",
    description: "Authentic recipes passed down through generations, bringing traditional tastes to your table.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with care and passion, just like home cooking should be.",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "A warm and welcoming environment perfect for families and gatherings of all sizes.",
  },
  {
    icon: Sparkles,
    title: "Consistent Quality",
    description: "Our commitment to excellence means you'll enjoy the same great taste every visit.",
  },
  {
    icon: Clock,
    title: "Friendly Service",
    description: "Our dedicated team ensures you feel at home from the moment you walk in.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-amber-300 uppercase tracking-widest">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Why Our Guests
            <br />
            Keep Coming Back
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            At Nabila&apos;s Place, we believe dining is about more than just food. 
            It&apos;s about creating memories, sharing moments, and experiencing authentic flavors.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
