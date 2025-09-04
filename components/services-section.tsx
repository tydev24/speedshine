"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Sparkles, Crown, Star, MessageCircle, Check } from "lucide-react"

const services = [
  {
    id: "speedshine",
    name: "SpeedShine",
    price: "15€",
    icon: Car,
    gradient: "from-blue-500 to-blue-600",
    services: ["Pré-lavage haute pression", "Lavage extérieur complet", "Aspirateur tapis", "Nettoyage plastiques"],
    popular: false,
    description: "Lavage essentiel pour un véhicule propre",
  },
  {
    id: "speedshine-plus",
    name: "SpeedShine+",
    price: "25€",
    icon: Sparkles,
    gradient: "from-emerald-500 to-emerald-600",
    services: [
      "Pré-lavage haute pression",
      "Lavage extérieur complet",
      "Aspirateur tapis",
      "Nettoyage plastiques",
      "Vitres intérieur/extérieur",
      "Jantes et pneus",
    ],
    popular: true,
    description: "Notre service le plus demandé",
  },
  {
    id: "speedshine-vip",
    name: "VIP",
    price: "50€",
    icon: Crown,
    gradient: "from-purple-500 to-purple-600",
    services: [
      "Pré-lavage haute pression",
      "Lavage extérieur complet",
      "Aspirateur tapis & plastiques",
      "Vitres intérieur/extérieur",
      "Jantes et pneus",
      "Shampoing sièges tissu",
      "Nettoyage tableau de bord",
    ],
    popular: false,
    description: "Service premium pour un intérieur impeccable",
  },
  {
    id: "speedshine-premium",
    name: "Premium",
    price: "60€",
    icon: Star,
    gradient: "from-amber-500 to-amber-600",
    services: [
      "Pré-lavage haute pression",
      "Lavage extérieur complet",
      "Aspirateur tapis & plastiques",
      "Vitres intérieur/extérieur",
      "Jantes et pneus",
      "Shampoing sièges tissu",
      "Nettoyage tableau de bord",
      "Lavage ciel de toit",
      "Protection plastiques",
    ],
    popular: false,
    description: "Le summum du lavage automobile",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nos Services de Lavage</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Choisissez le forfait qui correspond à vos besoins. Tous nos services incluent un travail professionnel et
            soigné avec des produits de qualité premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-semibold px-3 py-1">
                    Populaire
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground mb-2">{service.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary mb-2">{service.price}</CardDescription>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.services.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-card-foreground">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full py-3 font-semibold transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open(
                        `https://wa.me/33767637840?text=Bonjour, je souhaite réserver un ${service.name} (${service.price})`,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Réserver maintenant
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md rounded-3xl p-8 text-center border border-border/30 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-card-foreground mb-6">Tarifs Dégressifs Professionnels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <p className="font-bold text-foreground text-lg mb-2">1-5 véhicules</p>
              <p className="text-muted-foreground">Tarif standard</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/30 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Recommandé</Badge>
              </div>
              <p className="font-bold text-foreground text-lg mb-2">6-15 véhicules</p>
              <p className="text-primary font-bold text-lg">-10% de réduction</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <p className="font-bold text-foreground text-lg mb-2">+15 véhicules</p>
              <p className="text-primary font-bold text-lg">-15% de réduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
