"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Crown, AlertOctagon, Users, CheckCircle2, Scale, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const part1Content = {
  title: "KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC",
  intro: "Quyền lực nhà nước là do nhân dân ủy thác. Khi nắm giữ quyền lực, các cơ quan hoặc cán bộ dễ có xu hướng lạm quyền, quên đi nhiệm vụ phục vụ nhân dân.",
  sections: [
    {
      title: "Sự tất yếu của việc kiểm soát quyền lực",
      points: [
        { label: "Bản chất", content: "Quyền lực nhà nước là do nhân dân ủy thác" },
        { label: "Nguy cơ", content: "Cán bộ dễ có xu hướng lạm quyền, \"cậy thế, cậy quyền\"" },
        { label: "Mục đích", content: "Giữ vững bản chất Nhà nước, phòng chống sự tha hóa, biến chất" },
      ],
    },
    {
      title: "Các hình thức kiểm soát quyền lực",
      subsections: [
        {
          name: "Bên trong (Nhà nước)",
          points: [
            "Phân công, phân nhiệm giữa các cơ quan",
            "Nghị viện nhân dân có quyền kiểm soát và phê bình Chính phủ",
            "Áp dụng chế độ bỏ phiếu tín nhiệm",
          ],
        },
        {
          name: "Bên ngoài (Nhân dân)",
          points: [
            "Nhân dân là chủ thể tối cao của quyền lực",
            "\"Muốn kiểm soát đúng thì phải có quần chúng giúp\"",
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
      description: "Tư tưởng \"cửa quyền\", hách dịch với dân, lạm dụng chức quyền để vơ vét tài sản cá nhân. Biểu hiện của chủ nghĩa cá nhân.",
      Icon: Crown,
    },
    {
      name: "\"Giặc nội xâm\": Tham ô, lãng phí, quan liêu",
      description: "Tham ô là lấy của công dùng vào việc tư. Quan liêu là \"bệnh gốc\" sinh ra tham ô, lãng phí. Phải diệt trừ triệt để.",
      Icon: AlertOctagon,
    },
    {
      name: "Tư túng, chia rẽ, kiêu ngạo",
      description: "Kéo bè kéo cánh, đưa người thân cận không có tài năng vào chức vụ. Cậy thế: ỷ vào vị trí để coi thường kỷ luật.",
      Icon: Users,
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
      gsap.fromTo(headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        },
      )
      const elements = contentRef.current?.querySelectorAll(".animate-item")
      if (elements && elements.length > 0) {
        gsap.fromTo(elements,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="phan1" className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Background image */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] overflow-hidden opacity-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PXwjbdL49qB3CVn5ET9hsfxgqxnKh2.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/60 to-background" />
      </div>

      {/* Section header */}
      <div ref={headerRef} className="mb-14 relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary font-bold">Phần 1 & 2</span>
        <h2 className="mt-4 font-[var(--font-playfair)] text-5xl md:text-7xl tracking-[0.03em] text-foreground font-bold leading-[1.15]">
          KIỂM SOÁT & PHÒNG CHỐNG
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base text-muted-foreground leading-relaxed">
          Nền tảng của việc xây dựng Nhà nước trong sạch bắt đầu từ kiểm soát quyền lực và nhận diện các tiêu cực cần phòng chống.
        </p>
      </div>

      <div ref={contentRef} className="space-y-16 relative z-10">
        {/* Part 1 */}
        <div className="animate-item grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-foreground tracking-wide leading-snug">
                {part1Content.title}
              </h3>
            </div>

            <p className="mb-7 font-sans text-base text-muted-foreground leading-relaxed max-w-3xl">
              {part1Content.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {part1Content.sections.map((section, idx) => (
                <div key={idx} className="animate-item bg-secondary/50 border-2 border-border p-6 hover:border-primary/50 transition-colors duration-300">
                  <h4 className="font-sans font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-primary shrink-0" />
                    {section.title}
                  </h4>

                  {section.points && (
                    <ul className="space-y-2.5">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex gap-2.5 text-sm">
                          <span className="font-mono text-primary font-bold shrink-0 mt-0.5">{point.label}:</span>
                          <span className="font-sans text-muted-foreground leading-relaxed">{point.content}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-5">
                      {section.subsections.map((sub, i) => (
                        <div key={i}>
                          <h5 className="font-sans text-xs font-bold text-primary mb-2.5 uppercase tracking-wider">{sub.name}</h5>
                          <ul className="space-y-2">
                            {sub.points.map((point, j) => (
                              <li key={j} className="flex gap-2 font-sans text-sm text-muted-foreground leading-relaxed">
                                <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
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
              <p className="mt-3 font-mono text-[10px] text-muted-foreground text-center tracking-wide uppercase">
                Hội nghị BCH Trung ương Đảng
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-border" />
          <svg className="w-8 h-8 text-primary/40" viewBox="0 0 100 100">
            <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
          </svg>
          <div className="flex-1 h-[2px] bg-border" />
        </div>

        {/* Part 2 */}
        <div className="animate-item">
          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
              <AlertOctagon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
            </div>
            <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-foreground tracking-wide leading-snug">
              {part2Content.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left image */}
            <div className="animate-item relative">
              <div className="relative aspect-video overflow-hidden border-2 border-primary">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tgfmSZvOHPllh0WcMuIjEeib7d9MSh.png"
                  alt="Cuộc họp Chính phủ"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="font-mono text-[10px] text-primary-foreground bg-primary/90 px-3 py-1.5 uppercase tracking-wider">
                    Cuộc họp Chính phủ về phòng chống tham nhũng
                  </p>
                </div>
              </div>
            </div>

            {/* Right diseases */}
            <div className="space-y-4">
              <p className="mb-5 font-sans text-base text-muted-foreground leading-relaxed">
                {part2Content.intro}
              </p>
              {part2Content.diseases.map((disease, idx) => (
                <DiseaseCard key={idx} disease={disease} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="animate-item bg-primary/10 border-l-4 border-primary p-7 max-w-3xl">
          <blockquote className="font-[var(--font-playfair)] text-xl md:text-2xl italic text-foreground leading-snug">
            {'"'}Muốn trừ sạch tham ô, lãng phí thì trước hết phải tẩy sạch bệnh quan liêu{'"'}
          </blockquote>
          <cite className="mt-4 block font-mono text-xs text-primary uppercase tracking-[0.2em] not-italic font-bold">
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
  disease: { name: string; description: string; Icon: React.ElementType }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const { Icon } = disease

  return (
    <article
      className={cn(
        "animate-item group relative border-2 border-border p-5 transition-all duration-300 flex gap-4",
        "hover:border-primary hover:bg-primary/5",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "w-10 h-10 shrink-0 flex items-center justify-center transition-colors duration-300",
        isHovered ? "bg-primary" : "bg-secondary"
      )}>
        <Icon className={cn("w-5 h-5", isHovered ? "text-primary-foreground" : "text-primary")} strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-sans font-bold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300 leading-snug">
          {disease.name}
        </h4>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          {disease.description}
        </p>
      </div>
      <span className="absolute bottom-3 right-3 font-mono text-xs text-muted-foreground/30 group-hover:text-primary/50 font-bold transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  )
}
