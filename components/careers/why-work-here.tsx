"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, TrendingUp, Globe, Users, Heart, Clock } from "lucide-react"

const WhyWorkHere = () => {
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
      title: "Mission-Driven Work",
      description:
        "Be part of our mission: ensure every enterprise and industry in Bangladesh can harness AI. Your work will have tangible impact on the local economy and society.",
      icon: <Target className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Latest Technology",
      description:
        "Work with cutting-edge AI — we encourage creativity, experimentation, and the exploration of the latest technologies, including LLMs and agents.",
      icon: <Lightbulb className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Growth Opportunities",
      description:
        "We are committed to the professional development of our team members. Benefit from opportunities for learning, mentorship, and career advancement as SocioFi continues to grow.",
      icon: <TrendingUp className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Impact on Bangladesh's Tech Landscape",
      description:
        "Play a vital role in shaping the future of AI in Bangladesh. Help ensure every enterprise and industry can harness AI.",
      icon: <Globe className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Collaborative & Supportive Team",
      description:
        "Join a diverse team passionate about AI and dedicated to collaboration, mutual support, and building the right solutions.",
      icon: <Users className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Open & Inclusive Culture",
      description:
        "We foster an open, inclusive environment where everyone's ideas are valued and contributions are recognized.",
      icon: <Heart className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Modern & Flexible Work",
      description:
        "Modern and flexible work arrangements with opportunities for remote work to support a healthy work-life balance.",
      icon: <Clock className="h-10 w-10 text-brand-teal" />,
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
            <p className="section-label text-brand-amber mb-4">Why work with us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Life at SocioFi: impact, innovation, and growth
            </h2>
            <div className="w-24 h-1 bg-brand-teal rounded-full mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Discover what makes SocioFi a unique place to build your career in AI and technology — and help ensure every enterprise and industry can harness AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={index === benefits.length - 1 && benefits.length % 3 === 1 ? "lg:col-span-3" : ""}
              >
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="bg-brand-teal/10 p-4 rounded-xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative aspect-[3/2] overflow-hidden rounded-2xl border border-border/60 shadow-lg">
              <Image
                src="/careers-office.jpg"
                alt="SocioFi team collaboration"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our team culture</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                We believe our team is our greatest asset. We&apos;ve built a culture that values innovation, collaboration, and continuous learning — and a shared mission to ensure every enterprise and industry in Bangladesh can harness AI.
              </p>
              <p className="text-lg text-muted-foreground">
                We celebrate achievements together, support each other through challenges, and are united by our vision: building the right solution with the latest technology and local context.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyWorkHere

