"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

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
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".animate-item")
        gsap.from(elements, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }


    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ketluan"
      className="relative py-28 md:py-36 pl-6 md:pl-28 pr-6 md:pr-12 border-t-2 border-border"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0s1ADRtqNQcwAyYH4Hi9wh5sIAgWaD.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      {/* Section header */}
      <div ref={headerRef} className="relative z-10 mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary font-bold">Kết Luận</span>
        <h2 className="mt-6 font-[var(--font-playfair)] text-5xl md:text-7xl tracking-[0.03em] text-foreground font-bold leading-[1.15]">
          Ý NGHĨA & GIÁ TRỊ
        </h2>
      </div>

      <div ref={contentRef} className="relative z-10 space-y-16">
        {/* Summary with image */}
        <div className="animate-item grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video overflow-hidden border-2 border-primary">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWEOIQVSK68PinbFiuGUbU2yEX6v7a.png"
              alt="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <p className="font-mono text-xs text-primary tracking-wider">
                2/9/1945 - Ba Đình, Hà Nội
              </p>
            </div>
          </div>
          <blockquote className="font-[var(--font-playfair)] text-2xl md:text-3xl text-foreground leading-[1.5]">
            Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh không chỉ có giá trị lịch sử mà còn mang ý nghĩa thực tiễn sâu sắc trong công cuộc xây dựng và bảo vệ Tổ quốc hiện nay.
          </blockquote>
        </div>

        {/* Key takeaways - larger cards */}
        <div className="animate-item grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border-2 border-border p-8 hover:border-primary/50 transition-colors duration-300">
            <div className="w-14 h-14 bg-primary/15 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-sans font-bold text-xl text-foreground mb-4 leading-[1.4]">Kiểm soát quyền lực</h4>
            <p className="font-sans text-base text-muted-foreground leading-[1.9]">
              Xây dựng cơ chế kiểm soát quyền lực từ bên trong và bên ngoài, với sự tham gia của nhân dân.
            </p>
          </div>

          <div className="bg-card border-2 border-border p-8 hover:border-primary/50 transition-colors duration-300">
            <div className="w-14 h-14 bg-primary/15 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-sans font-bold text-xl text-foreground mb-4 leading-[1.4]">Nhận diện tiêu cực</h4>
            <p className="font-sans text-base text-muted-foreground leading-[1.9]">
              Hiểu rõ các biểu hiện tiêu cực và nguyên nhân để có biện pháp phòng, chống hiệu quả.
            </p>
          </div>

          <div className="bg-card border-2 border-border p-8 hover:border-primary/50 transition-colors duration-300">
            <div className="w-14 h-14 bg-primary/15 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h4 className="font-sans font-bold text-xl text-foreground mb-4 leading-[1.4]">Hành động cụ thể</h4>
            <p className="font-sans text-base text-muted-foreground leading-[1.9]">
              Áp dụng các biện pháp xây dựng nhà nước của dân, do dân, vì dân theo tư tưởng Hồ Chí Minh.
            </p>
          </div>
        </div>

        {/* Final quote - larger and more prominent */}
        <div className="animate-item bg-primary text-primary-foreground p-10 md:p-16">
          <div className="flex items-start gap-6">
            <svg className="w-16 h-16 text-primary-foreground/30 shrink-0" viewBox="0 0 100 100">
              <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
            </svg>
            <div>
              <blockquote className="font-[var(--font-playfair)] text-2xl md:text-4xl italic leading-[1.4]">
                {'"'}Cán bộ là cái gốc của mọi công việc. Vì vậy, huấn luyện cán bộ là công việc gốc của Đảng{'"'}
              </blockquote>
              <cite className="mt-6 block font-mono text-sm uppercase tracking-[0.25em] not-italic opacity-80 font-bold">
                — Chủ tịch Hồ Chí Minh
              </cite>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
