import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio — Projects & Work | SocioFi Studio",
  description:
    "Browse our portfolio of AI solutions, product design, and enterprise projects delivered for clients across industries.",
}

const PLACEHOLDER_PROJECTS = [
  {
    id: "1",
    title: "Enterprise AI Platform",
    description: "End-to-end AI platform for a leading enterprise — custom agents, data pipelines, and dashboards.",
    tags: ["AI", "Enterprise", "Dashboard"],
    image: "/studio/portfolio-enterprise-ai-platform.png",
  },
  {
    id: "2",
    title: "Legal Knowledge Assistant",
    description: "Search and discovery tool for legal professionals. Semantic search over regulations and case law.",
    tags: ["AI", "Legal", "Search"],
    image: "/studio/portfolio-legal-knowledge-assistant.png",
  },
  {
    id: "3",
    title: "Internal Communication Suite",
    description: "Unified communication and workflow app for distributed teams with AI-powered summaries.",
    tags: ["Product", "Communication", "AI"],
    image: "/studio/portfolio-internal-communication-suite.png",
  },
  {
    id: "4",
    title: "Industry Solution — Fabric & Textile",
    description: "Customized AI solution for quality control, demand forecasting, and supply chain optimization.",
    tags: ["Industry", "ML", "Automation"],
    image: "/studio/portfolio-fabric-textile.png",
  },
  {
    id: "5",
    title: "News & Media Intelligence",
    description: "Curated news aggregation and sentiment analysis for media and research teams.",
    tags: ["NLP", "Media", "Analytics"],
    image: "/studio/portfolio-news-media-intelligence.png",
  },
  {
    id: "6",
    title: "Chatbot & Customer Support",
    description: "Conversational AI for customer support with integration to existing CRM and knowledge bases.",
    tags: ["Chatbot", "Support", "NLP"],
    image: "/studio/portfolio-chatbot-support.png",
  },
]

function ProjectCard({
  title,
  description,
  tags,
  image,
}: {
  title: string
  description: string
  tags: string[]
  image?: string
}) {
  return (
    <article className="group rounded-xl sm:rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/10 hover:border-brand-teal/30 min-w-0">
      <div className="aspect-video bg-muted/50 flex items-center justify-center relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
            quality={90}
          />
        ) : (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground/50 text-xl sm:text-2xl font-display font-bold">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-foreground break-words">{title}</h3>
        <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-medium text-brand-teal"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function PortfolioPage() {
  return (
    <div className="pt-16 min-w-0 overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-mesh-bg section-border">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-teal transition-colors mb-6 sm:mb-8 py-2 -my-2 min-h-[44px] rounded-lg touch-manipulation active:opacity-80"
            aria-label="Back to Studio"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Back to Studio
          </Link>
          <span className="inline-block rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal section-label">
            Portfolio
          </span>
          <h1 className="mt-3 sm:mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Projects we've built
          </h1>
          <p className="mt-3 sm:mt-4 text-base text-muted-foreground sm:text-lg md:text-xl max-w-2xl">
            A selection of AI solutions, products, and custom projects delivered for enterprises and industries.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {PLACEHOLDER_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            ))}
          </div>
          <p className="mt-8 sm:mt-12 text-center text-sm text-muted-foreground px-2">
            More case studies and detailed project pages coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}
