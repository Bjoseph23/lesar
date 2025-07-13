"use client"

import Link from "next/link"
import Image from "next/image"


import { useState } from "react"
import { Mail, Phone, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState("consulting")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "Lesar Consults is your trusted partner providing strategic insights and data-driven solutions. We offer comprehensive services including health systems strengthening, financial analysis, research and analytics, monitoring and evaluation, human resources optimization and innovative technology integration.",
    },
    {
      question: "How Can Your Firm Help Improve Our Business?",
      answer:
        "At Lesar, our dedicated team understands the dynamic nature of business. We provide strategic guidance, operational efficiency improvements, and sustainable growth strategies tailored to your specific industry needs through evidence-based solutions.",
    },
    {
      question: "What Experience Do You Have in Our Industry?",
      answer:
        "With over 8 years of experience across multiple sectors, our team has successfully completed 100+ projects in 15+ countries. Our expertise spans health systems, economics, data analytics, policy development, and strategic planning with proven results.",
    },
    {
      question: "What is Your Approach or Methodology?",
      answer:
        "Our approach is built on evidence-based research and data-driven insights. We follow a systematic methodology including comprehensive assessment, data analysis, strategic solution development, implementation support, and continuous evaluation.",
    },
    {
      question: "Can You Provide References or Case Studies?",
      answer:
        "Yes, we have extensive experience with major international organizations including USAID, World Bank, WHO, UNICEF, and various government ministries. We can provide detailed case studies and references upon request.",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section - Dark Background */}
      <section className="py-16 bg-[#0A0E2A] relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-10 right-20 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute top-20 right-40 w-1 h-1 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-blue-500 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Reach Out to Us
                <span className="block">Right Away</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect directly with experienced and discover the benefits of reaching out to us immediately for
                personalized solutions and support.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Headquarter Email</h4>
                    <p className="text-blue-300">lesarconsults@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Headquarter Phone Number</h4>
                    <p className="text-blue-300">+254 710 715 132</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg opacity-20"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Customer service team"
                className="relative w-full h-80 md:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Light Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Service Selection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Do You Need?</h2>

              <RadioGroup value={selectedService} onValueChange={setSelectedService} className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="consulting" id="consulting" className="text-blue-600" />
                  <Label htmlFor="consulting" className="text-gray-700 cursor-pointer">
                    Consulting services
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="question" id="question" className="text-blue-600" />
                  <Label htmlFor="question" className="text-gray-700 cursor-pointer">
                    Question & help
                  </Label>
                </div>
              </RadioGroup>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Professional consultation"
                  className="w-full h-64 object-cover rounded-lg"
                />
                {/* Decorative dots */}
                <div className="absolute -bottom-4 -left-4 flex space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">We will be happy to help you</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-gray-700">
                        Full Name*
                      </Label>
                      <Input id="fullName" placeholder="Your full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-gray-700">
                        Company
                      </Label>
                      <Input id="company" placeholder="Your company" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone Number*
                      </Label>
                      <Input id="phone" placeholder="+254 XXX XXX" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Email*
                      </Label>
                      <Input id="email" type="email" placeholder="mail@domain.com" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700">
                      Subject You Want to Discuss
                    </Label>
                    <Input id="subject" placeholder="Subject of discussion" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Submit Form</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark Background */}
      <section className="py-20 bg-[#0A0E2A] relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-blue-500 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Most Asked Questions to Us</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardHeader className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white text-left text-lg">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-400" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed text-sm">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
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
