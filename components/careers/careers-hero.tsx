"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const CareersHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden gradient-mesh-bg section-border">
      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal section-label"
          >
            Careers
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Build the future of AI with a visionary team
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Join us in ensuring every enterprise and industry in Bangladesh can harness AI. Impactful work, latest technology, and a team that cares.
          </motion.p>

          <motion.div variants={itemVariants} className="mx-auto my-8 h-1 w-24 rounded-full bg-brand-teal/80" />

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
            We&apos;re a fast-growing startup at the forefront of AI in Bangladesh. If you want challenging, meaningful work — take a look at our open roles.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button asChild size="lg" className="rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white shadow-lg shadow-brand-teal/20">
              <a href="#open-positions" className="inline-flex items-center gap-2">
                View open positions
                <ChevronRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-foreground/20">
              <Link href="/contact" className="inline-flex items-center gap-2">Contact our team</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export default CareersHero
