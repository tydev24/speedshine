"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, User, Phone, Mail, Car, Calendar } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `Bonjour SpeedShine,

Je souhaite réserver un service de lavage auto :

👤 Nom : ${formData.name}
📞 Téléphone : ${formData.phone}
📧 Email : ${formData.email}
🚗 Véhicule : ${formData.vehicle}
🧽 Service souhaité : ${formData.service}
📅 Date préférée : ${formData.date}

💬 Message : ${formData.message}

Merci !`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/33767637840?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/95 backdrop-blur-md border-border/30">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center space-x-2">
          <MessageCircle className="w-6 h-6 text-primary" />
          <span>Réservation WhatsApp</span>
        </CardTitle>
        <p className="text-muted-foreground">Remplissez le formulaire et envoyez votre demande via WhatsApp</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground flex items-center space-x-2">
                <User className="w-4 h-4 text-primary" />
                <span>Nom complet *</span>
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Téléphone *</span>
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Email</span>
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground flex items-center space-x-2">
                <Car className="w-4 h-4 text-primary" />
                <span>Type de véhicule *</span>
              </label>
              <Input
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                placeholder="Ex: Peugeot 308, BMW X3..."
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Date souhaitée</span>
              </label>
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Service souhaité *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary focus:outline-none"
            >
              <option value="">Choisir un service</option>
              <option value="SpeedShine - 15€">SpeedShine - 15€</option>
              <option value="SpeedShine+ - 25€">SpeedShine+ - 25€</option>
              <option value="VIP - 50€">VIP - 50€</option>
              <option value="Premium - 60€">Premium - 60€</option>
              <option value="Forfait 10 SpeedShine - 135€">Forfait 10 SpeedShine - 135€</option>
              <option value="Forfait 10 Premium - 540€">Forfait 10 Premium - 540€</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Informations supplémentaires..."
              rows={4}
              className="bg-background/50 border-border/50 focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 py-3 text-lg font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Envoyer via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
