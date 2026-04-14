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
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] text-primary/5" 
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <polygon 
            fill="currentColor" 
            points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
          />
        </svg>

        {/* Decorative red bars */}
        <div className="absolute top-20 left-0 w-32 h-2 bg-primary/20" />
        <div className="absolute top-28 left-0 w-20 h-1 bg-primary/15" />
      </div>

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary -rotate-90 origin-left block whitespace-nowrap">
          HCM202
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full relative z-10">
        {/* Course label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Tư tưởng Hồ Chí Minh
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-[var(--font-playfair)] text-foreground text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight font-bold">
          <span className="block">XÂY DỰNG</span>
          <span className="block text-primary">NHÀ NƯỚC</span>
          <span className="block">TRONG SẠCH</span>
        </h1>

        <h2 className="font-sans text-muted-foreground text-[clamp(1rem,2.5vw,1.5rem)] mt-6 tracking-wide font-medium">
          Vững Mạnh Theo Tư Tưởng Hồ Chí Minh
        </h2>

        <p className="mt-8 max-w-lg font-sans text-sm text-muted-foreground leading-relaxed">
          Nghiên cứu về kiểm soát quyền lực nhà nước, phòng chống tiêu cực, và các biện pháp xây dựng nhà nước của dân, do dân, vì dân theo tư tưởng của Chủ tịch Hồ Chí Minh.
        </p>

        <div className="mt-12 flex items-center gap-6">
          <a
            href="#phan1"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 font-sans text-sm uppercase tracking-wider font-medium hover:bg-primary/90 transition-all duration-200"
          >
            <span>Bắt đầu tìm hiểu</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#tongquan"
            className="font-sans text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Tổng quan
          </a>
        </div>

        {/* Quote */}
        <div className="mt-16 border-l-2 border-primary/30 pl-6 max-w-md">
          <p className="font-[var(--font-playfair)] text-lg italic text-foreground/80 leading-relaxed">
            {'"'}Không có gì quý hơn độc lập, tự do{'"'}
          </p>
          <p className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
            — Hồ Chí Minh
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[45%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JTIwKRIUuI0na1iARxB4ECvCsEb7lr.png"
          alt="Chủ tịch Hồ Chí Minh"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
        <div className="border border-primary/30 bg-background/80 backdrop-blur-sm px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-primary">
          HCM202 / 2025
        </div>
      </div>
    </section>
  )
}
