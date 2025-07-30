"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ArrowRight, Calendar, MapPin, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <Image
          src="/images/project-1.png"
          alt="Construction projects"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Projects</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
            Explore our portfolio of successful projects and current ongoing developments.
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              Active Projects
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">Current Projects</h2>
            <p className="text-base md:text-lg text-gray-700">
              Take a look at our ongoing projects and their current progress status.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentProjects.map((project, index) => (
                <CurrentProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interior Work Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              Interior Excellence
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">Interior Work</h2>
            <p className="text-base md:text-lg text-gray-700">
              Discover our exceptional interior finishing work that transforms spaces into beautiful, functional environments.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <InteriorWorkSlideshow />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Approach
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">How We Deliver Excellence</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Every project we undertake follows a rigorous process to ensure quality, timeliness, and client
                satisfaction.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-red-700 font-bold text-sm md:text-base">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">Thorough Planning</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      We begin with comprehensive planning to establish clear objectives, timelines, and budgets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-red-700 font-bold text-sm md:text-base">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">Quality Materials</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      We source only the highest quality materials to ensure durability and longevity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-red-700 font-bold text-sm md:text-base">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">Expert Execution</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Our skilled team executes each phase with precision and attention to detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-red-700 font-bold text-sm md:text-base">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">Rigorous Quality Control</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      We conduct thorough inspections at every stage to maintain our high standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-0">
              <Image
                src="/images/process.png"
                alt="Construction process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
          <p className="text-blue-200 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10">
            Contact us today to discuss how we can bring your vision to life with the same excellence showcased in our
            portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Current Project Image Component
function CurrentProjectCard({ project }: { project: any }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 sm:h-72 md:h-80 w-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-600 text-white">
            {project.status}
          </Badge>
        </div>
      </div>
    </div>
  )
}

// Interior Work Card Component
function InteriorWorkCard({ project }: { project: any }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900">{project.title}</h3>
        <div className="flex items-center justify-between">
          <Badge className="bg-blue-100 text-blue-700">
            {project.category}
          </Badge>
          <span className="text-xs text-gray-500">{project.location}</span>
        </div>
      </div>
    </div>
  )
}

// Interior Work Slideshow Component
function InteriorWorkSlideshow() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === interiorWorkProjects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? interiorWorkProjects.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative">
      {/* Main Slideshow */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={interiorWorkProjects[currentIndex].image}
          alt={interiorWorkProjects[currentIndex].title}
          fill
          className="object-cover transition-all duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
        />
        
        {/* Overlay with title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {interiorWorkProjects[currentIndex].title}
          </h3>
          <div className="flex items-center gap-4">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {interiorWorkProjects[currentIndex].category}
            </Badge>
            <span className="text-sm md:text-base opacity-90">
              {interiorWorkProjects[currentIndex].location}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-1">
        {interiorWorkProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gray-800' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="mt-4">
        <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
          {interiorWorkProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-16 rounded overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-1 ring-gray-800' 
                  : 'hover:opacity-80'
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sample data
const projects = [
  {
    id: "skyline-tower",
    title: "Skyline Tower",
    category: "Commercial",
    description:
      "A 25-story office building featuring modern design, energy-efficient systems, and state-of-the-art amenities.",
    image: "/images/project-1.png",
  },
  {
    id: "riverside-residences",
    title: "Riverside Residences",
    category: "Residential",
    description: "Luxury condominium complex with 50 units, featuring high-end finishes and waterfront views.",
    image: "/images/project-2.png",
  },
  {
    id: "heritage-plaza",
    title: "Heritage Plaza Renovation",
    category: "Renovation",
    description:
      "Complete renovation of a historic commercial building, preserving its character while modernizing its functionality.",
    image: "/images/project-3.png",
  },
  {
    id: "metro-transit",
    title: "Metro Transit Hub",
    category: "Industrial",
    description: "Multi-modal transportation facility designed for efficiency, durability, and passenger comfort.",
    image: "/images/project-4.png",
  },
  {
    id: "innovation-center",
    title: "Innovation Center",
    category: "Commercial",
    description:
      "Tech-focused office complex with collaborative spaces, advanced connectivity, and sustainable features.",
    image: "/images/project-5.png",
  },
  {
    id: "lakeside-community",
    title: "Lakeside Community",
    category: "Residential",
    description: "Master-planned residential community with single-family homes, townhouses, and community amenities.",
    image: "/images/project-6.png",
  },
  {
    id: "central-warehouse",
    title: "Central Distribution Facility",
    category: "Industrial",
    description: "200,000 sq ft distribution center with advanced logistics systems and energy-efficient design.",
    image: "/images/industrial-1.png",
  },
  {
    id: "mountain-retreat",
    title: "Mountain Retreat",
    category: "Residential",
    description:
      "Custom luxury home built with sustainable materials and designed to harmonize with its natural surroundings.",
    image: "/images/residential-2.png",
  },
  {
    id: "historic-theater",
    title: "Grand Theater Restoration",
    category: "Renovation",
    description:
      "Careful restoration of a 1920s theater, preserving historical elements while updating systems and accessibility.",
    image: "/images/commercial-2.png",
  },
]

const currentProjects = [
  {
    id: "project-1",
    title: "Construction Project 1",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0005.jpg",
    startDate: "2024-01-15",
    location: "Project Site 1",
    duration: "12 months",
    status: "Ongoing",
  },
  {
    id: "project-2",
    title: "Construction Project 2",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0007.jpg",
    startDate: "2024-02-01",
    location: "Project Site 2",
    duration: "10 months",
    status: "Ongoing",
  },
  {
    id: "project-3",
    title: "Construction Project 3",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0009.jpg",
    startDate: "2024-01-20",
    location: "Project Site 3",
    duration: "14 months",
    status: "Ongoing",
  },
  {
    id: "project-4",
    title: "Construction Project 4",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0010.jpg",
    startDate: "2024-02-15",
    location: "Project Site 4",
    duration: "8 months",
    status: "Ongoing",
  },
  {
    id: "project-5",
    title: "Construction Project 5",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0011.jpg",
    startDate: "2024-03-01",
    location: "Project Site 5",
    duration: "16 months",
    status: "Ongoing",
  },
  {
    id: "project-6",
    title: "Construction Project 6",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0012.jpg",
    startDate: "2024-01-10",
    location: "Project Site 6",
    duration: "11 months",
    status: "Ongoing",
  },
  {
    id: "project-7",
    title: "Construction Project 7",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0013.jpg",
    startDate: "2024-02-20",
    location: "Project Site 7",
    duration: "13 months",
    status: "Ongoing",
  },
  {
    id: "project-8",
    title: "Construction Project 8",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0014.jpg",
    startDate: "2024-03-10",
    location: "Project Site 8",
    duration: "9 months",
    status: "Ongoing",
  },
  {
    id: "project-9",
    title: "Construction Project 9",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0015.jpg",
    startDate: "2024-01-25",
    location: "Project Site 9",
    duration: "15 months",
    status: "Ongoing",
  },
  {
    id: "project-10",
    title: "Construction Project 10",
    category: "Construction",
    description: "Current construction project in progress.",
    image: "/IMG-20250728-WA0016.jpg",
    startDate: "2024-02-05",
    location: "Project Site 10",
    duration: "12 months",
    status: "Ongoing",
  },
]

const interiorWorkProjects = [
  {
    id: "interior-1",
    title: "Living Room",
    category: "Drawing Room",
    
    image: "/process/IMG-20250726-WA0003.jpg",
    location: "Residential",
  },
  {
    id: "interior-2",
    title: "Luxury Bedroom",
    category: "Bedroom",
    description: "Luxurious bedroom with custom cabinetry and lighting.",
    image: "/process/IMG-20250726-WA0005.jpg",
    location: "Residential",
  },
  {
    id: "interior-3",
    title: "Bedroom Room Renovation",
    category: "Bedroom",
    description: "Elegant bedroom transformation with custom built-ins.",
    image: "/process/IMG-20250726-WA0008.jpg",
    location: "Residential",
  },
  {
    id: "interior-4",
    title: "Master Bedroom Suite with attached bathroom",
    category: "Bedroom",
    description: "Luxurious master bedroom with custom cabinetry and lighting.",
    image: "/process/IMG-20250726-WA0009.jpg",
    location: "Residential",
  },
  {
    id: "interior-5",
    title: "Luxury Bathroom",
    category: "Bathroom",
    description: "Luxurious bathroom with custom cabinetry and lighting.",
    image: "/process/IMG-20250726-WA0010.jpg",
    location: "Residential",
  },
  {
    id: "interior-6",
    title: "Luxury Bathroom",
    category: "Bathroom",
    description: "Luxurious bathroom with custom cabinetry and lighting.",
    image: "/process/IMG-20250726-WA0011.jpg",
    location: "Residential",
  },
  {
    id: "interior-7",
    title: "Guest Bedroom",
    category: "Bedroom",
    description: "Elegant guest bedroom with custom built-ins.",
    image: "/process/IMG-20250726-WA0012.jpg",
    location: "Residential",
  },
  {
    id: "interior-8",
    title: "Kitchen Work",
    category: "Kitchen",
    description: "Modern kitchen with premium finishes and smart storage solutions.",
    image: "/process/IMG-20250726-WA0013.jpg",
    location: "Residential",
  },
  {
    id: "interior-9",
    title: "Customized Bathroom",
    category: "Bathroom",
    description: "Customized bathroom with premium finishes and smart storage solutions.",
    image: "/process/IMG-20250726-WA0014.jpg",
    location: "Residential",
  },
  {
    id: "interior-10",
    title: "Gipsum Work",
    category: "Gipsum",
    description: "Gipsum work with premium finishes and smart storage solutions.",
    image: "/process/IMG-20250726-WA0015.jpg",
    location: "Residential",
  },
  {
    id: "interior-11",
    title: "Gipsum Work",
    category: "Gipsum",
    description: "Gipsum work with premium finishes and smart storage solutions.",
    image: "/process/IMG-20250726-WA0016.jpg",
    location: "Residential",
  },
  {
    id: "interior-12",
    title: "Customized interior work",
    category: "Interior",
    description: "Customized interior work with premium finishes and smart storage solutions.",
    image: "/process/IMG-20250726-WA0017.jpg",
    location: "Residential",
  },
 

  {
    id: "interior-15",
    title: "Customized Bathroom",
    category: "Bathroom",
    description: "Customized bathroom with premium finishes and smart storage solutions.",
    image: "/process/IMG-20250726-WA0020.jpg",
    location: "Commercial",
  },
 
  {
    id: "interior-19",
    title: "Kitchen Work with Storeroom",
    category: "Kitchen",
    description: "Kitchen work with storeroom with premium finishes and smart storage solutions.",
    image: "/process/IMG-20250726-WA0024.jpg",
    location: "Residential",
  },

]


