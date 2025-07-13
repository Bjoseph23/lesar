import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import PageWrapper from "@/components/page-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lesar Consults - Strategic Insight. Sustainable Impact.",
  description: "Premier data, research and analytics consultancy firm serving Africa and beyond since 2016.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
