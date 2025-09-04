"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20ss.jpg-MBKIvSaaFjJhzy4S9oEKrI9AlZMJdR.jpeg"
              alt="SpeedShine Logo"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 relative group"
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("forfaits")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 relative group"
            >
              Forfaits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("tel:0767637840", "_self")}
              className="flex items-center space-x-2 hover:bg-primary/10 transition-all duration-300 rounded-full px-4"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">07 67 63 78 40</span>
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="flex items-center space-x-2 bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full px-6 shadow-lg hover:shadow-primary/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium text-sm">Réserver</span>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border/30 pt-6 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-left text-foreground/80 hover:text-primary transition-all duration-300 py-2 font-medium"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground/80 hover:text-primary transition-all duration-300 py-2 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("forfaits")}
                className="text-left text-foreground/80 hover:text-primary transition-all duration-300 py-2 font-medium"
              >
                Forfaits
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground/80 hover:text-primary transition-all duration-300 py-2 font-medium"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/30">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("tel:0767637840", "_self")}
                  className="flex items-center justify-center space-x-2 rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>07 67 63 78 40</span>
                </Button>
                <Button
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center justify-center space-x-2 rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Réserver</span>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
