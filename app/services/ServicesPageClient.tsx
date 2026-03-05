"use client"

import { useState } from "react"
import ServicesHero from "@/components/services/services-hero"
import ServiceCategories from "@/components/services/service-categories"
import WhyChooseSocioFi from "@/components/services/why-choose-sociofi"
import ServicesCTA from "@/components/services/services-cta"
import { Pagination } from "@/components/ui/pagination"

export default function ServicesPageClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3

  const handlePageChange = (page: number) => {
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage(page)
  }

  return (
    <div className="pt-16">
      {/* Hero Section - Always visible on all pages */}
      <ServicesHero />

      {/* Page 1 Content */}
      {currentPage === 1 && (
        <>
          <ServiceCategories />
          <WhyChooseSocioFi />
        </>
      )}

      {/* Page 2 Content */}
      {currentPage === 2 && (
        <section className="section-border section-muted py-24 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="section-label text-brand-teal text-center">Process</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
                Our service process
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-brand-teal" />

              <div className="space-y-8 mt-14">
                {[
                  { step: "1", title: "Discovery & assessment", desc: "We understand your business, challenges, and goals, and identify where AI can create the most value." },
                  { step: "2", title: "Strategy & solution design", desc: "We develop a tailored AI strategy and design solutions that address your needs and deliver measurable results." },
                  { step: "3", title: "Development & implementation", desc: "We build and integrate AI solutions with your systems, using agile methods to deliver value incrementally." },
                ].map((item) => (
                  <div key={item.step} className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-teal mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Page 3 Content */}
      {currentPage === 3 && (
        <section className="section-border py-24 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="section-label text-brand-indigo text-center">Support</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
                Completion & ongoing support
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-brand-indigo/80" />

              <div className="space-y-8 mt-14">
                {[
                  { title: "Training & knowledge transfer", desc: "We train your team so they can use and get the most from the AI solutions." },
                  { title: "Monitoring & optimization", desc: "We monitor performance and optimise based on data so results keep improving." },
                  { title: "Ongoing support & partnership", desc: "We provide ongoing support and stay committed to your growth as the AI landscape evolves." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-teal mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section - Always visible on all pages */}
      <ServicesCTA />

      {/* Pagination */}
      <div className="container mx-auto px-4">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

