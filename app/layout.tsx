import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Source_Sans_3, Syne } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatbotWrapper from "@/components/chatbot-wrapper"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sociofitechnology.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SocioFi — Every Enterprise. Every Industry. Powered by AI.",
    template: "%s | SocioFi",
  },
  description:
    "Visionary startup for Bangladesh. We ensure every enterprise and industry can harness AI — building the right solution with the latest technology and your context.",
  keywords: [
    "SocioFi",
    "AI",
    "Bangladesh",
    "enterprise AI",
    "artificial intelligence",
    "AI solutions",
    "Dhaka",
    "AI consultancy",
    "AI products",
  ],
  authors: [{ name: "SocioFi Technology", url: siteUrl }],
  creator: "SocioFi Technology",
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "SocioFi",
    title: "SocioFi — Every Enterprise. Every Industry. Powered by AI.",
    description:
      "Visionary startup for Bangladesh. We ensure every enterprise and industry can harness AI — building the right solution with the latest technology and your context.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SocioFi — Every Enterprise. Every Industry. Powered by AI.",
    description:
      "Visionary startup for Bangladesh. We ensure every enterprise and industry can harness AI — building the right solution with the latest technology and your context.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${sourceSans.variable} ${syne.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatbotWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}