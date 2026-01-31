import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sprzedaż i Montaż paneli słonecznych",
  description:
    "Sprzedaż i Montaż paneli słonecznych  - Uzyskaj bezpłatną wycenę",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pl'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='w-full max-w-[1520px] mx-auto'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
