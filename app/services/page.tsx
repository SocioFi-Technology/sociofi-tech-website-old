import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "Our Services — The Right AI Solution for Your Industry | SocioFi",
  description:
    "From custom agents to full-stack AI strategy. We build the right solution for every enterprise and industry using the latest technology.",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

