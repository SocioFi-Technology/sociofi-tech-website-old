"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const ContactHero = () => {
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
    <section className="relative min-h-[60vh] flex items-center overflow-hidden gradient-mesh-bg section-border">
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
            Contact
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Let&apos;s build the right solution together
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Whether you need an agent, a strategy, or a product — we&apos;re here. Tell us what you&apos;re trying to do and we&apos;ll bring the latest technology and your context to the table.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export default ContactHero
