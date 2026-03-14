import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Studio — Creative & Design | SocioFi",
  description:
    "Explore our Studio — creative work, design projects, and portfolio of solutions we've built for enterprises and industries.",
}

export default function StudioPage() {
  return (
    <div className="pt-16">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden gradient-mesh-bg section-border">
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal section-label">
              Studio
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Where ideas become reality
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
              Creative work, design, and the projects we're proud of. Explore our portfolio.
            </p>
            <div className="mx-auto my-8 h-1 w-24 rounded-full bg-brand-teal/80" />
            <Button asChild className="rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white px-6 shadow-lg shadow-brand-teal/25">
              <Link href="/studio/portfolio" className="inline-flex items-center gap-2">
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
      </section>
    </div>
  )
}
