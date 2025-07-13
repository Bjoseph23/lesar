"use client"
import "./globals.css"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Target,
  BarChart3,
  Heart,
  DollarSign,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"


export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const stats = [
    { number: "8+", label: "Years of Excellence" },
    { number: "100+", label: "Projects Completed" },
    { number: "15+", label: "Countries Served" },
    { number: "50+", label: "Expert Consultants" },
  ]

  const services = [
    {
      icon: Heart,
      title: "Health Systems Strengthening",
      description:
        "Comprehensive health workforce analysis, care financing strategies, and universal health care service delivery systems.",
      features: [
        "Health Labor Market Analysis",
        "Strategic Purchasing & Costing",
        "Leadership & Governance",
        "Supply Chain Management",
      ],
    },
    {
      icon: DollarSign,
      title: "Financial Analysis & Economics",
      description:
        "Corporate financial modeling, analysis, valuations, and strategic economic advisory services for sustainable growth.",
      features: [
        "Financial Modeling & Valuations",
        "Capital Raising & Due Diligence",
        "Program Based Budgeting",
        "Investment Case Development",
      ],
    },
    {
      icon: BarChart3,
      title: "Research & Analytics",
      description:
        "Customized research, epidemiological studies, and independent coverage assessments with actionable insights.",
      features: [
        "Epidemiological Studies",
        "Risk Analysis & Management",
        "Market Insights",
        "Peer-Reviewed Publications",
      ],
    },
    {
      icon: Target,
      title: "Monitoring & Evaluation",
      description:
        "Comprehensive M&E frameworks, program evaluations, and data quality assurance for measurable impact.",
      features: ["Program Evaluation & QIA", "M&E Framework Development", "Interactive Dashboards", "GIS Integration"],
    },
    {
      icon: Users,
      title: "Human Resource Management",
      description: "Organizational development, capacity building, and training programs for institutional excellence.",
      features: ["Organizational Structures", "Change Management", "Training Programs", "Community Education"],
    },
    {
      icon: Shield,
      title: "Policy & Advocacy",
      description:
        "Policy development, strategic planning, and stakeholder engagement for sustainable policy frameworks.",
      features: ["Policy Guidelines Development", "Strategic Planning", "Advocacy Campaigns", "Grant Writing"],
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director, Ministry of Health Kenya",
      content:
        "Lesar Consults delivered exceptional strategic insights that transformed our healthcare delivery systems. Their evidence-based approach was exactly what we needed.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Program Manager, World Bank",
      content:
        "The team's expertise in monitoring and evaluation helped us achieve measurable impact across multiple African countries. Highly professional and reliable.",
      rating: 5,
    },
    {
      name: "Dr. Amina Hassan",
      role: "Health Systems Specialist, USAID",
      content:
        "Outstanding work on our health systems strengthening project. Their analytical capabilities and strategic thinking exceeded our expectations.",
      rating: 5,
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "8+ years of delivering high-quality consultancy services across Africa with measurable results.",
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Successfully completed projects in 15+ countries with major international organizations.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Approach",
      description: "Evidence-based solutions using advanced analytics and cutting-edge research methodologies.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ seasoned professionals with PhDs and extensive experience in their respective fields.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section - White Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-4 sm:left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 sm:top-40 right-10 sm:right-20 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-40"></div>
          <div className="absolute bottom-32 sm:bottom-40 left-10 sm:left-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-20 right-20 sm:right-40 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="animate-fade-in-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Strategic Insight.
                  <span className="block text-blue-600 mt-2">Sustainable Impact.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  At Lesar Consults, we transform complex challenges into evidence-based, strategic solutions. Our team
                  empowers institutions across Africa through smart data, expert evaluations, and forward-thinking
                  advisory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/consultation">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Work With Us
                      <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      Explore Our Approach
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative mt-8 lg:mt-0 order-1 lg:order-2">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl sm:rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Lesar Consults team reviewing data dashboards and strategy"
                      width={600}
                      height={400}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg sm:rounded-xl"
                    />
                    <div className="absolute inset-1 sm:inset-2 bg-gradient-to-br from-blue-600/10 to-transparent rounded-lg sm:rounded-xl pointer-events-none"></div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">15+</div>
                      <div className="text-xs text-gray-600">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Background */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-base sm:text-lg text-gray-300">Delivering measurable results across Africa and beyond</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm sm:text-base lg:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Light Background */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Why Choose Lesar Consults</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Excellence in Every Engagement
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We combine deep expertise, innovative methodologies, and proven track record to deliver solutions that
              create lasting impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow bg-white border-gray-200 h-full"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Dark Background */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-400/30">Our Services</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Competency-Based Solutions</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              We excel in delivering tailored solutions across various sectors, leveraging deep expertise and methodical
              approaches to drive impactful results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group h-full"
              >
                <CardHeader className="pb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-300">
                        <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - Light Background */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Client Testimonials</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg text-gray-600">Trusted by leading organizations across Africa</p>
          </div>

          <div className="relative">
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-6 italic">
                  &quot;{testimonials[currentTestimonial].content}&quot;
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    &quot;{testimonials[currentTestimonial].name}&quot;
                  </h4>
                  <p className="text-blue-600 text-sm sm:text-base">&quot;{testimonials[currentTestimonial].role}&quot;</p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons - Hidden on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-600 hover:bg-gray-100"
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-600 hover:bg-gray-100"
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create evidence-based solutions that drive sustainable impact for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E2A] border-t border-white/10 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
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
                    Financial Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Research & Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Monitoring & Evaluation
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
