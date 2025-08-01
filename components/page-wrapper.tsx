"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import ScrollToTop from "./scroll-to-top"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  )
}
