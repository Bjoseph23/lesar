"use client"

import { ArrowRight, CheckCircle, Heart, BarChart3, Target, Users, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"


export default function ServicesPage() {
  const [currentPartner, setCurrentPartner] = useState(0)

  const services = [
    {
      icon: Heart,
      title: "Health Systems Strengthening",
      description:
        "We specialize in crafting advanced solutions tailored to your unique requirements, ensuring that our clients receive the most effective and strategic approaches to healthcare delivery and management.",
      keyTerms: [
        "Health Workforce Analysis",
        "Strategic Purchasing",
        "Universal Health Coverage",
        "Supply Chain Management",
      ],
      features: [
        "Health Labor Market Analysis (HLMA)",
        "Health Care Financing strategies",
        "Leadership and Governance advisories",
        "Health Product and supply chain management",
        "Universal Health Care service delivery strategies",
        "Health Infrastructure norms and standards",
      ],
      ctaText: "Strengthen Your Health Systems",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Lesar Consults excels with our Quality Assurance consulting firm. We specialize in developing and implementing robust methodologies to ensure the highest standards of quality and compliance across all organizational processes.",
      keyTerms: ["Quality Management", "Compliance Standards", "Process Optimization", "Risk Mitigation"],
      features: [
        "Quality Impact Assessments (QIA)",
        "Data Quality Assurance protocols",
        "Standard Operating Procedures (SOPs)",
        "Performance monitoring systems",
        "Compliance framework development",
        "Continuous improvement strategies",
      ],
      ctaText: "Enhance Your Quality Standards",
    },
    {
      icon: Users,
      title: "Human Resources",
      description:
        "Elevate your workforce with our Human Resources consulting firm. We specialize in developing comprehensive and strategic HR solutions to foster organizational growth, enhance employee satisfaction, and optimize talent management.",
      keyTerms: ["Talent Management", "Organizational Development", "Performance Management", "Strategic HR Planning"],
      features: [
        "Organizational structures development",
        "Job description analysis and evaluation",
        "Career progression guidelines",
        "Organizational Change management",
        "Succession planning strategies",
        "Training and capacity building programs",
      ],
      ctaText: "Optimize Your Human Capital",
    },
    {
      icon: FileText,
      title: "Policy Compliance",
      description:
        "Ensure regulatory compliance and organizational alignment with our Policy Compliance consulting firm. Our expert consultants specialize in developing comprehensive policy frameworks, ensuring adherence to regulatory standards, and fostering a culture of compliance excellence.",
      keyTerms: ["Regulatory Compliance", "Policy Development", "Risk Management", "Governance Frameworks"],
      features: [
        "Policy Guidelines development",
        "Strategic frameworks creation",
        "Standard Operating Procedures",
        "Advocacy Campaigns management",
        "Stakeholder Engagement strategies",
        "Grant writing and proposal development",
      ],
      ctaText: "Ensure Policy Compliance",
    },
    {
      icon: BarChart3,
      title: "Business Strategies",
      description:
        "Elevate your business with our Business Strategies consulting firm. We specialize in developing innovative and results-driven strategies to propel organizational growth, enhance market positioning, and achieve sustainable success.",
      keyTerms: ["Strategic Planning", "Market Analysis", "Growth Strategies", "Competitive Intelligence"],
      features: [
        "Strategic Planning frameworks",
        "Market assessment and analysis",
        "Investment Case development",
        "Risk Analysis and Management",
        "Performance monitoring systems",
        "Sustainable growth strategies",
      ],
      ctaText: "Develop Winning Strategies",
    },
    {
      icon: Target,
      title: "Management Systems",
      description:
        "Transform your organization with our Management Systems consulting firm. We specialize in developing and implementing robust management systems tailored to your specific needs, ensuring operational excellence and sustainable business success.",
      keyTerms: ["Systems Integration", "Process Management", "Operational Excellence", "Performance Optimization"],
      features: [
        "Project Management systems",
        "Monitoring and Evaluation frameworks",
        "Data Management protocols",
        "Interactive dashboard development",
        "Geographic Information Systems (GIS)",
        "Performance tracking systems",
      ],
      ctaText: "Implement Robust Systems",
    },
  ]

  const partners = [
    { name: "Ministry of Health Kenya", logo: "/placeholder.svg?height=60&width=120" },
    { name: "AMREF Health Africa", logo: "/placeholder.svg?height=60&width=120" },
    { name: "USAID", logo: "/placeholder.svg?height=60&width=120" },
    { name: "World Bank", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UNICEF", logo: "/placeholder.svg?height=60&width=120" },
    { name: "WHO", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DFID", logo: "/placeholder.svg?height=60&width=120" },
    { name: "R4D Research", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Global Fund", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PATH", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const partnersPerSlide = 4
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(timer)
  }, [totalSlides])

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Dark Background */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/df99df7d4a9aff6081b9206b6648bcf74a644596.jpg-zj45b16LajSIPy20kDNhtsLeqG7KUn.jpeg"
            alt="Professional consulting services"
            className="w-full h-full object-cover opacity-10"
          /> 
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-400/30">Our Services</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Create Best
              <span className="block text-blue-400 mt-2">Solution for You</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We specialize in crafting advanced solutions tailored to your unique requirements, ensuring that our
              clients receive the most effective and strategic approaches for sustainable growth and excellence.
            </p>
            <Link href="/consultation">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Sections - Alternating Backgrounds */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-16 sm:py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#0A0E2A]"} relative overflow-hidden`}
        >
          {/* Decorative elements for dark sections */}
          {index % 2 !== 0 && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full opacity-40"></div>
            </div>
          )}

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
              {/* Content */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      index % 2 === 0 ? "bg-blue-100" : "bg-blue-600/20"
                    }`}
                  >
                    <service.icon className={`h-6 w-6 ${index % 2 === 0 ? "text-blue-600" : "text-blue-400"}`} />
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-bold ${index % 2 === 0 ? "text-gray-900" : "text-white"}`}>
                    {service.title}
                  </h2>
                </div>

                <p className={`text-base sm:text-lg mb-6 ${index % 2 === 0 ? "text-gray-600" : "text-gray-300"}`}>
                  {service.description}
                </p>

                {/* Key Terms */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${index % 2 === 0 ? "text-gray-900" : "text-white"}`}>
                    Key Focus Areas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.keyTerms.map((term, idx) => (
                      <Badge
                        key={idx}
                        className={
                          index % 2 === 0
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-blue-600/20 text-blue-400 border-blue-400/30"
                        }
                      >
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${index % 2 === 0 ? "text-blue-600" : "text-blue-400"}`} />
                        <span className={`text-sm ${index % 2 === 0 ? "text-gray-600" : "text-gray-300"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/consultation">
                  <Button
                    className={
                      index % 2 === 0
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }
                  >
                    {service.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="relative">
                  <div
                    className={`absolute -inset-4 rounded-2xl blur-lg opacity-30 ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-blue-600 to-blue-400"
                        : "bg-gradient-to-r from-blue-600 to-blue-400"
                    }`}
                  ></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={service.title}
                    className="relative w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Partners Carousel - Light Background */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-lg text-gray-600">
              We are proud to partner with renowned institutions across Africa and internationally
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPartner * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                    {partners
                      .slice(slideIndex * partnersPerSlide, slideIndex * partnersPerSlide + partnersPerSlide)
                      .map((partner, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            className="h-10 sm:h-12 w-auto mb-2 sm:mb-3 grayscale hover:grayscale-0 transition-all duration-300"
                          />
                          <span className="text-xs sm:text-sm text-gray-600 text-center font-medium">
                            {partner.name}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPartner ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentPartner(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you implement the right solutions for sustainable growth and operational
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E2A] border-t border-white/10 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <div>
                  <span className="font-bold">Lesar Consults</span>
                  <p className="text-xs text-gray-400">Demystifying opinions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Premier data, research and analytics consultancy firm serving Africa and beyond since 2016.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Health Systems Strengthening
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Quality Assurance
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Human Resources
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Policy Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="hover:text-white transition-colors">
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>lesarconsults@gmail.com</li>
                <li>+254 710 715 132</li>
                <li>Tom Mboya Avenue, Nairobi</li>
                <li>P.O. Box 43239-80100, Mombasa</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Lesar Consults Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
