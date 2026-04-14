"use client"

import { useEffect, useRef } from "react"
import { AnimatedNoise } from "@/components/animated-noise"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Landmark } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

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
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] text-primary/6"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <polygon
            fill="currentColor"
            points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
          />
        </svg>

        {/* Decorative red bars */}
        <div className="absolute top-16 left-0 w-40 h-2 bg-primary" />
        <div className="absolute top-24 left-0 w-24 h-1.5 bg-primary/50" />
        <div className="absolute bottom-32 left-0 w-20 h-1 bg-primary/30" />
        <div className="absolute top-40 left-0 w-12 h-1 bg-golden" />
      </div>

      {/* Left vertical label */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary -rotate-90 origin-left block whitespace-nowrap font-semibold">
          HCM202
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full relative z-10 max-w-2xl">
        {/* Course label */}
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-primary" />
          <Landmark className="w-4 h-4 text-primary" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Tư tưởng Hồ Chí Minh
          </span>
        </div>

        {/* Main title — line-height increased for Vietnamese diacritics */}
        <h1 className="font-[var(--font-playfair)] text-foreground text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.15] tracking-[0.01em] font-bold">
          <span className="block">XÂY DỰNG</span>
          <span className="block text-primary">NHÀ NƯỚC</span>
          <span className="block">TRONG SẠCH</span>
        </h1>

        <h2 className="font-sans text-foreground/70 text-base md:text-lg mt-4 tracking-[0.05em] font-medium">
          Vững Mạnh Theo Tư Tưởng Hồ Chí Minh
        </h2>

        <p className="mt-4 max-w-xl font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
          Nghiên cứu về kiểm soát quyền lực nhà nước, phòng chống tiêu cực, và các biện pháp xây dựng nhà nước của dân, do dân, vì dân theo tư tưởng của Chủ tịch Hồ Chí Minh.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#phan1"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3 font-sans text-sm uppercase tracking-widest font-bold hover:bg-primary/90 transition-all duration-200"
          >
            <span>Bắt đầu tìm hiểu</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button
            onClick={() => router.push("/game")}
            className="group inline-flex items-center gap-2.5 border-2 border-foreground/30 px-6 py-3 font-sans text-sm uppercase tracking-widest font-bold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            <span>{"Phiên Tòa Liêm Chính"}</span>
          </button>
          <a
            href="#tongquan"
            className="font-sans text-sm uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors duration-200 font-medium"
          >
            Tổng quan
          </a>
        </div>

        {/* Quote */}
        <div className="mt-16 border-l-4 border-primary pl-6 max-w-md">
          <p className="font-[var(--font-playfair)] text-lg md:text-xl italic text-foreground leading-relaxed">
            {'"'}Không có gì quý hơn độc lập, tự do{'"'}
          </p>
          <p className="mt-3 font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
            — Hồ Chí Minh
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[45%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JTIwKRIUuI0na1iARxB4ECvCsEb7lr.png"
          alt="Chân dung Chủ tịch Hồ Chí Minh"
          fill
          className="object-cover object-center"
          sizes="45vw"
          priority
        />
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 z-20">
        <div className="border border-primary bg-background px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold">
          HCM202 / 2025
        </div>
      </div>
    </section>
  )
}
