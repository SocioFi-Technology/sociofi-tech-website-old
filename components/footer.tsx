import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="border-t border-border bg-neutral-slate text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SocioFi%20%28without%20name%29-01_copy-EdQIOshTsBxWnFI9xvGkKRbuAKiTCv.png"
                alt="SocioFi Technology Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold font-display text-white">
                  SocioFi
                </span>
                <span className="text-xs text-brand-teal font-medium">Technology</span>
              </div>
            </Link>
            <p className="text-sm text-white/70">
              Ensuring every enterprise and industry in Bangladesh can harness the power of AI. We build the right solution with the latest technology and your context.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 transition-colors hover:text-brand-teal" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 transition-colors hover:text-brand-teal" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 transition-colors hover:text-brand-teal" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 transition-colors hover:text-brand-teal" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Studio", href: "/studio" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-brand-teal mt-0.5" />
                <span>21 , Jigatola, Dhaka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-teal" />
                <a href="tel:+8801743036425" className="text-white/70 hover:text-white transition-colors">01743036425</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-teal" />
                <a href="mailto:info@sociofitechnology.com" className="text-white/70 hover:text-white transition-colors">info@sociofitechnology.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Newsletter</h3>
            <p className="mt-4 text-sm text-white/70">
              AI in Bangladesh and the right solutions we’re building — straight to your inbox.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-brand-teal"
              />
              <Button className="shrink-0 rounded-full bg-brand-teal px-5 hover:bg-brand-teal/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} SocioFi Technology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/50 transition-colors hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/50 transition-colors hover:text-white/80">
              Terms
            </Link>
            <Link href="/sitemap" className="text-xs text-white/50 transition-colors hover:text-white/80">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
