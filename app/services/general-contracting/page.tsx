"use client"

import { 
  Building2, 
  Hammer, 
  Wrench, 
  Truck, 
  Users, 
  Clock, 
  Shield, 
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function GeneralContracting() {
  const services = [
    {
      title: "Residential Construction",
      description: "Complete home building from foundation to finishing touches",
      icon: Building2
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities",
      icon: Building2
    },
    {
      title: "Industrial Construction",
      description: "Factories, warehouses, and industrial facilities",
      icon: Building2
    },
    {
      title: "Infrastructure Development",
      description: "Roads, bridges, and public infrastructure projects",
      icon: Truck
    },
    {
      title: "Site Preparation",
      description: "Land clearing, excavation, and foundation work",
      icon: Hammer
    },
    {
      title: "Structural Work",
      description: "Steel framing, concrete work, and structural integrity",
      icon: Wrench
    },
    {
      title: "MEP Installation",
      description: "Mechanical, electrical, and plumbing systems",
      icon: Wrench
    },
    {
      title: "Finishing & Interior",
      description: "Final touches, painting, flooring, and interior work",
      icon: Building2
    }
  ]

  const features = [
    "Comprehensive project management from start to finish",
    "Experienced team of certified professionals",
    "Quality assurance and safety compliance",
    "Timely project delivery within budget",
    "Modern construction techniques and materials",
    "24/7 project supervision and monitoring",
    "Comprehensive warranty and after-service support",
    "Sustainable and eco-friendly construction practices"
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-patriot-red-600 to-patriot-blue-600 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">General Contracting</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive construction solutions from start to finish. We manage every aspect of your project with quality, safety, and efficiency.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-patriot-blue-900 dark:text-white mb-4">
              Our General Contracting Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              From residential homes to commercial complexes, we provide end-to-end construction services in Ajman with unmatched quality and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-patriot-red-200 dark:hover:border-patriot-red-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-patriot-red-100 dark:bg-patriot-red-900/30 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-patriot-red-600 dark:text-patriot-red-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-patriot-blue-900 dark:text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-r from-patriot-blue-50 to-patriot-red-50 dark:from-patriot-blue-900/20 dark:to-patriot-red-900/20 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-patriot-blue-900 dark:text-white mb-4">
                Why Choose DARALBINNA for General Contracting?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                We bring decades of experience and a commitment to excellence to every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-patriot-red-100 dark:bg-patriot-red-900/30 p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-patriot-red-600 dark:text-patriot-red-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-patriot-blue-900 dark:text-white mb-4">
                Our Construction Process
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                A systematic approach to ensure quality, efficiency, and client satisfaction at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-patriot-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="text-xl font-semibold text-patriot-blue-900 dark:text-white mb-2">Planning & Design</h4>
                <p className="text-gray-700 dark:text-gray-300">Comprehensive project planning and architectural design</p>
              </div>
              <div className="text-center">
                <div className="bg-patriot-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="text-xl font-semibold text-patriot-blue-900 dark:text-white mb-2">Site Preparation</h4>
                <p className="text-gray-700 dark:text-gray-300">Land clearing, excavation, and foundation work</p>
              </div>
              <div className="text-center">
                <div className="bg-patriot-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="text-xl font-semibold text-patriot-blue-900 dark:text-white mb-2">Construction</h4>
                <p className="text-gray-700 dark:text-gray-300">Structural work, MEP installation, and finishing</p>
              </div>
              <div className="text-center">
                <div className="bg-patriot-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h4 className="text-xl font-semibold text-patriot-blue-900 dark:text-white mb-2">Completion</h4>
                <p className="text-gray-700 dark:text-gray-300">Final inspection, handover, and warranty support</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-patriot-red-50 to-patriot-blue-50 dark:from-patriot-red-900/20 dark:to-patriot-blue-900/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-patriot-blue-900 dark:text-white mb-4">
                Ready to Start Your Construction Project?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and detailed project quote. Our expert team is ready to bring your construction vision to life in Ajman.
              </p>
              <a
                href="mailto:info@daralbinna.ae?subject=General%20Contracting%20Inquiry"
                className="inline-flex items-center gap-2 bg-patriot-red-600 hover:bg-patriot-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 text-lg"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 