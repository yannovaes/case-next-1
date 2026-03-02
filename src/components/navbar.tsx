"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react" // npm install lucide-react

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#fale" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full py-3 bg-primary">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/Logo-Meta-Consultoria.png" 
            alt="Meta" 
            width={140} 
            height={35} 
            className="h-8 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link 
                      href={item.href}
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-primary-foreground hover:bg-white/10 hover:text-meta-highlight uppercase font-bold text-xs tracking-[0.1em] transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* MOBILE MENU (SHEET/DROPDOWN) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-meta-dark border-white/10">
              <SheetHeader className="mb-8 border-b border-white/10 pb-4">
                <SheetTitle className="text-primary-foreground text-left uppercase text-sm font-bold tracking-widest">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-primary-foreground text-lg font-bold uppercase tracking-tighter hover:text-meta-highlight transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}