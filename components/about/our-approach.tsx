"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Shield, BarChart3, GraduationCap, Globe } from "lucide-react"

const OurApproach = () => {
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

  const approaches = [
    {
      title: "Right solution for your industry",
      description:
        "We develop fit-for-purpose AI for specific sectors — understanding your challenges and building the right solution with the latest technology.",
      icon: <Settings className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Ethical & responsible AI",
      description:
        "We prioritize responsible AI: data privacy, fairness, transparency, and bias mitigation in every solution we build.",
      icon: <Shield className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Practical impact & measurable ROI",
      description:
        "Our solutions are designed to deliver tangible results — efficiency gains, data-driven decisions, and clear ROI.",
      icon: <BarChart3 className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Building local AI capability",
      description:
        "We invest in local talent through hiring, training, and our incubation program — so Bangladesh owns its AI future.",
      icon: <GraduationCap className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Latest tech + local context",
      description:
        "We combine expertise in the latest AI and LLMs with deep understanding of Bangladeshi industry and context.",
      icon: <Globe className="h-10 w-10 text-brand-teal" />,
    },
  ]

  return (
    <section className="py-20 bg-background section-border">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="section-label text-brand-amber mb-4">Our approach</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How we build the right solution for you
            </h2>
            <div className="w-24 h-1 bg-brand-teal rounded-full mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              We approach every engagement with a focus on the right fit, latest technology, and measurable impact for your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-brand-teal/10 p-3 rounded-xl mr-4">{approach.icon}</div>
                      <h3 className="text-xl font-bold text-foreground pt-2">{approach.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{approach.description}</p>
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

export default OurApproach

