"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Clock, MessageCircle, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Bonjour, je souhaite prendre rendez-vous.
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Service souhaité: ${formData.service}
Message: ${formData.message}`

    window.open(`https://wa.me/33767637840?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nous contacter</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Prenez rendez-vous facilement ou contactez-nous pour toute demande d'information. Notre équipe
            professionnelle est à votre service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Notre établissement</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-lg">
                    154 Allée des Érables
                    <br />
                    93420 Villepinte
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() =>
                      window.open("https://maps.google.com/?q=154+Allée+des+Érables,+93420+Villepinte", "_blank")
                    }
                  >
                    Voir l'itinéraire
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>Contact direct</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg">07 67 63 78 40</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => window.open("tel:0767637840", "_self")}
                    className="flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Appeler maintenant</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://wa.me/33767637840", "_blank")}
                    className="flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Horaires d'ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lundi - Samedi</span>
                    <span className="text-muted-foreground">8h30 - 19h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-destructive font-medium">Fermé</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted/50 rounded-lg">
                    Intervention possible avec ou sans rendez-vous. Nous recommandons de réserver pour garantir votre
                    créneau.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Mail className="w-6 h-6 text-primary" />
                <span>Demande de rendez-vous</span>
              </CardTitle>
              <CardDescription className="text-base">
                Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom et prénom"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="06 12 34 56 78"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">
                    Adresse email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-base font-medium">
                    Service souhaité
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="SpeedShine (15€)">SpeedShine - 15€</option>
                    <option value="SpeedShine+ (25€)">SpeedShine+ - 25€</option>
                    <option value="SpeedShine VIP (50€)">SpeedShine VIP - 50€</option>
                    <option value="SpeedShine Premium (60€)">SpeedShine Premium - 60€</option>
                    <option value="Forfait 10 lavages">Forfait 10 lavages</option>
                    <option value="Devis personnalisé">Devis personnalisé</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium">
                    Votre message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Précisez vos besoins, le type de véhicule, la date souhaitée, ou toute autre information utile..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="w-full py-3 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer la demande via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
