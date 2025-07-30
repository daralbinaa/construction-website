"use client"

import { 
  Refrigerator, 
  Bath, 
  Zap, 
  Wrench, 
  Snowflake, 
  Home, 
  Square, 
  Accessibility, 
  Paintbrush, 
  Building, 
  Fan, 
  Sofa, 
  ChefHat, 
  Lightbulb, 
  DoorOpen, 
  Package, 
  Hammer
} from "lucide-react"

export default function RenovationMaintenance() {
  const services = [
    {
      title: "Appliance Integration in Ajman",
      description: "Maximize your space's potential",
      icon: Refrigerator
    },
    {
      title: "Bathroom Renovation",
      description: "Create a place you'll love to start your day",
      icon: Bath
    },
    {
      title: "Electrical and Plumbing",
      description: "Feel the difference when it's done by professionals",
      icon: Zap
    },
    {
      title: "Carpenter Services",
      description: "Expert craftsmanship, customized solutions, and exceptional quality",
      icon: Wrench
    },
    {
      title: "AC Maintenance",
      description: "Comfort begins with the perfect room temperature and air quality",
      icon: Snowflake
    },
    {
      title: "Exterior Revamp Solution in Ajman",
      description: "A fresh touch can make your home truly stand out",
      icon: Home
    },
    {
      title: "Flooring Renewal Services in Ajman",
      description: "Transform the look and feel of your home",
      icon: Square
    },
    {
      title: "Home Accessibility",
      description: "It's your home, and it should be easily accessible to you",
      icon: Accessibility
    },
    {
      title: "Painting Services",
      description: "It's more than just paint—It's the way you set the mood",
      icon: Paintbrush
    },
    {
      title: "Apartment Renovation",
      description: "Boost your property's value",
      icon: Building
    },
    {
      title: "HVAC Installation",
      description: "When summer peaks, you'll appreciate your Investment",
      icon: Fan
    },
    {
      title: "Renovation",
      description: "Reimagine, Redesign, and Renovate",
      icon: Sofa
    },
    {
      title: "Interior Renovation",
      description: "When every element reflects your personality",
      icon: Sofa
    },
    {
      title: "Kitchen Renovation",
      description: "Make every meal a celebration",
      icon: ChefHat
    },
    {
      title: "House Renovation",
      description: "Create the space you truly call home",
      icon: Home
    },
    {
      title: "Office Renovation",
      description: "Nothing says 'business thriving' better",
      icon: Building
    },
    {
      title: "Lighting Installation",
      description: "It can instantly change the mood of a space",
      icon: Lightbulb
    },
    {
      title: "Modern Window & Door Installation",
      description: "Give your home a fresh new feel",
      icon: DoorOpen
    },
    {
      title: "Smart Storage Solution in Ajman",
      description: "You'll have plenty of space when you store things correctly",
      icon: Package
    },
    {
      title: "Handyman",
      description: "The modern way to show your wife that you can fix things",
      icon: Hammer
    },
    {
      title: "Villa Renovation",
      description: "From a house to a home everyone adores",
      icon: Home
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-patriot-red-600 to-patriot-blue-600 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Renovation & Maintenance</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Professional renovation and ongoing maintenance to keep your property in top condition. Reliable, efficient, and high-quality service.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-patriot-blue-900 dark:text-white mb-4">
              Our Renovation & Maintenance Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              From appliance integration to complete villa renovations, we provide comprehensive solutions for all your property needs in Ajman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-patriot-red-50 to-patriot-blue-50 dark:from-patriot-red-900/20 dark:to-patriot-blue-900/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-patriot-blue-900 dark:text-white mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our expert team is ready to bring your renovation vision to life.
              </p>
              <a
                href="mailto:info@daralbinna.ae?subject=Renovation%20%26%20Maintenance%20Inquiry"
                className="inline-flex items-center gap-2 bg-patriot-red-600 hover:bg-patriot-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 text-lg"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 