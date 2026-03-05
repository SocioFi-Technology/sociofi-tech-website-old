"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const OurCommitment = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const commitments = [
    "Supporting young entrepreneurs in the AI sector",
    "Creating tech job opportunities locally",
    "Helping local businesses improve efficiency through AI",
    "Partnering with universities on AI research and education",
    "Training students in cutting-edge AI technologies",
  ]

  return (
    <section className="section-border py-24 md:py-28 gradient-mesh-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <p className="section-label text-brand-sky">Our commitment</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Committed to Bangladesh — building a brighter future with AI
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-brand-amber/80" />
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              We&apos;re not just a tech company; we&apos;re a Bangladeshi company invested in the nation&apos;s future and in empowering the next generation.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="lg:w-1/2 relative aspect-[6/5] overflow-hidden rounded-2xl border border-border/60 shadow-lg">
              <Image
                src="/about-team.jpg"
                alt="SocioFi's vision for Bangladesh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our vision for impact</h3>

              <div className="space-y-4 mb-8">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-teal shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{commitment}</p>
                  </div>
                ))}
              </div>

              <Card className="rounded-2xl border border-border/60 bg-card shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-brand-teal mb-4">Incubation program</h4>
                  <p className="text-muted-foreground mb-4">
                    Our initiative to nurture the next generation of AI entrepreneurs in Bangladesh — mentorship, resources, and support to turn ideas into successful AI startups.
                  </p>
                  <p className="text-muted-foreground">
                    Through this program we aim to build a thriving AI ecosystem and create opportunities for talented individuals to contribute to the nation&apos;s technological advancement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurCommitment

