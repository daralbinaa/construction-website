import Link from "next/link"
import { Building2, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-patriot-blue-900 dark:bg-patriot-blue-950 text-white">
      <div className="container py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
              <Building2 className="h-7 w-7 text-patriot-red-600" />
              <span className="text-xl font-bold text-white">DARALBINNA</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Your trusted partner for innovative construction solutions in Ajman. Building excellence and delivering
              quality since 2000. <span className="text-patriot-red-400 font-semibold">Officially licensed in Ajman.</span>
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="#" className="text-gray-300 hover:text-patriot-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-patriot-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-patriot-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-patriot-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-patriot-red-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base text-left">Al Jurf 3, Ajman, UAE</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-patriot-red-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+971 565861839</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-patriot-red-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">daralbinnaconstruction@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact#quote-form">
                <Button className="bg-patriot-red-600 hover:bg-patriot-red-700 text-white font-medium w-full transition-all duration-300">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 text-center text-gray-300 text-sm max-w-4xl mx-auto">
          <p>&copy; {new Date().getFullYear()} DARALBINNA Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
