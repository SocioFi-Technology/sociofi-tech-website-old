import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  Rocket,
  BarChart3,
  ChevronRight,
  Brain,
  Factory,
  Users,
  Lightbulb,
  Flag,
  PuzzleIcon,
  Map,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ClientsSection from "@/components/clients-section"

export const metadata = {
  title: "SocioFi — Every Enterprise. Every Industry. Powered by AI.",
  description:
    "Visionary startup for Bangladesh. We ensure every enterprise and industry can harness AI — building the right solution with the latest technology and your context.",
}

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <section className="section-border section-muted py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-14 lg:gap-20">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="relative aspect-[4/3] max-w-xl overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg">
                <Image
                  src="/about-team.jpg"
                  alt="SocioFi Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <p className="section-label text-brand-teal">Who we are</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">Every enterprise and industry can harness AI</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We’re a <span className="font-semibold text-foreground">visionary startup</span> on a mission: ensure that every enterprise and industry in Bangladesh can harness the power of AI.
              </p>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                We build the <span className="font-semibold text-foreground">right solution</span> for you — using our knowledge of the latest technology and your context. Custom agents, industry-specific systems, AI consultancy, and an incubation program for the next wave of builders.
              </p>
              <Button asChild className="mt-9 rounded-full bg-brand-teal px-7 py-2.5 text-white hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/20">
                <Link href="/about" className="inline-flex items-center gap-2 font-medium">
                  Our story
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Services Section */}
      <section className="section-border py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label text-brand-indigo">What we do</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">The right solution for your industry</h2>
            <p className="mt-5 text-muted-foreground">
              From custom agents to full-stack AI strategy — we build fit-for-purpose solutions using the latest technology, tailored for Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="service-card group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Brain className="h-6 w-6" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold text-foreground">AI Agent Development</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">Build custom agents that automate workflows, surface insights, and support better decisions.</CardDescription>
              </CardContent>
              <CardFooter className="p-0 pt-5">
                <Button asChild variant="ghost" className="h-auto p-0 text-brand-teal hover:text-brand-teal/90 hover:bg-transparent font-medium" size="sm">
                  <Link href="/services/ai-agent-development" className="inline-flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="service-card group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo">
                <Factory className="h-6 w-6" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold text-foreground">Customized Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">AI built for garments, agriculture, manufacturing, and other core sectors.</CardDescription>
              </CardContent>
              <CardFooter className="p-0 pt-5">
                <Button asChild variant="ghost" className="h-auto p-0 text-brand-teal hover:text-brand-teal/90 hover:bg-transparent font-medium" size="sm">
                  <Link href="/services/customized-industry-solutions" className="inline-flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="service-card group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-amber/10 text-brand-amber">
                <Lightbulb className="h-6 w-6" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold text-foreground">AI Consultancy</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">From assessment to rollout — we guide your AI journey end to end.</CardDescription>
              </CardContent>
              <CardFooter className="p-0 pt-5">
                <Button asChild variant="ghost" className="h-auto p-0 text-brand-teal hover:text-brand-teal/90 hover:bg-transparent font-medium" size="sm">
                  <Link href="/services/ai-consultancy" className="inline-flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="service-card group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet">
                <Users className="h-6 w-6" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold text-foreground">Incubation Program</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">Mentorship, resources, and support for AI-led startups.</CardDescription>
              </CardContent>
              <CardFooter className="p-0 pt-5">
                <Button asChild variant="ghost" className="h-auto p-0 text-brand-teal hover:text-brand-teal/90 hover:bg-transparent font-medium" size="sm">
                  <Link href="/services/incubation-program" className="inline-flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-14 text-center">
            <Button asChild className="rounded-full border-2 border-foreground/15 bg-transparent px-7 py-2.5 font-medium hover:bg-foreground/5">
              <Link href="/services" className="inline-flex items-center gap-2">
                View all services <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Product - Fabricxai */}
      <section className="section-border gradient-mesh-bg py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label text-brand-violet">Flagship product</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-brand-teal">fabricXai</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              AI-built for Bangladesh’s garment sector — automation, quality, and efficiency in one platform.
            </p>
          </div>

          <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
                <Image
                  src="/product-fabricxai.jpg"
                  alt="Fabricxai Product"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Built for the factory floor</h3>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                fabricXai brings AI into garment manufacturing: smarter automation, real-time analytics, and lower costs. We combine deep sector knowledge with modern ML so your operations run smoother.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Smart automation</h4>
                    <p className="mt-0.5 text-muted-foreground text-sm">Cut repetitive work and streamline production flows</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Live insights</h4>
                    <p className="mt-0.5 text-muted-foreground text-sm">Dashboards and reports that drive decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-sky/10 text-brand-sky">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Higher efficiency</h4>
                    <p className="mt-0.5 text-muted-foreground text-sm">More output, fewer bottlenecks, lower overhead</p>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-10 rounded-full bg-brand-teal px-7 py-2.5 text-white hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/20">
                <Link href="/products/fabricxai" className="inline-flex items-center gap-2 font-medium">
                  Explore fabricXai
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Other Innovative Products */}
      <section className="section-border section-muted py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label text-brand-amber">Products</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              More tools from our stack
            </h2>
            <p className="mt-5 text-muted-foreground">
              Internal tools and conversational AI built for Bangladeshi teams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="service-card rounded-2xl border border-border/60 bg-card p-8 shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-teal">
                    <Cpu className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">Internal Business App</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    Custom apps that simplify workflows, improve collaboration, and boost productivity across your organisation.
                  </p>
                  <Button asChild className="mt-6 rounded-full bg-foreground/5 border border-border/60 px-5 py-2 text-foreground hover:bg-foreground/10 font-medium" size="sm">
                    <Link href="/products/internal-business-app" className="inline-flex items-center gap-2">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card rounded-2xl border border-border/60 bg-card p-8 shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-indigo/10 text-brand-indigo">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">AI Chatbot BB</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    Conversational AI tuned for Bangladeshi businesses — better customer support and engagement, in your language.
                  </p>
                  <Button asChild className="mt-6 rounded-full bg-foreground/5 border border-border/60 px-5 py-2 text-foreground hover:bg-foreground/10 font-medium" size="sm">
                    <Link href="/products/ai-chatbot-bb" className="inline-flex items-center gap-2">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose SocioFi */}
      <section className="section-border py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label text-brand-sky">Why us</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Why work with SocioFi?</h2>
            <p className="mt-5 text-muted-foreground">
              We combine latest-technology expertise with local context — to deliver the right solution where it matters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-border/80">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <Flag className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">First in Bangladesh</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">We’re the country’s first AI agent company — setting the bar for what’s possible.</p>
                </div>
              </div>
            </Card>
            <Card className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-border/80">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo">
                  <PuzzleIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Built for your industry</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">Solutions shaped around the real constraints and opportunities of Bangladeshi sectors.</p>
                </div>
              </div>
            </Card>
            <Card className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-border/80">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet">
                  <Map className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Local + global</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">We know the local context and pair it with world-class AI practice.</p>
                </div>
              </div>
            </Card>
            <Card className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-border/80">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-amber/10 text-brand-amber">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Future-ready</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">We help you stay ahead as AI and automation evolve.</p>
                </div>
              </div>
            </Card>
            <Card className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-border/80">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-sky/10 text-brand-sky">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Results you can measure</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">Clear metrics and insights so you see the impact of AI on growth.</p>
                </div>
              </div>
            </Card>
            <Card className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-border/80">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-rose/10 text-brand-rose">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Rooted in Bangladesh</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">We’re committed to advancing AI adoption and digital transformation here.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest from Our Blog */}
      <section className="section-border section-muted py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label text-brand-teal">Blog</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Ideas and updates</h2>
            <p className="mt-5 text-muted-foreground">
              AI trends, use cases, and what we’re building — straight from our team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "How AI is changing agriculture in Bangladesh", excerpt: "From crop monitoring to supply chains — how AI is helping farmers and agribusinesses work smarter.", slug: "ai-revolutionizing-agriculture-bangladesh", category: "Industry", image: "/blog-ai.jpg" },
              { title: "What’s next for AI agents?", excerpt: "Where intelligent assistants are headed and what it means for businesses and builders.", slug: "future-of-ai-agents", category: "AI Trends", image: "/blog-ai.jpg" },
              { title: "Building AI for Bangladesh’s unique context", excerpt: "Why local context matters and how we design solutions that fit real constraints and opportunities.", slug: "ai-solutions-bangladesh-unique-challenges", category: "Company", image: "/blog-ai.jpg" },
            ].map((post) => (
              <Card key={post.slug} className="service-card overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300">
                <div className="relative h-52">
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 dark:bg-neutral-slate/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <CardContent className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-foreground transition-colors hover:text-brand-teal leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-3 line-clamp-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <Button asChild variant="ghost" className="mt-4 h-auto p-0 text-brand-teal hover:text-brand-teal/90 hover:bg-transparent font-medium" size="sm">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1">
                      Read more <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button asChild className="rounded-full border-2 border-foreground/15 bg-transparent px-7 py-2.5 font-medium hover:bg-foreground/5">
              <Link href="/blog" className="inline-flex items-center gap-2">
                All posts <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-border py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-14 md:flex-row md:gap-20">
            <div className="md:w-1/2">
              <p className="section-label text-brand-amber">Careers</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Build the future of AI with us
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We&apos;re looking for talented individuals passionate about AI and making a difference in Bangladesh&apos;s
                technological landscape.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Dynamic environment, competitive compensation, growth opportunities, and cutting-edge AI projects.
              </p>
              <Button asChild className="mt-9 rounded-full bg-brand-teal px-7 py-2.5 text-white hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/20">
                <Link href="/careers" className="inline-flex items-center gap-2 font-medium">
                  View open positions <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 w-full max-w-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
                <Image
                  src="/careers-office.jpg"
                  alt="SocioFi Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section - logos only */}
      <ClientsSection />

      {/* CTA Section */}
      <section className="relative py-28 md:py-32 overflow-hidden bg-gradient-to-br from-neutral-slate via-neutral-slate to-brand-indigo/90 text-white cta-dark-section">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/20 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem]">
            Let’s build the right solution together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            Whether you need an agent, a strategy, or a product — we’re here. Tell us what you’re trying to do.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="rounded-full bg-white px-8 py-2.5 text-neutral-slate font-semibold hover:bg-white/95 shadow-xl">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-2 border-white/70 bg-transparent text-white hover:text-white hover:bg-white/10 font-medium">
              <Link href="/services">Our services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

