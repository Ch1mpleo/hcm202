"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ShieldCheck, AlertTriangle, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        })
      }
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".animate-item")
        gsap.from(elements, {
          y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ketluan"
      className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t-2 border-border"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0s1ADRtqNQcwAyYH4Hi9wh5sIAgWaD.png"
          alt=""
          fill
          className="object-cover opacity-5"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      {/* Section header */}
      <div ref={headerRef} className="relative z-10 mb-14">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary font-bold">Kết Luận</span>
        <h2 className="mt-4 font-[var(--font-playfair)] text-5xl md:text-7xl tracking-[0.03em] text-foreground font-bold leading-[1.15]">
          Ý NGHĨA & GIÁ TRỊ
        </h2>
      </div>

      <div ref={contentRef} className="relative z-10 space-y-12">
        {/* Summary with image */}
        <div className="animate-item grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-video overflow-hidden border-2 border-primary">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWEOIQVSK68PinbFiuGUbU2yEX6v7a.png"
              alt="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="font-mono text-[10px] text-primary tracking-wider uppercase">
                2/9/1945 — Ba Đình, Hà Nội
              </p>
            </div>
          </div>
          <blockquote className="font-[var(--font-playfair)] text-xl md:text-2xl text-foreground leading-relaxed">
            Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh không chỉ có giá trị lịch sử mà còn mang ý nghĩa thực tiễn sâu sắc trong công cuộc xây dựng và bảo vệ Tổ quốc hiện nay.
          </blockquote>
        </div>

        {/* Key takeaways */}
        <div className="animate-item grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-card border-2 border-border p-6 hover:border-primary/50 transition-colors duration-300 flex gap-4">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base text-foreground mb-2 leading-snug">Kiểm soát quyền lực</h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Xây dựng cơ chế kiểm soát từ bên trong và bên ngoài, với sự tham gia của nhân dân.
              </p>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-6 hover:border-primary/50 transition-colors duration-300 flex gap-4">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base text-foreground mb-2 leading-snug">Nhận diện tiêu cực</h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Hiểu rõ các biểu hiện và nguyên nhân tiêu cực để có biện pháp phòng, chống hiệu quả.
              </p>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-6 hover:border-primary/50 transition-colors duration-300 flex gap-4">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base text-foreground mb-2 leading-snug">Hành động cụ thể</h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Áp dụng 5 biện pháp xây dựng nhà nước của dân, do dân, vì dân theo tư tưởng Hồ Chí Minh.
              </p>
            </div>
          </div>
        </div>

        {/* Final quote */}
        <div className="animate-item bg-primary text-primary-foreground p-8 md:p-12">
          <div className="flex items-start gap-5">
            <svg className="w-12 h-12 text-primary-foreground/25 shrink-0" viewBox="0 0 100 100">
              <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
            </svg>
            <div>
              <blockquote className="font-[var(--font-playfair)] text-xl md:text-3xl italic leading-snug">
                {'"'}Cán bộ là cái gốc của mọi công việc. Vì vậy, huấn luyện cán bộ là công việc gốc của Đảng{'"'}
              </blockquote>
              <cite className="mt-4 block font-mono text-xs uppercase tracking-[0.25em] not-italic opacity-75 font-bold">
                — Chủ tịch Hồ Chí Minh
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
