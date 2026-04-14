"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import {
  UserX,
  Globe,
  Gavel,
  Swords,
  Medal,
  Heart,
  FileText,
  TrendingUp,
  ChevronRight,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const causes = {
  subjective: {
    title: "Nguyên nhân chủ quan",
    icon: UserX,
    items: [
      "Bắt nguồn từ căn \"bệnh mẹ\" là chủ nghĩa cá nhân",
      "Thiếu tu dưỡng, rèn luyện của bản thân cán bộ",
    ],
  },
  objective: {
    title: "Nguyên nhân khách quan",
    icon: Globe,
    items: [
      "Công tác cán bộ của Đảng và Nhà nước chưa tốt",
      "Tổ chức, vận hành và phối hợp chưa khoa học",
      "Trình độ phát triển còn thấp của đời sống xã hội",
      "Tàn dư của chính sách thực dân, phong kiến",
      "Âm mưu chống phá của các lực lượng phản động",
    ],
  },
}

const solutions = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Phát huy dân chủ trong xã hội",
    description: "Nâng cao trình độ dân trí về dân chủ, thực hành dân chủ rộng rãi để nhân dân thực hiện quyền làm chủ. Đây là giải pháp căn bản và có ý nghĩa lâu dài.",
  },
  {
    number: "02",
    icon: Gavel,
    title: "Siết chặt kỷ luật Đảng và Pháp luật",
    description: "Pháp luật phải nghiêm minh, công tác kiểm tra phải thường xuyên. Thẳng tay trừng trị những kẻ thoái hóa, biến chất.",
  },
  {
    number: "03",
    icon: Swords,
    title: "Kết hợp \"Xây\" và \"Chống\"",
    description: "Xử phạt cần nghiêm minh, đúng người đúng tội. Coi trọng giáo dục đạo đức cách mạng, khơi dậy lương tâm trong mỗi con người.",
  },
  {
    number: "04",
    icon: Medal,
    title: "Cán bộ phải nêu gương",
    description: "Cán bộ phải đi trước làm gương cho quần chúng. Chức vụ càng cao, trách nhiệm nêu gương càng lớn.",
  },
  {
    number: "05",
    icon: Heart,
    title: "Huy động sức mạnh yêu nước",
    description: "Biến cuộc chiến chống tiêu cực thành \"cuộc chiến\" của toàn dân dựa trên lòng tự hào và tự tôn dân tộc.",
  },
]

const regulations = [
  { code: "131-QĐ/TW", date: "27/10/2023", content: "Kiểm soát quyền lực, phòng, chống tham nhũng trong công tác kiểm tra, giám sát" },
  { code: "132-QĐ/TW", date: "27/10/2023", content: "Kiểm soát quyền lực trong hoạt động điều tra, truy tố, xét xử" },
  { code: "144-QĐ/TW", date: "09/5/2024", content: "Chuẩn mực đạo đức cách mạng của cán bộ, đảng viên trong giai đoạn mới" },
  { code: "114-QĐ/TW", date: "11/7/2023", content: "Kiểm soát quyền lực và phòng, chống tham nhũng trong công tác cán bộ" },
]

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      })
      const elements = contentRef.current?.querySelectorAll(".animate-item")
      elements?.forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="phan3" className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 bg-secondary/30">
      <div className="absolute top-0 right-0 w-64 h-64 overflow-hidden opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
        </svg>
      </div>

      <div ref={headerRef} className="mb-14 relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary font-bold">Phần 3 & 4</span>
        <h2 className="mt-4 font-[var(--font-playfair)] text-5xl md:text-7xl tracking-[0.03em] text-foreground font-bold leading-[1.15]">
          NGUYÊN NHÂN & BIỆN PHÁP
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base text-muted-foreground leading-relaxed">
          Hiểu rõ nguyên nhân để tìm ra biện pháp xây dựng Nhà nước trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh.
        </p>
      </div>

      <div ref={contentRef} className="space-y-16 relative z-10">
        {/* Part 3 — Causes */}
        <div className="animate-item">
          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
              <UserX className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
            </div>
            <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-foreground tracking-wide leading-snug">
              NGUYÊN NHÂN CỦA CÁC BIỂU HIỆN TIÊU CỰC
            </h3>
          </div>

          {/* Image banner — full width, above cause cards */}
          <div className="animate-item relative w-full mb-6 overflow-hidden border-2 border-border bg-stone-100">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ExW4c6P1iZnIy1HtSn3Dxfq0Yoh6im.png"
              alt="Lãnh đạo Chính phủ gặp gỡ cán bộ lão thành"
              className="w-full h-auto block"
            />
            <div className="absolute bottom-0 right-0 p-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50 bg-background/70 px-2 py-1">
                Gặp gỡ, lắng nghe cán bộ lão thành
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Subjective */}
              <div className="animate-item bg-card border-2 border-border p-6 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-2.5 mb-4">
                  <UserX className="w-4.5 h-4.5 text-primary" strokeWidth={2} />
                  <h4 className="font-sans font-bold text-sm text-primary uppercase tracking-wider">
                    {causes.subjective.title}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {causes.subjective.items.map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-muted-foreground leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Objective */}
              <div className="animate-item bg-card border-2 border-border p-6 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-2.5 mb-4">
                  <Globe className="w-4.5 h-4.5 text-primary" strokeWidth={2} />
                  <h4 className="font-sans font-bold text-sm text-primary uppercase tracking-wider">
                    {causes.objective.title}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {causes.objective.items.map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-muted-foreground leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
          </div>

          <p className="animate-item mt-7 font-sans text-sm text-muted-foreground italic bg-primary/10 p-5 border-l-4 border-primary leading-relaxed">
            Các nguyên nhân này không tồn tại biệt lập mà có sự kết hợp với nhau. Nếu không có biện pháp phòng, chống và chính sách bảo vệ cán bộ hiệu quả thì nguy cơ mất cán bộ là rất lớn.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-border" />
          <svg className="w-8 h-8 text-primary/40" viewBox="0 0 100 100">
            <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
          </svg>
          <div className="flex-1 h-[2px] bg-border" />
        </div>

        {/* Part 4 — Solutions */}
        <div className="animate-item">
          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
              <Gavel className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
            </div>
            <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-foreground tracking-wide leading-snug">
              CÁC BIỆN PHÁP XÂY DỰNG NHÀ NƯỚC TRONG SẠCH
            </h3>
          </div>

          {/* Banner image */}
          <div className="animate-item relative w-full h-52 mb-9 overflow-hidden border-2 border-primary">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QY9xt0lHE4dSPYy8asrSptBJWyELG1.png"
              alt="Nhân dân các dân tộc Việt Nam đoàn kết"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/40 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8">
              <div className="max-w-md">
                <h4 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-primary-foreground leading-snug">
                  Đoàn kết toàn dân
                </h4>
                <p className="mt-2 font-sans text-sm text-primary-foreground/90 leading-relaxed">
                  Xây dựng nhà nước trong sạch là trách nhiệm của toàn Đảng, toàn dân, toàn quân
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="animate-item group flex gap-5 items-start p-5 bg-card border-2 border-border hover:border-primary transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <solution.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="font-mono text-xs text-primary font-bold">{solution.number}</span>
                    <h4 className="font-[var(--font-playfair)] text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                      <HighlightText parallaxSpeed={0.3}>{solution.title}</HighlightText>
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulations */}
        <div className="animate-item">
          <h4 className="font-sans font-bold text-base text-foreground mb-5 flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary" strokeWidth={2} />
            Liên hệ thực tiễn — Các Quy định của Bộ Chính trị
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regulations.map((reg, idx) => (
              <div key={idx} className="bg-secondary/60 border-2 border-border p-5 hover:border-primary/50 transition-colors duration-200">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono text-xs text-primary font-bold">{reg.code}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">({reg.date})</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{reg.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="animate-item grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-primary/10 border-2 border-primary p-7 flex items-center gap-5">
            <TrendingUp className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <span className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-primary leading-none">130</span>
              <p className="mt-2 font-sans text-sm text-foreground leading-relaxed">
                người đứng đầu và cấp phó bị kỷ luật vì để xảy ra tham nhũng, tiêu cực năm 2024
              </p>
            </div>
          </div>
          <div className="bg-primary/10 border-2 border-primary p-7 flex items-center gap-5">
            <Gavel className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <span className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-primary leading-none">22.000+</span>
              <p className="mt-2 font-sans text-sm text-foreground leading-relaxed">
                tỷ đồng thu hồi tài sản từ án tham nhũng và kinh tế năm 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
