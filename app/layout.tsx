import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Dancing_Script, Caveat } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "700"],
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
})

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "For Hồ Bích Thủy ❤️",
  description: "A romantic confession website",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dancingScript.variable} ${caveat.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
