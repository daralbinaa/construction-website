"use client"

import Link from "next/link"
import { Briefcase, Mail, Building2 } from "lucide-react"

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-patriot-blue-50 via-white to-patriot-red-50 dark:from-patriot-blue-950 dark:via-gray-900 dark:to-patriot-red-950">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-patriot-red-600 to-patriot-blue-600 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
            <Briefcase className="h-8 w-8" />
            Careers at DARALBINNA
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join our team and help us build the future of Ajman. We are always looking for talented, passionate professionals to grow with us.
          </p>
        </div>
      </section>

      {/* Vacancy Section */}
      <section className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-patriot-blue-100 dark:border-patriot-blue-900/30 p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="h-10 w-10 text-patriot-blue-600" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue-900 dark:text-white mb-1">Civil Engineer</h2>
                <span className="inline-block bg-patriot-red-100 text-patriot-red-700 dark:bg-patriot-red-900/30 dark:text-patriot-red-100 rounded-full px-4 py-1 text-sm font-semibold">Vacancy Open</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              We are seeking a skilled and motivated Civil Engineer to join our growing team. You will be responsible for planning, designing, and overseeing construction and maintenance of building structures and infrastructure.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Bachelor's degree in Civil Engineering or related field</li>
              <li>2+ years of experience in construction or engineering projects</li>
              <li>Strong knowledge of construction methods, materials, and regulations</li>
              <li>Excellent communication and teamwork skills</li>
              <li>UAE experience preferred</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you are passionate about building a better future and want to work with a dynamic, innovative team, we want to hear from you!
            </p>
            <a
              href="mailto:info@daralbinna.ae?subject=Application%20for%20Civil%20Engineer%20Position"
              className="inline-flex items-center gap-2 bg-patriot-blue-600 hover:bg-patriot-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
            >
              <Mail className="h-5 w-5" />
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 