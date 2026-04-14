"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ShieldCheck, AlertTriangle, Brain, Wrench } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const overviewItems = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Kiểm Soát Quyền Lực",
    description: "Quyền lực nhà nước là do nhân dân ủy thác. Cần kiểm soát để giữ vững bản chất của Nhà nước và phòng chống sự tha hóa.",
    tag: "Cơ chế nội tại & nhân dân",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tOy7X4XC0NjHzCGgnu8mBf2VapwsGT.png",
  },
  {
    number: "02",
    icon: AlertTriangle,
    title: "Phòng Chống Tiêu Cực",
    description: "Đặc quyền, đặc lợi, tham ô, lãng phí, quan liêu — những căn bệnh cần được nhận diện và khắc phục triệt để.",
    tag: "Giặc nội xâm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wgvrHbtnosOdIWF71Gfg5hNw1ZgbyL.png",
  },
  {
    number: "03",
    icon: Brain,
    title: "Nguyên Nhân Tiêu Cực",
    description: "Từ chủ nghĩa cá nhân đến công tác cán bộ chưa tốt — hiểu rõ nguyên nhân để tìm ra biện pháp hiệu quả.",
    tag: "Chủ quan & khách quan",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tgfmSZvOHPllh0WcMuIjEeib7d9MSh.png",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Biện Pháp Xây Dựng",
    description: "Phát huy dân chủ, siết chặt kỷ luật, kết hợp xây và chống, cán bộ nêu gương — 5 biện pháp cốt lõi.",
    tag: "5 biện pháp cụ thể",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QY9xt0lHE4dSPYy8asrSptBJWyELG1.png",
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
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        },
      )
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 85%", toggleActions: "play none none reverse" },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="tongquan" ref={sectionRef} className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 bg-secondary/40">
      <div className="absolute inset-0 stripe-pattern opacity-20" />

      <div ref={headerRef} className="mb-14 relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary font-bold">Tổng Quan</span>
        <h2 className="mt-4 font-[var(--font-playfair)] text-5xl md:text-7xl tracking-[0.03em] text-foreground font-bold leading-[1.15]">
          BỐN NỘI DUNG CHÍNH
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base text-muted-foreground leading-relaxed">
          Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh được thể hiện qua bốn nội dung cốt lõi, từ kiểm soát quyền lực đến các biện pháp xây dựng cụ thể.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
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
  item: {
    number: string
    icon: React.ElementType
    title: string
    description: string
    tag: string
    image: string
  }
}) {
  const Icon = item.icon
  return (
    <article
      className={cn(
        "group relative overflow-hidden",
        "bg-card border-2 border-border",
        "transition-all duration-400 ease-out",
        "hover:border-primary hover:shadow-lg",
      )}
    >
      {/* Image strip on the right */}
      <div className="absolute right-0 top-0 h-full w-28 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 pr-32">
        {/* Top row */}
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground font-mono text-sm font-bold shrink-0">
            {item.number}
          </span>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30">
            <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary font-bold">{item.tag}</span>
          </div>
        </div>

        <h3 className="font-[var(--font-playfair)] text-xl md:text-2xl tracking-wide text-foreground font-bold group-hover:text-primary transition-colors duration-300 leading-snug mb-3">
          {item.title}
        </h3>

        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Bottom arrow */}
        <div className="mt-5 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          <span className="font-mono text-xs font-bold tracking-wider uppercase">Xem chi tiết</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Top-right accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-primary/0 border-l-transparent group-hover:border-t-primary transition-all duration-300" />
    </article>
  )
}
