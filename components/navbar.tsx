"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "AI Agent Development", href: "/services/ai-agent-development" },
        { name: "Customized Industry Solutions", href: "/services/customized-industry-solutions" },
        { name: "AI Consultancy", href: "/services/ai-consultancy" },
        { name: "Incubation Program", href: "/services/incubation-program" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "Fabricxai", href: "/products/fabricxai" },
        { name: "Internal Communication App", href: "/products/internal-business-app" },
        { name: "AI Chatbot BB", href: "/products/ai-chatbot-bb" },
        { name: "NewsWise", href: "/products/newswise" },
        { name: "AinGyan", href: "/products/aingyan" },
      ],
    },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/5 dark:shadow-black/20" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SocioFi%20%28without%20name%29-01_copy-EdQIOshTsBxWnFI9xvGkKRbuAKiTCv.png"
                alt="SocioFi Technology Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight font-display">
                  SocioFi
                </span>
                <span className="text-xs text-brand-teal font-medium">Technology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        "text-foreground/90 hover:text-brand-teal hover:bg-muted/70 dark:hover:bg-white/10",
                        pathname.startsWith(link.href) && "text-brand-teal hover:text-brand-teal",
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl border-border/50 shadow-xl">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href} className="w-full cursor-pointer rounded-lg">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    "text-foreground/90 hover:text-brand-teal hover:bg-muted/70 dark:hover:bg-white/10",
                    pathname === link.href && "text-brand-teal hover:text-brand-teal",
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white px-5 shadow-lg shadow-brand-teal/25">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border/50 mt-0">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="py-2">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">{link.name}</div>
                  <div className="pl-4 space-y-0.5 border-l-2 border-brand-teal/30">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-brand-teal"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href ? "text-brand-teal bg-brand-teal/10" : "text-foreground hover:text-brand-teal hover:bg-muted/70 dark:hover:bg-white/10",
                  )}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ),
            )}
            <div className="pt-4 flex items-center gap-3 border-t border-border/50">
              <ThemeToggle />
              <Button asChild className="flex-1 rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contact" onClick={toggleMenu}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

