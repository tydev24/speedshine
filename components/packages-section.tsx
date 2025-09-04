"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Crown, MessageCircle, Calculator } from "lucide-react"

const packages = [
  {
    id: "package-basic",
    name: "10 lavages SpeedShine",
    originalPrice: "150 €",
    price: "135 €",
    savings: "15 €",
    description: "Forfait économique pour un entretien régulier",
    icon: Package,
    color: "bg-blue-500",
    popular: true,
  },
  {
    id: "package-premium",
    name: "10 lavages SpeedShine Premium",
    originalPrice: "600 €",
    price: "540 €",
    savings: "60 €",
    description: "Le forfait premium pour un entretien complet",
    icon: Crown,
    color: "bg-yellow-500",
    popular: false,
  },
]

export function PackagesSection() {
  return (
    <section id="forfaits" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Forfaits & Abonnements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Économisez avec nos forfaits avantageux. Plus vous lavez, plus vous économisez !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon
            return (
              <Card key={pkg.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Recommandé</Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-balance">{pkg.name}</CardTitle>
                  <CardDescription className="text-pretty">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                      <Badge variant="destructive" className="text-xs">
                        -{pkg.savings}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Soit {Math.round(Number.parseInt(pkg.price) / 10)} € par lavage
                    </p>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() =>
                      window.open(
                        `https://wa.me/33767637840?text=Bonjour, je souhaite souscrire au forfait ${pkg.name}`,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Souscrire
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Calculateur d'économies */}
        <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="text-xl font-bold text-card-foreground">Calculez vos économies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-background rounded-lg p-4 text-center">
              <p className="font-semibold text-foreground mb-2">Forfait SpeedShine</p>
              <p className="text-muted-foreground">10 lavages à 15 € = 150 €</p>
              <p className="text-primary font-semibold">Forfait: 135 € (-15 €)</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <p className="font-semibold text-foreground mb-2">Forfait Premium</p>
              <p className="text-muted-foreground">10 lavages à 60 € = 600 €</p>
              <p className="text-primary font-semibold">Forfait: 540 € (-60 €)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
