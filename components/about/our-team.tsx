"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

const OurTeam = () => {
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

  const teamMembers = [
    {
      name: "Rahim Ahmed",
      title: "Co-founder & CEO",
      bio: "Rahim is the Co-founder and CEO of SocioFi Technology. With over 10 years of experience in technology and business leadership, he drives SocioFi's vision and strategy. He holds an MBA from BUET and is passionate about leveraging AI to transform Bangladeshi industries.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Fatima Khan",
      title: "Co-founder & CTO",
      bio: "Fatima is the Co-founder and CTO of SocioFi Technology. With a background in AI research and software engineering, she leads SocioFi's technology development. She holds a Master's in Computer Science from Bangladesh University of Engineering and Technology.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Kamal Hassan",
      title: "Head of AI Research",
      bio: "Kamal leads SocioFi's AI research initiatives. With a PhD in Machine Learning from Dhaka University, he brings deep expertise in LLMs and natural language processing. He is committed to developing AI solutions that address unique challenges in Bangladesh.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Nusrat Jahan",
      title: "Head of Industry Solutions",
      bio: "Nusrat oversees SocioFi's industry-specific AI solutions. With extensive experience in the garment industry and technology implementation, she ensures our solutions address real-world challenges. She holds an engineering degree from BUET.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Imran Khan",
      title: "Lead Data Scientist",
      bio: "Imran leads SocioFi's data science team. With expertise in machine learning and data analytics, he transforms complex data into actionable insights. He has a Master's in Data Science and previously worked with international tech companies.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sadia Rahman",
      title: "Head of Incubation Program",
      bio: "Sadia manages SocioFi's incubation program for AI entrepreneurs. With a background in startup mentorship and business development, she helps nurture the next generation of AI talent in Bangladesh. She is passionate about fostering innovation.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <section className="section-border section-muted py-24 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <p className="section-label text-brand-indigo">Meet the team</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Experts in AI, passionate about Bangladesh
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-brand-teal" />
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              Our team brings together AI expertise, industry knowledge, and a shared commitment to Bangladesh&apos;s technological advancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden group aspect-square">
                      <Image
                        src={member.image || "/about-team.jpg"}
                        alt={member.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex justify-center gap-3">
                            <a href={member.linkedin} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-brand-teal/80 transition-colors" aria-label={`${member.name} LinkedIn`}>
                              <Linkedin className="h-5 w-5 text-white" />
                            </a>
                            <a href={member.twitter} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-brand-teal/80 transition-colors" aria-label={`${member.name} Twitter`}>
                              <Twitter className="h-5 w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-brand-teal font-medium mb-4">{member.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
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

export default OurTeam

