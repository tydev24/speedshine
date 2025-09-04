"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/voiture-propre-apr-s-lavage-ext-rieur.jpg",
    alt: "Voiture propre après lavage extérieur",
    title: "Lavage extérieur professionnel",
  },
  {
    id: 2,
    src: "/int-rieur-de-voiture-aspir--et-nettoy-.jpg",
    alt: "Intérieur de voiture aspiré et nettoyé",
    title: "Nettoyage intérieur complet",
  },
  {
    id: 3,
    src: "/jantes-de-voiture-brillantes-apr-s-nettoyage.jpg",
    alt: "Jantes de voiture brillantes après nettoyage",
    title: "Nettoyage des jantes",
  },
  {
    id: 4,
    src: "/vitres-de-voiture-parfaitement-propres.jpg",
    alt: "Vitres de voiture parfaitement propres",
    title: "Nettoyage des vitres",
  },
  {
    id: 5,
    src: "/si-ges-de-voiture-apr-s-shampoing.jpg",
    alt: "Sièges de voiture après shampoing",
    title: "Shampoing des sièges",
  },
  {
    id: 6,
    src: "/voiture-de-luxe-apr-s-lavage-premium.jpg",
    alt: "Voiture de luxe après lavage premium",
    title: "Service Premium",
  },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="galerie" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Galerie de nos Réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez la qualité de notre travail à travers quelques exemples de véhicules que nous avons entretenus.
          </p>
        </div>

        {/* Carrousel principal */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={galleryImages[currentIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{galleryImages[currentIndex].title}</h3>
              </div>
            </div>
          </Card>

          {/* Boutons de navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextImage}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Miniatures */}
        <div className="flex justify-center space-x-2 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? "border-primary scale-105" : "border-border hover:border-primary/50"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center space-x-2 mt-4">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
