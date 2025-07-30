"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Clock, ArrowRight, Building2, Star } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-patriot-red-600/20 via-patriot-blue-900/60 to-patriot-blue-950/80 z-10" />
        <Image src="/images/contact-hero.png" alt="Contact DARALBINNA" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-patriot-red-600 to-patriot-red-700 text-white rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm border border-white/20"
          >
            <Star className="h-4 w-4" />
            Get In Touch
            <Star className="h-4 w-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Contact DARALBINNA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Get in touch with our team to discuss your project needs or request a quote.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-patriot-white-50 via-white to-patriot-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-patriot-red-100 to-patriot-blue-100 text-patriot-red-700 rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold mb-6 text-patriot-blue-900">We'd Love to Hear From You</h2>
              <p className="text-gray-700 mb-10 text-lg">
                Whether you have a question about our services, want to request a quote, or are ready to start your
                project, we're here to help. <span className="text-patriot-red-600 font-semibold">Officially licensed in Ajman.</span>
              </p>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-gradient-to-br from-patriot-red-500 to-patriot-red-600 p-3 rounded-full mr-4 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-patriot-blue-900">Our Location</h3>
                    <p className="text-gray-700">Al Jurf 3, Ajman, UAE</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-gradient-to-br from-patriot-blue-500 to-patriot-blue-600 p-3 rounded-full mr-4 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-patriot-blue-900">Phone Number</h3>
                    <p className="text-gray-700">+971 565861839</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-gradient-to-br from-patriot-red-500 to-patriot-red-600 p-3 rounded-full mr-4 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-patriot-blue-900">Email Address</h3>
                    <p className="text-gray-700">daralbinnaconstruction@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-gradient-to-br from-patriot-blue-500 to-patriot-blue-600 p-3 rounded-full mr-4 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-patriot-blue-900">Working Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 3:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div id="quote-form" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-patriot-blue-900">Request a Free Quote</h3>
                <p className="text-gray-700 mb-6">
                  Fill out this form to get a detailed, no-obligation quote for your construction project. Our team will
                  analyze your requirements and provide a comprehensive estimate.
                </p>
                <form className="bg-white p-10 rounded-2xl shadow-xl border border-patriot-red-100">
                  <h3 className="text-2xl font-bold mb-6 text-patriot-blue-900">Send Us a Message</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red-500 focus:border-patriot-red-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red-500 focus:border-patriot-red-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red-500 focus:border-patriot-red-500 transition-colors"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="project-type"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red-500 focus:border-patriot-red-500 transition-colors"
                      >
                        <option value="">Select Project Type</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Development</option>
                        <option value="industrial">Industrial Facilities</option>
                        <option value="renovation">Renovation & Maintenance</option>
                        <option value="project-management">Project Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget (AED)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red-500 focus:border-patriot-red-500 transition-colors"
                      placeholder="e.g., 500,000 or 1.5M"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red-500 focus:border-patriot-red-500 transition-colors resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                    />
                  </div>
                  <AnimatedButton
                    type="submit"
                    className="w-full bg-gradient-to-r from-patriot-red-600 to-patriot-red-700 hover:from-patriot-red-700 hover:to-patriot-red-800 text-white font-bold py-4 text-lg shadow-xl"
                    hoverEffect="lift"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </AnimatedButton>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-patriot-blue-900 to-patriot-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact DARALBINNA today for a free consultation and quote. Our expert team is ready to bring your vision to life with precision and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                className="bg-patriot-red-600 hover:bg-patriot-red-700 text-white font-bold px-10 py-4 text-lg shadow-2xl"
                hoverEffect="ripple"
              >
                Get Free Quote
                <ArrowRight className="ml-3 h-5 w-5" />
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue-900 font-bold px-10 py-4 text-lg"
                hoverEffect="scale"
              >
                Call Us Now
                <Phone className="ml-3 h-5 w-5" />
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
