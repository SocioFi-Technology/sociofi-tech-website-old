"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Factory, Lightbulb, GraduationCap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ServiceCategories = () => {
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

  const services = [
    {
      title: "AI Agent Development",
      description:
        "We build custom AI agents that automate workflows, enhance interactions, and deliver the right solution for your processes — using the latest technology.",
      icon: <Brain className="h-12 w-12 text-brand-teal" />,
      link: "/services/ai-agent-development",
      linkText: "Learn more",
    },
    {
      title: "Customized Industry Solutions",
      description:
        "Fit-for-purpose AI for garments, agriculture, manufacturing, and more — tailored to your industry and built so every enterprise can harness AI.",
      icon: <Factory className="h-12 w-12 text-brand-indigo" />,
      link: "/services/customized-industry-solutions",
      linkText: "Explore industry solutions",
    },
    {
      title: "AI Consultancy",
      description:
        "From assessment to rollout — we guide your AI journey with strategy and implementation support so you get the right solution, not generic tooling.",
      icon: <Lightbulb className="h-12 w-12 text-brand-amber" />,
      link: "/services/ai-consultancy",
      linkText: "Discover consultancy",
    },
    {
      title: "Incubation Program",
      description:
        "We nurture the next generation of builders with resources, mentorship, and support to create innovative AI-powered products for Bangladesh.",
      icon: <GraduationCap className="h-12 w-12 text-brand-violet" />,
      link: "/services/incubation-program",
      linkText: "Learn about incubation",
    },
  ]

  return (
    <section id="service-categories" className="py-20 section-border bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="section-label text-brand-teal mb-4">What we offer</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The right solution for your industry
            </h2>
            <div className="w-24 h-1 bg-brand-teal rounded-full mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              We offer a full suite of AI services so every enterprise and industry in Bangladesh can harness AI — with the latest technology and your context.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-brand-teal/10 p-4 rounded-xl w-fit mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 text-brand-teal hover:text-brand-teal/90 hover:bg-transparent font-medium"
                    >
                      <Link href={service.link} className="flex items-center">
                        {service.linkText}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCategories

