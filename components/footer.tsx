"use client"

import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">SpeedShine</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Service de lavage automobile professionnel à Villepinte. Excellence, rapidité et satisfaction garanties
              depuis notre création.
            </p>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => window.open("tel:0767637840", "_self")}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-primary/90 transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>Nous appeler</span>
              </button>
              <button
                onClick={() => window.open("https://wa.me/33767637840", "_blank")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Informations de contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-muted-foreground">154 Allée des Érables</p>
                  <p className="text-muted-foreground">93420 Villepinte</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-muted-foreground">07 67 63 78 40</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-muted-foreground">Via WhatsApp ou téléphone</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Horaires d'ouverture</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-1 text-primary" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lundi - Samedi</span>
                    <span className="text-muted-foreground">8h30 - 19h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-destructive font-medium">Fermé</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">Intervention possible avec ou sans rendez-vous</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 SpeedShine. Tous droits réservés.</p>
            <p>Service de lavage automobile professionnel - Villepinte, Seine-Saint-Denis</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
