"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/car-wash-background.jpg"
          alt="Lavage auto professionnel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Speed<span className="text-primary">Shine</span>
            </h1>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <p className="text-xl md:text-2xl text-primary font-medium text-balance">
                Brillance Express, Satisfaction Garantie
              </p>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>

          <div className="animate-slide-in-left">
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
              Service de lavage automobile professionnel à Villepinte. Excellence, rapidité et satisfaction garanties
              pour particuliers et professionnels. Votre véhicule retrouve son éclat d'origine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/33767637840", "_blank")}
              className="flex items-center space-x-3 text-lg px-12 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Réserver maintenant</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("tel:0767637840", "_self")}
              className="flex items-center space-x-3 text-lg px-12 py-6 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">07 67 63 78 40</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center space-x-4 bg-card/95 backdrop-blur-md rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-300">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-card-foreground text-xl mb-1">Horaires d'ouverture</p>
                <p className="text-muted-foreground text-lg">Lundi - Samedi: 8h30 - 19h00</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 bg-card/95 backdrop-blur-md rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-card-foreground text-xl mb-1">Notre adresse</p>
                <p className="text-muted-foreground text-lg">154 Allée des Érables, Villepinte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
