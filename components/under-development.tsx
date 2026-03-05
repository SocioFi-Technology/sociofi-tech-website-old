"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Construction } from "lucide-react"

type UnderDevelopmentProps = {
  title?: string
  description?: string
  showServicesLink?: boolean
  showProductsLink?: boolean
}

export default function UnderDevelopment({
  title = "Under development",
  description = "This page is being updated. Please check back soon or get in touch for more information.",
  showServicesLink = true,
  showProductsLink = true,
}: UnderDevelopmentProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-teal/10 text-brand-teal mb-6">
          <Construction className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-3">{title}</h1>
        <p className="text-muted-foreground mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="rounded-full bg-brand-teal text-white hover:bg-brand-teal/90">
            <Link href="/contact">Contact us</Link>
          </Button>
          {showServicesLink && (
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/services">Our services</Link>
            </Button>
          )}
          {showProductsLink && (
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/products">Our products</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
