"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PhoneCall, FileText, Briefcase, Cpu } from "lucide-react"

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

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

  return (
      <section className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-br from-neutral-slate via-neutral-slate to-brand-indigo/90 text-white cta-dark-section">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          Let&apos;s build the right solution together
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-5 text-xl text-white/90 max-w-2xl mx-auto"
        >
          Partner with SocioFi to ensure your enterprise or industry can harness AI. We build the right solution with the latest technology and your context.
        </motion.p>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          <Button asChild size="lg" className="rounded-full bg-white text-neutral-slate hover:bg-white/95 font-medium w-full">
            <Link href="/contact" className="flex items-center justify-center gap-2">
              <PhoneCall className="h-5 w-5" />
              Contact us
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white/70 text-white hover:text-white hover:bg-white/10 w-full font-medium">
            <Link href="/services" className="flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" />
              Our services
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white/70 text-white hover:text-white hover:bg-white/10 w-full font-medium">
            <Link href="/careers" className="flex items-center justify-center gap-2">
              <Briefcase className="h-5 w-5" />
              Careers
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white/70 text-white hover:text-white hover:bg-white/10 w-full font-medium">
            <Link href="/products/fabricxai" className="flex items-center justify-center gap-2">
              <Cpu className="h-5 w-5" />
              Fabricxai
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

