"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const part1Content = {
  title: "KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC",
  intro: "Quyền lực nhà nước là do nhân dân ủy thác. Khi nắm giữ quyền lực, các cơ quan hoặc cán bộ dễ có xu hướng lạm quyền, quên đi nhiệm vụ phục vụ nhân dân.",
  sections: [
    {
      title: "Sự tất yếu của việc kiểm soát quyền lực",
      points: [
        { label: "Bản chất", content: "Quyền lực nhà nước là do nhân dân ủy thác" },
        { label: "Nguy cơ", content: "Khi nắm giữ quyền lực, cán bộ dễ có xu hướng lạm quyền, \"cậy thế, cậy quyền\"" },
        { label: "Mục đích", content: "Giữ vững bản chất của Nhà nước, phòng chống sự tha hóa, biến chất" },
      ],
    },
    {
      title: "Các hình thức kiểm soát quyền lực",
      subsections: [
        {
          name: "Kiểm soát bên trong (của Nhà nước)",
          points: [
            "Tổ chức bộ máy nhà nước và phân công, phân nhiệm giữa các cơ quan",
            "Nghị viện nhân dân có quyền \"Kiểm soát và phê bình Chính phủ\"",
            "Áp dụng chế độ bỏ phiếu tín nhiệm",
          ],
        },
        {
          name: "Kiểm soát bên ngoài (của nhân dân)",
          points: [
            "Nhân dân là chủ thể tối cao của quyền lực",
            "\"Phải tổ chức sự kiểm soát, mà muốn kiểm soát đúng thì cũng phải có quần chúng giúp\"",
            "Đảng và Nhà nước phải dựa hẳn vào quần chúng",
          ],
        },
      ],
    },
  ],
}

const part2Content = {
  title: "PHÒNG, CHỐNG TIÊU CỰC TRONG NHÀ NƯỚC",
  intro: "Hồ Chí Minh đặc biệt nhắc nhở phải đề phòng và khắc phục những căn bệnh nguy hiểm trong bộ máy nhà nước.",
  diseases: [
    {
      name: "Đặc quyền, đặc lợi",
      description: "Tư tưởng \"cửa quyền\", hách dịch với dân, lạm dụng chức quyền để vơ vét tiền của cho cá nhân. Đây là biểu hiện của chủ nghĩa cá nhân.",
      icon: "shield",
    },
    {
      name: "\"Giặc nội xâm\": Tham ô, lãng phí, quan liêu",
      description: "Tham ô là lấy của công dùng vào việc tư. Lãng phí sức lao động, thời gian và tiền của. Quan liêu là \"bệnh gốc\" sinh ra tham ô, lãng phí.",
      icon: "alert",
    },
    {
      name: "Các tiêu cực khác",
      description: "Tư túng, chia rẽ, kiêu ngạo: kéo bè kéo cánh, đưa người thân cận không có tài năng vào chức vụ. Cậy thế: ỷ vào vị trí để coi thường kỷ luật.",
      icon: "users",
    },
  ],
}

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

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
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const elements = contentRef.current?.querySelectorAll(".animate-item")
      if (elements && elements.length > 0) {
        gsap.fromTo(elements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="phan1" className="relative py-28 md:py-36 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Background image - Declaration reading */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] overflow-hidden opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PXwjbdL49qB3CVn5ET9hsfxgqxnKh2.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background" />
      </div>

      {/* Section header */}
      <div ref={headerRef} className="mb-20 relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary font-bold">Phần 1 & 2</span>
        <h2 className="mt-6 font-[var(--font-playfair)] text-5xl md:text-7xl tracking-[0.03em] text-foreground font-bold leading-[1.15]">
          KIỂM SOÁT & PHÒNG CHỐNG
        </h2>
        <p className="mt-6 max-w-2xl font-sans text-lg text-muted-foreground leading-[1.9] tracking-wide">
          Nền tảng của việc xây dựng Nhà nước trong sạch bắt đầu từ kiểm soát quyền lực và nhận diện các tiêu cực cần phòng chống.
        </p>
      </div>

      <div ref={contentRef} className="space-y-20 relative z-10">
        {/* Part 1 with image */}
        <div className="animate-item grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-mono text-xl font-bold">01</span>
              </div>
              <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground tracking-[0.02em] leading-[1.2]">
                {part1Content.title}
              </h3>
            </div>

            <p className="mb-10 font-sans text-lg text-muted-foreground leading-[1.9] tracking-wide max-w-3xl">
              {part1Content.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {part1Content.sections.map((section, idx) => (
                <div key={idx} className="animate-item bg-secondary/50 border-2 border-border p-8 hover:border-primary/50 transition-colors duration-300">
                  <h4 className="font-sans font-bold text-lg text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-[3px] bg-primary" />
                    {section.title}
                  </h4>
                  
                  {section.points && (
                    <ul className="space-y-4">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="font-mono text-sm text-primary font-bold shrink-0 mt-0.5">{point.label}:</span>
                          <span className="font-sans text-base text-muted-foreground leading-[1.8]">{point.content}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-8">
                      {section.subsections.map((sub, i) => (
                        <div key={i}>
                          <h5 className="font-sans text-base font-bold text-primary mb-4">{sub.name}</h5>
                          <ul className="space-y-3">
                            {sub.points.map((point, j) => (
                              <li key={j} className="flex gap-3 font-sans text-base text-muted-foreground leading-[1.8]">
                                <span className="text-primary font-bold">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side image */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] img-frame">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wgvrHbtnosOdIWF71Gfg5hNw1ZgbyL.png"
                  alt="Hội nghị Ban Chấp hành Trung ương Đảng"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-mono text-xs text-muted-foreground text-center tracking-wide">
                Hội nghị Ban Chấp hành Trung ương Đảng
              </p>
            </div>
          </div>
        </div>

        {/* Divider with image */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-[2px] bg-border" />
          <div className="w-16 h-16 relative">
            <svg className="w-full h-full text-primary/40" viewBox="0 0 100 100">
              <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
            </svg>
          </div>
          <div className="flex-1 h-[2px] bg-border" />
        </div>

        {/* Part 2 with image */}
        <div className="animate-item">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-16 h-16 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-mono text-xl font-bold">02</span>
            </div>
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground tracking-[0.02em] leading-[1.2]">
              {part2Content.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left image */}
            <div className="animate-item relative">
              <div className="relative aspect-video overflow-hidden border-2 border-primary">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tgfmSZvOHPllh0WcMuIjEeib7d9MSh.png"
                  alt="Cuộc họp Chính phủ"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-xs text-primary-foreground bg-primary/90 px-4 py-2 inline-block">
                    Cuộc họp Chính phủ về phòng chống tham nhũng
                  </p>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div>
              <p className="mb-8 font-sans text-lg text-muted-foreground leading-[1.9] tracking-wide">
                {part2Content.intro}
              </p>

              <div className="space-y-6">
                {part2Content.diseases.map((disease, idx) => (
                  <DiseaseCard key={idx} disease={disease} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote highlight - larger */}
        <div className="animate-item bg-primary/10 border-l-4 border-primary p-10 max-w-4xl">
          <blockquote className="font-[var(--font-playfair)] text-2xl md:text-3xl italic text-foreground leading-[1.5]">
            {'"'}Muốn trừ sạch tham ô, lãng phí thì trước hết phải tẩy sạch bệnh quan liêu{'"'}
          </blockquote>
          <cite className="mt-6 block font-mono text-sm text-primary uppercase tracking-[0.2em] not-italic font-bold">
            — Hồ Chí Minh
          </cite>
        </div>
      </div>
    </section>
  )
}

function DiseaseCard({
  disease,
  index,
}: {
  disease: { name: string; description: string; icon: string }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={cn(
        "animate-item group relative border-2 border-border p-8 transition-all duration-300",
        "hover:border-primary hover:bg-primary/5",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className={cn(
        "w-14 h-14 mb-6 flex items-center justify-center transition-colors duration-300",
        isHovered ? "bg-primary" : "bg-secondary"
      )}>
        {disease.icon === "shield" && (
          <svg className={cn("w-7 h-7", isHovered ? "text-primary-foreground" : "text-primary")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}
        {disease.icon === "alert" && (
          <svg className={cn("w-7 h-7", isHovered ? "text-primary-foreground" : "text-primary")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
        {disease.icon === "users" && (
          <svg className={cn("w-7 h-7", isHovered ? "text-primary-foreground" : "text-primary")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>

      <h4 className="font-sans font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-[1.5]">
        {disease.name}
      </h4>

      <p className="font-sans text-base text-muted-foreground leading-[1.9] tracking-wide">
        {disease.description}
      </p>

      {/* Index */}
      <span className="absolute bottom-6 right-6 font-mono text-sm text-muted-foreground/40 group-hover:text-primary font-bold transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  )
}
