import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    rating: 5,
    comment: "Service impeccable ! Ma voiture n'a jamais été aussi propre. L'équipe est professionnelle et rapide.",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    rating: 5,
    comment: "Je recommande vivement SpeedShine. Excellent rapport qualité-prix et résultat parfait à chaque fois.",
    date: "Il y a 1 mois",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    rating: 5,
    comment: "Très satisfaite du service Premium. L'intérieur de ma voiture est comme neuf ! Merci à toute l'équipe.",
    date: "Il y a 3 semaines",
  },
  {
    id: 4,
    name: "Ahmed Benali",
    rating: 5,
    comment:
      "Service professionnel, ponctuel et de qualité. Je suis client régulier depuis 6 mois, toujours satisfait.",
    date: "Il y a 1 semaine",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur la qualité de nos
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
                  "{testimonial.comment}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Clients satisfaits</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Note moyenne</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2 ans</div>
            <p className="text-muted-foreground">D'expérience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
