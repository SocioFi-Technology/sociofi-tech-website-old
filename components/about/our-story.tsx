"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const OurStory = () => {
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

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "SocioFi Technology was established with a vision to transform Bangladesh's industries through AI.",
    },
    {
      year: "2022",
      title: "First Client",
      description: "Partnered with our first enterprise client to develop a custom AI solution.",
    },
    {
      year: "2023",
      title: "FabricxAI Launch",
      description: "Launched our flagship product for the RMG industry, revolutionizing fabric inspection.",
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew our team to include top AI researchers and engineers from Bangladesh.",
    },
    {
      year: "2023",
      title: "Incubation Program",
      description: "Launched our AI startup incubation program to nurture local talent.",
    },
    {
      year: "2024",
      title: "Growing Impact",
      description: "Continuing to expand our reach across multiple industries in Bangladesh.",
    },
  ]

  return (
    <section id="our-story" className="section-border section-muted py-24 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <p className="section-label text-brand-amber">Our story</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              From vision to reality — building AI for Bangladesh
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-brand-teal" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 relative aspect-[5/4] overflow-hidden rounded-2xl border border-border/60 shadow-lg">
                <Image
                  src="/about-story.jpg"
                  alt="SocioFi founding team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  SocioFi started with a simple observation: Bangladeshi industries had plenty of data but lacked tools to use it. We saw how AI and LLMs could close that gap. Founded in 2022 in Dhaka, we set out to make cutting-edge AI accessible and useful for businesses across Bangladesh.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Early days brought <span className="font-semibold text-foreground">challenges</span> — introducing new tech, building trust, proving value. We kept going. Our first big milestone was partnering with a leading garment manufacturer to optimize production; that validated our approach and set the stage for what came next.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-2xl font-bold text-foreground text-center mb-10">Our journey</h3>

            <div className="relative max-w-4xl mx-auto mt-12 px-4">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-brand-teal/80 to-brand-teal/30 rounded-full" />

              {[
                { year: "2022", month: "Jan", title: "Foundation", description: "SocioFi founded in Dhaka to bring AI innovation to Bangladesh.", image: "/about-story.jpg" },
                { year: "2022", month: "Jun", title: "First client", description: "Partnered with a leading garment manufacturer on our first AI solution.", image: "/industry-garment.jpg" },
                { year: "2023", month: "Feb", title: "Fabricxai launch", description: "Launched fabricXai, our flagship product for the garment industry.", image: "/product-fabricxai.jpg" },
                { year: "2023", month: "Aug", title: "Team growth", description: "Grew to 15+ AI specialists, data scientists, and industry experts.", image: "/about-team.jpg" },
                { year: "2024", month: "Jan", title: "Incubation", description: "Launched our program to nurture the next generation of AI founders.", image: "/service-incubation.jpg" },
                { year: "Present", month: "", title: "Growing impact", description: "Expanding reach and impact across industries in Bangladesh.", image: "/careers-office.jpg" },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/60 hover:shadow-lg transition-shadow">
                      <div className="mb-4 relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={milestone.image || "/about-story.jpg"}
                          alt={milestone.title}
                          fill
                          className="object-cover"
                          sizes="300px"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-brand-teal mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-card border-2 border-brand-teal flex items-center justify-center z-10 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                    </div>
                    <div
                      className={`absolute top-12 whitespace-nowrap ${index % 2 === 0 ? "-translate-x-[calc(100%+16px)]" : "translate-x-4"}`}
                    >
                      <span className="bg-brand-teal text-white text-xs font-semibold py-1.5 px-3 rounded-full">
                        {milestone.month ? `${milestone.month} ${milestone.year}` : milestone.year}
                      </span>
                    </div>
                  </div>

                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory

