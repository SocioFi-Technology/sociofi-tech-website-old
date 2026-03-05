"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ChevronDown } from "lucide-react"

const AboutHero = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [controls, isInView])

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
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal section-label"
          >
            About us
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            We’re on a mission: every enterprise and industry can harness AI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto"
          >
            We build the right solution for each client — using the latest technology and your context.
          </motion.p>

          <motion.div variants={itemVariants} className="mx-auto my-8 h-1 w-24 rounded-full bg-brand-teal/80" />

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SocioFi is a visionary startup for Bangladesh. We combine deep knowledge of cutting-edge AI with local industry understanding — so every enterprise and industry can harness the power of AI.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center mt-12">
            <a
              href="#our-story"
              className="flex flex-col items-center text-brand-teal hover:text-brand-teal/80 transition-colors font-medium"
            >
              <span className="mb-2">Explore our story</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export default AboutHero
