"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Trang chủ" },
  { id: "tongquan", label: "Tổng quan" },
  { id: "phan1", label: "Kiểm soát" },
  { id: "phan3", label: "Biện pháp" },
  { id: "ketluan", label: "Kết luận" },
  { id: "credits", label: "Tác giả" },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-16 md:w-20 hidden md:flex flex-col justify-center border-r border-primary/20 bg-background/90 backdrop-blur-sm">
      {/* National emblem at top */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center bg-[#8b0000]/10 border-b border-primary/20 py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dRBQD2T0v8LtKBeg1EIoci9PWFQqiJ.png"
          alt="Quốc huy Việt Nam"
          className="w-12 h-12 object-contain drop-shadow-md"
        />
      </div>

      <div className="flex flex-col gap-6 px-4 mt-14">
        {navItems.map(({ id, label }) => (
          <button key={id} onClick={() => scrollToSection(id)} className="group relative flex items-center gap-3">
            <span
              className={cn(
                "h-3 w-3 transition-all duration-300",
                activeSection === id 
                  ? "bg-primary scale-125" 
                  : "bg-muted-foreground/40 group-hover:bg-primary/60",
              )}
            />
            <span
              className={cn(
                "absolute left-6 font-sans text-xs uppercase tracking-wider opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:left-8 whitespace-nowrap font-semibold",
                activeSection === id ? "text-primary" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* HCM202 label at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span className="font-mono text-[8px] text-primary/60 uppercase tracking-widest -rotate-90 block whitespace-nowrap origin-center">
          HCM202
        </span>
      </div>
    </nav>
  )
}
