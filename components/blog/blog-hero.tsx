"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const BlogHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden gradient-mesh-bg">
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
            className="inline-block rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal"
          >
            Blog
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Ideas and updates on AI in Bangladesh
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-xl font-medium text-brand-teal md:text-2xl"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            বাংলাদেশ এবং বিশ্বজুড়ে এআই-এর অন্তর্দৃষ্টি ও আপডেট
          </motion.h2>

          <motion.div variants={itemVariants} className="mx-auto my-8 h-1 w-24 rounded-full bg-brand-teal/80" />

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Latest trends in AI, LLMs, and industry solutions — with a focus on how every enterprise and industry can harness AI.
          </motion.p>

          <motion.p variants={itemVariants} className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Insights, news, and analysis on AI — with a focus on Bangladesh and the right solutions we&apos;re building. Latest technology, industry use cases, and company updates.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export default BlogHero

