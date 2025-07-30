"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Building2,
  Star,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { HoverButton } from "@/components/ui/hover-button"
import { ScrollProgress } from "@/components/animations/scroll-progress"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress color="#DC2626" />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.png"
            alt="DARALBINNA construction site background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-patriot-red-600/20 via-patriot-blue-900/60 to-patriot-blue-950/80 z-10" />
        </div>

        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-patriot-red-600 to-patriot-red-700 text-white rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm border border-white/20"
              >
                <Star className="h-4 w-4" />
                Premier Construction Services - Ajman
                <Star className="h-4 w-4" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 drop-shadow-2xl leading-tight"
              >
                Building Tomorrow's{" "}
                <span className="relative">
                  <span className="text-patriot-red-400">Excellence</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-patriot-red-400 to-patriot-red-600 rounded-full"
                  />
                </span>{" "}
                Today
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 md:mb-12 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-medium"
              >
                DARALBINNA delivers innovative construction solutions for residential, commercial, and industrial
                projects across Ajman with <span className="text-patriot-red-300 font-semibold">unmatched quality</span>{" "}
                and <span className="text-patriot-blue-300 font-semibold">precision</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/projects" className="w-full sm:w-auto">
                  <HoverButton
                    size="lg"
                    className="bg-white text-patriot-blue-900 border-2 border-white hover:bg-patriot-blue-50 hover:text-patriot-blue-800 font-bold px-8 sm:px-10 py-4 text-lg w-full sm:w-auto shadow-2xl hover:shadow-white/30 transition-all duration-300"
                    hoverEffect="glow"
                    rippleColor="rgba(37, 99, 235, 0.3)"
                  >
                    View Our Projects
                    <ChevronRight className="ml-3 h-5 w-5" />
                  </HoverButton>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <AnimatedButton
                    size="lg"
                    className="bg-patriot-red-600 hover:bg-patriot-red-700 text-white border-2 border-patriot-red-600 hover:border-patriot-red-700 font-bold px-8 sm:px-10 py-4 text-lg w-full sm:w-auto shadow-2xl transition-all duration-300"
                    hoverEffect="pulse"
                  >
                    Get Free Quote
                    <ChevronRight className="ml-3 h-5 w-5" />
                  </AnimatedButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-patriot-white-50 via-white to-patriot-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-patriot-red-100 to-patriot-blue-100 text-patriot-red-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <Target className="h-4 w-4" />
              Our Purpose & Vision
              <Eye className="h-4 w-4" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-patriot-blue-900 leading-tight">
              Mission & Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Guided by our core principles, we strive to transform the construction industry in Ajman and create
              lasting value for our clients and community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-patriot-red-500/20 to-patriot-red-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-patriot-red-100">
                <div className="flex items-center mb-8 justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-patriot-red-500 to-patriot-red-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                  >
                    <Target className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-patriot-blue-900">
                      Our Mission
                    </h3>
                    <p className="text-patriot-red-600 font-medium">Building Excellence</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  To deliver exceptional construction services in Ajman that exceed client expectations through
                  innovation, integrity, and craftsmanship. We are committed to:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start group/item">
                    <div className="bg-patriot-red-100 p-2 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-patriot-red-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Building safe, sustainable, and high-quality spaces that improve community living
                    </p>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="bg-patriot-red-100 p-2 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-patriot-red-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Driving continuous innovation and professional growth across every project
                    </p>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="bg-patriot-red-100 p-2 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-patriot-red-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Maintaining the highest standards of safety, quality, and client satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue-500/20 to-patriot-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-patriot-blue-100">
                <div className="flex items-center mb-8 justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-patriot-blue-500 to-patriot-blue-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                  >
                    <Eye className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-patriot-blue-900">
                      Our Vision
                    </h3>
                    <p className="text-patriot-blue-600 font-medium">Future Forward</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  To be the most trusted and innovative construction company in Ajman, recognized for:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start group/item">
                    <div className="bg-patriot-blue-100 p-2 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-patriot-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Redefining excellence in construction standards, safety, and client experience
                    </p>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="bg-patriot-blue-100 p-2 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-patriot-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Championing eco-conscious building to reduce our environmental footprint
                    </p>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="bg-patriot-blue-100 p-2 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-patriot-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Empowering UAE's growth through responsible, community-centric development
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Approach Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 text-center"
          >
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-patriot-red-500/10 via-patriot-white-50 to-patriot-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-patriot-red-50 via-white to-patriot-blue-50 p-10 md:p-16 rounded-3xl shadow-xl border border-gradient-to-r from-patriot-red-200 to-patriot-blue-200">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-patriot-red-500 to-patriot-blue-500 w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                >
                  <Star className="h-10 w-10 md:h-12 md:w-12 text-white" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-patriot-blue-900">
                  Our Approach
                </h3>
                <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
                  We believe successful construction is rooted in trust, teamwork, and technical excellence. By combining traditional craftsmanship with advanced technologies, we create spaces that are not only built to last but designed to elevate how people live, work, and grow in Ajman.
                </p>
                <Link href="/contact">
                  <AnimatedButton
                    className="bg-gradient-to-r from-patriot-red-600 to-patriot-blue-600 hover:from-patriot-red-700 hover:to-patriot-blue-700 text-white font-bold px-10 py-4 text-lg shadow-2xl border-2 border-patriot-red-500/30 hover:border-patriot-red-500/50 transition-all duration-300"
                    hoverEffect="shine"
                    iconAnimation={true}
                  >
                    Connect With Us Today
                    <ChevronRight className="ml-3 h-5 w-5" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-patriot-blue-900">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-patriot-red-50 to-white p-8 rounded-2xl shadow-lg border border-patriot-red-100"
            >
              <div className="bg-patriot-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-patriot-blue-900">General Contracting</h3>
              <p className="text-gray-700 mb-6">
                Complete construction management from planning to completion with quality assurance.
              </p>
              <Link href="/services/general-contracting">
                <AnimatedButton className="w-full" hoverEffect="scale">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-patriot-blue-50 to-white p-8 rounded-2xl shadow-lg border border-patriot-blue-100"
            >
              <div className="bg-patriot-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-patriot-blue-900">Renovation & Maintenance</h3>
              <p className="text-gray-700 mb-6">
                Expert renovation services and ongoing maintenance to keep your property in top condition.
              </p>
              <Link href="/services/renovation-maintenance">
                <AnimatedButton className="w-full" hoverEffect="scale">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-patriot-red-50 to-white p-8 rounded-2xl shadow-lg border border-patriot-red-100"
            >
              <div className="bg-patriot-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-patriot-blue-900">Project Management</h3>
              <p className="text-gray-700 mb-6">
                Professional project management ensuring timely delivery and quality standards.
              </p>
              <Link href="/services/project-management">
                <AnimatedButton className="w-full" hoverEffect="scale">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-patriot-blue-900 to-patriot-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact DARALBINNA today for a free consultation and quote. Our expert team is ready to bring your vision to life.
            </p>
            <Link href="/contact">
              <HoverButton
                size="lg"
                className="bg-patriot-red-600 hover:bg-patriot-red-700 text-white font-bold px-10 py-4 text-lg shadow-2xl"
                hoverEffect="ripple"
              >
                Get Free Quote
                <ChevronRight className="ml-3 h-5 w-5" />
              </HoverButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
