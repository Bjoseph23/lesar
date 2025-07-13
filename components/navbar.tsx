"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0A0E2A]/90 backdrop-blur-md shadow-lg" : "bg-[#0A0E2A]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">L</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg sm:text-xl font-bold text-white">Lesar Consults</span>
              <p className="text-xs text-gray-300">Demystifying opinions</p>
            </div>
            <div className="block sm:hidden">
              <span className="text-lg font-bold text-white">Lesar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-blue-400 transition-colors text-sm lg:text-base ${
                  pathname === item.href ? "text-blue-400 font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/consultation">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10 w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ top: "64px" }}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-[#0A0E2A]/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-white hover:text-blue-400 transition-colors py-3 text-lg ${
                pathname === item.href ? "text-blue-400 font-medium" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
