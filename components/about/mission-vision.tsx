"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Telescope } from "lucide-react"

const MissionVision = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 section-muted section-border">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="section-label text-brand-teal mb-4">Our mission & vision</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              A Bangladesh where every enterprise and industry harnesses AI
            </h2>
            <div className="w-24 h-1 bg-brand-teal rounded-full mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-brand-teal/10 p-3 rounded-xl mr-4">
                      <Target className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-lg font-semibold mb-6 text-brand-teal">
                    Build the right AI solution for every client — using the latest technology and local context.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We are dedicated to ensuring that enterprises and industries across Bangladesh can harness AI through fit-for-purpose solutions, not generic tooling.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">•</span>
                      <span>Right solution for each industry and use case</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">•</span>
                      <span>Latest technology expertise applied locally</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">•</span>
                      <span>Developing local AI talent and capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">•</span>
                      <span>Measurable impact and sustainable growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-brand-indigo/10 p-3 rounded-xl mr-4">
                      <Telescope className="h-8 w-8 text-brand-indigo" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-lg font-semibold mb-6 text-brand-indigo">
                    A Bangladesh where every enterprise and industry can harness the power of AI — and thrive.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We envision a future where Bangladeshi businesses are globally competitive, powered by fit-for-purpose AI, and contributing to a thriving digital economy.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-brand-indigo mr-2">•</span>
                      <span>Every enterprise and industry empowered by AI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-indigo mr-2">•</span>
                      <span>Regional leadership in AI adoption and innovation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-indigo mr-2">•</span>
                      <span>Economic and social progress through intelligent technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-indigo mr-2">•</span>
                      <span>A thriving ecosystem of builders and adopters</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision

