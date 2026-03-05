"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const HeroSection = () => {
  const [heroImageError, setHeroImageError] = useState(false)

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background: gradient with broader palette, image on top when available */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-slate via-neutral-slate/98 to-brand-indigo/10">
        {!heroImageError && (
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
            onError={() => setHeroImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-4 w-4" />
            Visionary startup for Bangladesh
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every enterprise. Every industry.{" "}
            <span className="bg-gradient-to-r from-brand-teal via-brand-indigo/90 to-brand-violet/90 bg-clip-text text-transparent">
              Powered by AI.
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We build the right solution for you — with the latest technology and your context.
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            From custom agents to industry-specific systems and AI consultancy — tailored for Bangladesh, built for scale. No generic tooling; only fit-for-purpose AI.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button asChild size="lg" className="rounded-full bg-brand-teal px-6 hover:bg-brand-teal/90 text-white shadow-lg shadow-brand-teal/25">
              <Link href="/services" className="inline-flex items-center gap-2">
                See our solutions
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-foreground/20 bg-background/80 px-6 backdrop-blur-sm hover:bg-foreground/5">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Get in touch
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
              <Link href="/about">About us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
