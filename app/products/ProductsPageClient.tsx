"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Cpu, MessageSquare, Smartphone, ChevronRight, Newspaper, Scale, Lightbulb, Code } from "lucide-react"
import { Pagination } from "@/components/ui/pagination"

export default function ProductsPageClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3

  // All products data
  const allProducts = [
    {
      title: "Fabricxai",
      description:
        "AI-built for Bangladesh's garment industry. Improve efficiency, gain data-driven insights, and optimize your operations.",
      icon: <Cpu className="h-10 w-10 text-brand-teal" />,
      image: "/product-fabricxai.jpg",
      link: "/products/fabricxai",
    },
    {
      title: "Internal Business App",
      description:
        "Custom internal app that centralizes information, streamlines tasks, and improves communication for how your business operates.",
      icon: <Smartphone className="h-10 w-10 text-brand-teal" />,
      image: "/product-internal-app.jpg",
      link: "/products/internal-business-app",
    },
    {
      title: "AI Chatbot BB",
      description:
        "Intelligent chatbot with smart LLM routing and community building — better communication and knowledge sharing in your organisation.",
      icon: <MessageSquare className="h-10 w-10 text-brand-teal" />,
      image: "/product-chatbot.jpg",
      link: "/products/ai-chatbot-bb",
    },
    // Page 2 Products
    {
      title: "NewsWise",
      description:
        "Personalised news portal with AI summarisation and context. News tailored to your interests with clear references.",
      icon: <Newspaper className="h-10 w-10 text-brand-teal" />,
      image: "/product-newswise.jpg",
      link: "/products/newswise",
      page: 2,
    },
    {
      title: "AinGyan",
      description:
        "Your guide to Bangladesh's legal system. Clear answers to basic legal queries about Bangladeshi laws and regulations.",
      icon: <Scale className="h-10 w-10 text-brand-teal" />,
      image: "/product-aingyan.jpg",
      link: "/products/aingyan",
      page: 2,
    },
    {
      title: "AI Learning Platform",
      description:
        "Interactive platform that teaches AI concepts in Bengali. Learn at your own pace with practical exercises and local context.",
      icon: <Lightbulb className="h-10 w-10 text-brand-teal" />,
      image: "/product-aingyan.jpg",
      link: "/products/ai-learning-platform",
      page: 2,
    },
    // Page 3 Products
    {
      title: "BanglaCode Assistant",
      description:
        "AI coding assistant that understands Bengali instructions and generates code. For developers who prefer expressing concepts in their native language.",
      icon: <Code className="h-10 w-10 text-brand-teal" />,
      image: "/blog-ai.jpg",
      link: "/products/bangla-code-assistant",
      page: 3,
    },
    {
      title: "AgriTech AI",
      description:
        "Smart agriculture solution with AI-driven insights on crop management, weather, and pest control to maximise yield and sustainability.",
      icon: <Cpu className="h-10 w-10 text-brand-teal" />,
      image: "/industry-garment.jpg",
      link: "/products/agritech-ai",
      page: 3,
    },
    {
      title: "HealthAssist BD",
      description:
        "AI health assistant with basic medical information and guidance in Bengali. Connects users with healthcare resources across Bangladesh.",
      icon: <MessageSquare className="h-10 w-10 text-brand-teal" />,
      image: "/blog-ai.jpg",
      link: "/products/health-assist-bd",
      page: 3,
    },
  ]

  // Filter products based on current page
  const getProductsForPage = (page: number) => {
    if (page === 1) {
      return allProducts.slice(0, 3) // First 3 products
    } else if (page === 2) {
      return allProducts.slice(3, 6) // Next 3 products
    } else {
      return allProducts.slice(6, 9) // Last 3 products
    }
  }

  const handlePageChange = (page: number) => {
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage(page)
  }

  const currentProducts = getProductsForPage(currentPage)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden gradient-mesh-bg section-border">
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label text-brand-teal">Our products</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              The right product for your industry
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-brand-teal/80" />
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              A suite of AI products built so every enterprise and industry in Bangladesh can harness AI — automation, efficiency, and intelligent insights with the latest technology.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Products Section */}
      <section className="section-border py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={product.image || "/blog-ai.jpg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-5">
                          <h2 className="text-xl font-bold text-white">{product.title}</h2>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-teal/10 p-3 rounded-xl shrink-0">
                          {product.icon}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild className="w-full rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white">
                        <Link href={product.link} className="flex items-center justify-center gap-2">
                          Learn more
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-12"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-neutral-slate via-neutral-slate to-brand-indigo/90 text-white cta-dark-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s build the right solution together</h2>
          <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">
            Get in touch to learn how our products can help your enterprise or industry harness AI.
          </p>
          <Button asChild className="mt-8 rounded-full bg-white px-8 text-neutral-slate font-semibold hover:bg-white/95">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

