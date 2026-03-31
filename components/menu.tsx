import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const menuItems = [
  {
    name: "Paella",
    description: "Traditional saffron rice with fresh seafood, chicken, and chorizo",
    image: "/images/paella.jpg",
  },
  {
    name: "Lemon Butter Prawns",
    description: "Succulent prawns in our signature garlic lemon butter sauce",
    image: "/images/prawns.jpg",
  },
  {
    name: "Lemon Butter Crayfish Tails",
    description: "Tender crayfish tails grilled to perfection with citrus butter",
    image: "/images/crayfish.jpg",
  },
  {
    name: "Calamari & Chips",
    description: "Crispy golden calamari rings served with thick-cut chips",
    image: "/images/calamari.jpg",
  },
  {
    name: "Chicken & Chips",
    description: "Grilled chicken with Nabila's famous secret sauce",
    image: "/images/chicken.jpg",
  },
  {
    name: "Rissois",
    description: "Traditional Portuguese seafood pastries, golden and flaky",
    image: "/images/rissois.jpg",
  },
  {
    name: "Seafood Combo",
    description: "A generous platter of prawns, calamari, fish, and chips",
    image: "/images/seafood-combo.jpg",
  },
  {
    name: "Pudim",
    description: "Classic Portuguese caramel pudding, rich and creamy",
    image: "/images/dessert.jpg",
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Signature Dishes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore our carefully crafted selection of Portuguese-inspired seafood dishes, 
            each prepared with fresh ingredients and authentic flavors.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.name}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12">
          Contact us for our full menu and daily specials. Prices range from R200-R300 per person.
        </p>
      </div>
    </section>
  )
}
