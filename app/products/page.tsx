import type { Metadata } from "next"
import ProductsPageClient from "./ProductsPageClient"

export const metadata: Metadata = {
  title: "Our Products — Right AI Solutions for Your Industry | SocioFi",
  description:
    "AI-powered products built for Bangladesh — from Fabricxai to conversational AI. The right solution using the latest technology.",
}

export default function ProductsPage() {
  return <ProductsPageClient />
}

