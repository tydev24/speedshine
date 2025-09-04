import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SpeedShine - Lavage Auto Express à Villepinte | Brillance Express, Satisfaction Garantie",
  description:
    "Service de lavage auto professionnel à Villepinte. Lavage express pour particuliers et professionnels. Avec ou sans rendez-vous. 07 67 63 78 40",
  keywords: "lavage auto, Villepinte, car wash, nettoyage voiture, lavage express, SpeedShine",
  generator: "SpeedShine",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
