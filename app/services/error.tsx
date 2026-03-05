"use client"

import UnderDevelopment from "@/components/under-development"

export default function ServicesError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <UnderDevelopment
      title="This page is under development"
      description="We're updating this section. In the meantime, explore our services or get in touch—we'd love to help."
      showServicesLink={true}
      showProductsLink={true}
    />
  )
}
