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
  const footerRef = useRef<HTMLDivElement>(null)

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

      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
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
      className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PXwjbdL49qB3CVn5ET9hsfxgqxnKh2.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Section header */}
      <div ref={headerRef} className="relative z-10 mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-medium">Kết Luận</span>
        <h2 className="mt-4 font-[var(--font-playfair)] text-4xl md:text-6xl tracking-tight text-foreground font-bold">
          Ý NGHĨA & GIÁ TRỊ
        </h2>
      </div>

      <div ref={contentRef} className="relative z-10 space-y-12">
        {/* Summary quote */}
        <div className="animate-item max-w-4xl">
          <blockquote className="font-[var(--font-playfair)] text-2xl md:text-3xl text-foreground leading-relaxed">
            Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh không chỉ có giá trị lịch sử mà còn mang ý nghĩa thực tiễn sâu sắc trong công cuộc xây dựng và bảo vệ Tổ quốc hiện nay.
          </blockquote>
        </div>

        {/* Key takeaways */}
        <div className="animate-item grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border/50 p-6">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-sans font-semibold text-foreground mb-2">Kiểm soát quyền lực</h4>
            <p className="font-sans text-sm text-muted-foreground">
              Xây dựng cơ chế kiểm soát quyền lực từ bên trong và bên ngoài, với sự tham gia của nhân dân.
            </p>
          </div>

          <div className="bg-card border border-border/50 p-6">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-sans font-semibold text-foreground mb-2">Nhận diện tiêu cực</h4>
            <p className="font-sans text-sm text-muted-foreground">
              Hiểu rõ các biểu hiện tiêu cực và nguyên nhân để có biện pháp phòng, chống hiệu quả.
            </p>
          </div>

          <div className="bg-card border border-border/50 p-6">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h4 className="font-sans font-semibold text-foreground mb-2">Hành động cụ thể</h4>
            <p className="font-sans text-sm text-muted-foreground">
              Áp dụng các biện pháp xây dựng nhà nước của dân, do dân, vì dân theo tư tưởng Hồ Chí Minh.
            </p>
          </div>
        </div>

        {/* Course info */}
        <div className="animate-item grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Môn học</h4>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-foreground">HCM202</li>
              <li className="font-sans text-sm text-foreground">Tư tưởng Hồ Chí Minh</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Chủ đề</h4>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-foreground">Xây dựng Nhà nước</li>
              <li className="font-sans text-sm text-foreground">Trong sạch, vững mạnh</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Nội dung</h4>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-foreground">4 Phần chính</li>
              <li className="font-sans text-sm text-foreground">5 Biện pháp</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Năm học</h4>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-foreground">2024 - 2025</li>
              <li className="font-sans text-sm text-foreground">Học kỳ II</li>
            </ul>
          </div>
        </div>

        {/* Final quote */}
        <div className="animate-item bg-primary text-primary-foreground p-8 md:p-12">
          <div className="flex items-start gap-4">
            <svg className="w-12 h-12 text-primary-foreground/30 shrink-0" viewBox="0 0 100 100">
              <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
            </svg>
            <div>
              <blockquote className="font-[var(--font-playfair)] text-xl md:text-2xl italic leading-relaxed">
                {'"'}Cán bộ là cái gốc của mọi công việc. Vì vậy, huấn luyện cán bộ là công việc gốc của Đảng{'"'}
              </blockquote>
              <cite className="mt-4 block font-mono text-xs uppercase tracking-wider not-italic opacity-80">
                — Chủ tịch Hồ Chí Minh
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        ref={footerRef}
        className="relative z-10 mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          HCM202 - Tư tưởng Hồ Chí Minh
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          Xây dựng với tâm huyết. Học tập với trách nhiệm.
        </p>
      </div>
    </section>
  )
}
