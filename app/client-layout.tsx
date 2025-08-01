"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import { Montserrat, Poppins } from "next/font/google"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

import "@/app/globals.css"

// Initialize the fonts with display swap for better performance
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className={`${montserrat.variable} ${poppins.variable}`}>
      <div className={`${poppins.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </div>
  )
}
