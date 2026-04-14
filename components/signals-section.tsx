"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const overviewItems = [
  {
    number: "01",
    title: "Kiểm Soát Quyền Lực",
    description: "Quyền lực nhà nước là do nhân dân ủy thác. Cần kiểm soát để giữ vững bản chất của Nhà nước và phòng chống sự tha hóa.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tOy7X4XC0NjHzCGgnu8mBf2VapwsGT.png",
  },
  {
    number: "02",
    title: "Phòng Chống Tiêu Cực",
    description: "Đặc quyền, đặc lợi, tham ô, lãng phí, quan liêu - những căn bệnh cần được nhận diện và khắc phục.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PXwjbdL49qB3CVn5ET9hsfxgqxnKh2.png",
  },
  {
    number: "03",
    title: "Nguyên Nhân Tiêu Cực",
    description: "Từ chủ nghĩa cá nhân đến công tác cán bộ chưa tốt - hiểu rõ nguyên nhân để tìm ra biện pháp.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0s1ADRtqNQcwAyYH4Hi9wh5sIAgWaD.png",
  },
  {
    number: "04",
    title: "Biện Pháp Xây Dựng",
    description: "Phát huy dân chủ, siết chặt kỷ luật, kết hợp xây và chống, cán bộ nêu gương.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2VDdrNousJpBKvHala1XqIhiU1n0sB.png",
  },
]

export function SignalsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="tongquan" ref={sectionRef} className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 bg-secondary/30">
      {/* Decorative star */}
      <svg 
        className="absolute left-12 top-12 w-16 h-16 text-primary/10" 
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <polygon 
          fill="currentColor" 
          points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        />
      </svg>

      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-medium">Tổng Quan</span>
        <h2 className="mt-4 font-[var(--font-playfair)] text-4xl md:text-6xl tracking-tight text-foreground font-bold">
          BỐN NỘI DUNG CHÍNH
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base text-muted-foreground leading-relaxed">
          Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh được thể hiện qua bốn nội dung cốt lõi, từ kiểm soát quyền lực đến các biện pháp xây dựng cụ thể.
        </p>
      </div>

      {/* Grid cards */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {overviewItems.map((item, index) => (
          <OverviewCard key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

function OverviewCard({
  item,
}: {
  item: { number: string; title: string; description: string; image: string }
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden",
        "bg-card border border-border/50",
        "transition-all duration-500 ease-out",
        "hover:border-primary/40 hover:shadow-lg",
      )}
    >
      {/* Image background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Number badge */}
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground font-mono text-sm font-bold">
            {item.number}
          </span>
          <div className="flex-1 h-[1px] bg-border group-hover:bg-primary/30 transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl tracking-tight text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Link arrow */}
        <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
          <span className="font-sans text-sm font-medium">Xem chi tiết</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-[1px] h-full bg-primary" />
        <div className="absolute top-0 right-0 w-full h-[1px] bg-primary" />
      </div>
    </article>
  )
}
