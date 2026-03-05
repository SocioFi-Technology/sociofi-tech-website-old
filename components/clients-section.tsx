import Image from "next/image"

const ClientsSection = () => {
  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 3", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 4", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 5", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 6", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section className="section-border section-muted py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by teams across Bangladesh
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            From startups to enterprises
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-14 rounded-xl bg-card border border-border/50 shadow-sm hover:border-border hover:shadow-md transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={40}
                className="object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 max-h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
