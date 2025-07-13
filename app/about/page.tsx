"use client"

import { CheckCircle, Target, Users, MapPin, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"


export default function AboutPage() {
  const team = [
    {
      name: "Dr. Eliud Khayo",
      role: "Director & Head of Operations",
      credentials: "PhD Economics, MSc Applied Statistics",
      expertise: "Statistician and Economist with 14+ years experience in economic research and data science.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Japheth Athanasio",
      role: "Director & CEO",
      credentials: "PhD (C) Health Systems Financing, MSc Health Systems Management",
      expertise: "Health system strengthening specialist with 13+ years experience across East and West Africa.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Jamlick Karumbi",
      role: "Lead Consultant - Epidemiology",
      credentials: "PhD Applied Epidemiological Health Research, MSc Epidemiology",
      expertise: "Epidemiologist with 15+ years experience in research, evidence synthesis, and policy development.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Wairimu Maina",
      role: "Lead Consultant - Economics & Finance",
      credentials: "CFA Level 2, Bachelor's Finance & Economics",
      expertise: "Chartered Financial Analyst with expertise in financial modeling, valuations, and corporate finance.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const timeline = [
    {
      year: "2016",
      title: "Foundation",
      description:
        "Lesar Consults was established with a vision to demystify opinions through evidence-based research.",
    },
    {
      year: "2017",
      title: "Official Registration",
      description: "Officially registered under Number BN-AZCYB8QG in the Republic of Kenya on 30-05-2017.",
    },
    {
      year: "2019",
      title: "International Expansion",
      description:
        "Extended operations to serve clients across East and West Africa with major USAID and World Bank projects.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Launched advanced data analytics and GIS capabilities, serving 10+ countries with digital solutions.",
    },
    {
      year: "2023",
      title: "Strategic Growth",
      description: "Achieved 100+ completed projects milestone and expanded team to 50+ expert consultants.",
    },
  ]

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our research activities and client engagements.",
      icon: CheckCircle,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every consultancy project, delivering reliable and actionable insights.",
      icon: Award,
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships to achieve sustainable improvements and lasting impact.",
      icon: Users,
    },
    {
      title: "Innovation",
      description: "We embrace innovative approaches and cutting-edge methodologies to address complex challenges.",
      icon: Target,
    },
  ]

  const offices = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Tom Mboya Avenue",
      type: "Head Office",
      phone: "+254 710 715 132",
      email: "lesarconsults@gmail.com",
    },
    {
      city: "Mombasa",
      country: "Kenya",
      address: "P.O. Box 43239-80100",
      type: "Branch Office",
      phone: "+254 723 280 941",
      email: "lesarconsults@gmail.com",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0E2A] pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-400/30">About Lesar Consults</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Demystifying Opinions Through Evidence
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Since 2016, we&apos;ve been at the forefront of data-driven consulting, transforming complex challenges into
              strategic solutions that create sustainable impact across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Lesar Consults Limited is a premier data, research and analytics consultancy firm that serves as a hub
                of innovation and excellence. We have firmly established ourselves as a leading entity in Health
                Systems, Public Health, Economics, Financial Analysis, and strategic advisory services.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-8">
                Over the past eight years, we have provided high-quality technical assistance to governments,
                ministries, state departments, and international organizations, delivering evidence-based solutions that
                drive measurable impact.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Vision</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      To demystify opinions through evidence-based research, innovative solutions, and strategic
                      partnerships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-5 sm:h-6 w-5 sm:w-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Mission</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      To improve health, investments, and business outcomes for all, not only in East Africa but also
                      internationally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Lesar Consults Team"
                className="rounded-lg shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-base sm:text-lg text-gray-300">Key milestones in our growth and impact</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-400"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-8 sm:mb-12">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <div
                  className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"} md:w-1/2`}
                >
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-400/30 text-xs">{item.year}</Badge>
                      </div>
                      <CardTitle className="text-white text-base sm:text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-gray-300">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all duration-300 h-full"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Expert Leadership Team</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Our dynamic leadership team comprises seasoned professionals with extensive expertise across multiple
              disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all duration-300 h-full"
              >
                <CardContent className="p-4 sm:p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-base sm:text-lg text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-2 text-sm sm:text-base">{member.role}</p>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3">{member.credentials}</p>
                  <p className="text-xs text-gray-400">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Locations</h2>
            <p className="text-base sm:text-lg text-gray-300">
              Serving clients across Africa from our strategic locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-white text-base sm:text-lg">
                        {office.city}, {office.country}
                      </CardTitle>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-400/30 text-xs mt-1">
                        {office.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <p>{office.address}</p>
                    <p>Phone: {office.phone}</p>
                    <p>Email: {office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#0A0E2A] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Our Expert Team?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create evidence-based solutions that drive sustainable impact for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                Get In Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent"
              >
                Explore Our Services
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
