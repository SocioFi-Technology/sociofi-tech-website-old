"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Flag, Database, Globe, Workflow, BarChart3, GraduationCap } from "lucide-react"

const WhyChooseSocioFi = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const benefits = [
    {
      title: "First in Bangladesh",
      description:
        "We're the first company in Bangladesh focused on AI agents for business — setting the bar for what's possible and ensuring every enterprise can harness AI.",
      icon: <Flag className="h-8 w-8 text-brand-teal" />,
    },
    {
      title: "Right solution for your industry",
      description:
        "We don't do one-size-fits-all. Our AI is tailored to your industry and context — the right solution using the latest technology.",
      icon: <Database className="h-8 w-8 text-brand-teal" />,
    },
    {
      title: "Latest technology & LLMs",
      description:
        "We harness the power of Large Language Models and stay at the forefront of AI — so your solution is built on the best available tech.",
      icon: <Globe className="h-8 w-8 text-brand-teal" />,
    },
    {
      title: "End-to-end delivery",
      description:
        "From discovery to development, implementation, and ongoing support — we deliver the full journey so you can harness AI with confidence.",
      icon: <Workflow className="h-8 w-8 text-brand-teal" />,
    },
    {
      title: "Data-driven results",
      description:
        "We help you unlock the power of your data for insights and decisions that drive measurable business growth.",
      icon: <BarChart3 className="h-8 w-8 text-brand-teal" />,
    },
    {
      title: "Local talent & innovation",
      description:
        "We're committed to building AI capability within Bangladesh and contributing to the nation's technological advancement.",
      icon: <GraduationCap className="h-8 w-8 text-brand-teal" />,
    },
  ]

  return (
    <section className="py-20 section-muted section-border">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="section-label text-brand-indigo mb-4">Why partner with us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why partner with SocioFi for AI?
            </h2>
            <div className="w-24 h-1 bg-brand-teal rounded-full mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              We combine the latest technology with deep local context to deliver the right solution — so every enterprise and industry can harness AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-brand-teal/10 p-3 rounded-xl mr-4">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseSocioFi

