"use client"

import { useEffect, useRef } from "react"
import { AnimatedNoise } from "@/components/animated-noise"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12 overflow-hidden">
      <AnimatedNoise opacity={0.02} />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large star watermark */}
        <svg 
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[700px] h-[700px] text-primary/8" 
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <polygon 
            fill="currentColor" 
            points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
          />
        </svg>

        {/* Decorative red bars - bolder */}
        <div className="absolute top-16 left-0 w-48 h-3 bg-primary" />
        <div className="absolute top-24 left-0 w-32 h-2 bg-primary/60" />
        <div className="absolute bottom-32 left-0 w-24 h-2 bg-primary/40" />
        
        {/* Golden accent */}
        <div className="absolute top-40 left-0 w-16 h-1 bg-golden" />
      </div>

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary -rotate-90 origin-left block whitespace-nowrap font-semibold">
          HCM202
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full relative z-10 max-w-3xl">
        {/* Course label */}
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="w-12 h-[3px] bg-primary" />
          <span className="font-mono text-sm uppercase tracking-[0.25em] text-primary font-bold">
            Tư tưởng Hồ Chí Minh
          </span>
        </div>

        {/* Main title - larger with more spacing */}
        <h1 className="font-[var(--font-playfair)] text-foreground text-[clamp(3rem,10vw,7rem)] leading-[1.1] tracking-[0.04em] font-bold">
          <span className="block">XÂY DỰNG</span>
          <span className="block text-primary">NHÀ NƯỚC</span>
          <span className="block">TRONG SẠCH</span>
        </h1>

        <h2 className="font-sans text-foreground/80 text-[clamp(1.25rem,3vw,1.75rem)] mt-8 tracking-[0.05em] font-semibold">
          Vững Mạnh Theo Tư Tưởng Hồ Chí Minh
        </h2>

        <p className="mt-10 max-w-xl font-sans text-base md:text-lg text-muted-foreground leading-[1.9] tracking-wide">
          Nghiên cứu về kiểm soát quyền lực nhà nước, phòng chống tiêu cực, và các biện pháp xây dựng nhà nước của dân, do dân, vì dân theo tư tưởng của Chủ tịch Hồ Chí Minh.
        </p>

        <div className="mt-14 flex items-center gap-8">
          <a
            href="#phan1"
            className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 font-sans text-base uppercase tracking-wider font-bold hover:bg-primary/90 transition-all duration-200"
          >
            <span>Bắt đầu tìm hiểu</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#tongquan"
            className="font-sans text-base uppercase tracking-wider text-foreground hover:text-primary transition-colors duration-200 font-semibold"
          >
            Tổng quan
          </a>
        </div>

        {/* Quote - larger */}
        <div className="mt-20 border-l-4 border-primary pl-8 max-w-lg">
          <p className="font-[var(--font-playfair)] text-xl md:text-2xl italic text-foreground leading-[1.6]">
            {'"'}Không có gì quý hơn độc lập, tự do{'"'}
          </p>
          <p className="mt-4 font-mono text-sm text-primary uppercase tracking-[0.2em] font-semibold">
            — Hồ Chí Minh
          </p>
        </div>
      </div>

      {/* Hero image - larger and more prominent */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[50%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWEOIQVSK68PinbFiuGUbU2yEX6v7a.png"
          alt="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* Overlay frame effect */}
        <div className="absolute inset-y-20 right-12 left-12 border-2 border-primary/20 z-20" />
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 z-20">
        <div className="border-2 border-primary bg-background px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">
          HCM202 / 2025
        </div>
      </div>
    </section>
  )
}
