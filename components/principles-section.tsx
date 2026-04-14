"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const causes = {
  subjective: {
    title: "Nguyên nhân chủ quan",
    items: [
      "Bắt nguồn từ căn \"bệnh mẹ\" là chủ nghĩa cá nhân",
      "Thiếu tu dưỡng, rèn luyện của bản thân cán bộ",
    ],
  },
  objective: {
    title: "Nguyên nhân khách quan",
    items: [
      "Công tác cán bộ của Đảng và Nhà nước chưa tốt",
      "Tổ chức, vận hành và sự phối hợp chưa khoa học, hiệu quả",
      "Trình độ phát triển còn thấp của đời sống xã hội",
      "Tàn dư của chính sách phản động của chế độ thực dân, phong kiến",
      "Âm mưu chống phá của các lực lượng phản động",
    ],
  },
}

const solutions = [
  {
    number: "01",
    title: "Phát huy dân chủ trong xã hội",
    description: "Nâng cao trình độ dân trí về dân chủ, thực hành dân chủ rộng rãi để nhân dân thực hiện quyền làm chủ của mình. Đây là giải pháp căn bản và có ý nghĩa lâu dài.",
  },
  {
    number: "02",
    title: "Siết chặt kỷ luật Đảng và Pháp luật",
    description: "Pháp luật phải nghiêm minh, công tác kiểm tra phải thường xuyên. Thẳng tay trừng trị những kẻ thoái hóa, biến chất. \"Trăm điều phải có thần linh pháp quyền\".",
  },
  {
    number: "03",
    title: "Kết hợp \"Xây\" và \"Chống\"",
    description: "Xử phạt cần nghiêm minh, đúng người đúng tội. Coi trọng việc giáo dục đạo đức cách mạng, khơi dậy lương tâm trong mỗi con người. Làm cho cái tốt được phát huy, cái xấu mất dần.",
  },
  {
    number: "04",
    title: "Cán bộ phải nêu gương",
    description: "Cán bộ phải đi trước làm gương cho quần chúng. Chức vụ càng cao, trách nhiệm nêu gương càng lớn. Sự gương mẫu là mệnh lệnh không lời có sức thuyết phục nhất.",
  },
  {
    number: "05",
    title: "Huy động sức mạnh yêu nước",
    description: "Biến cuộc chiến chống tiêu cực thành \"cuộc chiến\" của toàn dân dựa trên lòng tự hào và tự tôn dân tộc. Mỗi người Việt Nam đều có trách nhiệm tu dưỡng đạo đức cách mạng.",
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

      const elements = contentRef.current?.querySelectorAll(".animate-item")
      elements?.forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="phan3" className="relative py-28 md:py-36 pl-6 md:pl-28 pr-6 md:pr-12 bg-secondary/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 overflow-hidden opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
        </svg>
      </div>

      {/* Section header */}
      <div ref={headerRef} className="mb-20 relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary font-bold">Phần 3 & 4</span>
        <h2 className="mt-6 font-[var(--font-playfair)] text-5xl md:text-7xl tracking-[0.03em] text-foreground font-bold leading-[1.15]">
          NGUYÊN NHÂN & BIỆN PHÁP
        </h2>
        <p className="mt-6 max-w-2xl font-sans text-lg text-muted-foreground leading-[1.9] tracking-wide">
          Hiểu rõ nguyên nhân để tìm ra biện pháp xây dựng Nhà nước trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh.
        </p>
      </div>

      <div ref={contentRef} className="space-y-20 relative z-10">
        {/* Part 3 - Causes with image */}
        <div className="animate-item">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-16 h-16 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-mono text-xl font-bold">03</span>
            </div>
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground tracking-[0.02em] leading-[1.2]">
              NGUYÊN NHÂN CỦA CÁC BIỂU HIỆN TIÊU CỰC
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Causes cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Subjective causes */}
              <div className="animate-item bg-card border-2 border-border p-8 hover:border-primary/50 transition-colors duration-300">
                <h4 className="font-sans font-bold text-lg text-primary mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {causes.subjective.title}
                </h4>
                <ul className="space-y-4">
                  {causes.subjective.items.map((item, i) => (
                    <li key={i} className="flex gap-4 font-sans text-base text-muted-foreground leading-[1.9]">
                      <span className="text-primary font-bold shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Objective causes */}
              <div className="animate-item bg-card border-2 border-border p-8 hover:border-primary/50 transition-colors duration-300">
                <h4 className="font-sans font-bold text-lg text-primary mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {causes.objective.title}
                </h4>
                <ul className="space-y-4">
                  {causes.objective.items.map((item, i) => (
                    <li key={i} className="flex gap-4 font-sans text-base text-muted-foreground leading-[1.9]">
                      <span className="text-primary font-bold shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side image */}
            <div className="hidden lg:block animate-item">
              <div className="relative aspect-[4/5] img-frame">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JTIwKRIUuI0na1iARxB4ECvCsEb7lr.png"
                  alt="Chân dung Chủ tịch Hồ Chí Minh"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          <p className="animate-item mt-10 font-sans text-lg text-muted-foreground italic bg-primary/10 p-6 border-l-4 border-primary leading-[1.9]">
            Các nguyên nhân này không tồn tại biệt lập mà có sự kết hợp với nhau. Nếu không có biện pháp phòng, chống và chính sách bảo vệ cán bộ hiệu quả thì nguy cơ mất cán bộ là rất lớn.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-[2px] bg-border" />
          <svg className="w-12 h-12 text-primary/40" viewBox="0 0 100 100">
            <polygon fill="currentColor" points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
          </svg>
          <div className="flex-1 h-[2px] bg-border" />
        </div>

        {/* Part 4 - Solutions with hero image */}
        <div className="animate-item">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-16 h-16 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-mono text-xl font-bold">04</span>
            </div>
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground tracking-[0.02em] leading-[1.2]">
              CÁC BIỆN PHÁP XÂY DỰNG NHÀ NƯỚC TRONG SẠCH
            </h3>
          </div>

          {/* Hero banner with people image */}
          <div className="animate-item relative w-full h-64 md:h-80 mb-12 overflow-hidden border-2 border-primary">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QY9xt0lHE4dSPYy8asrSptBJWyELG1.png"
              alt="Nhân dân các dân tộc Việt Nam đoàn kết"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-10">
              <div className="max-w-lg">
                <h4 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-primary-foreground leading-[1.3] tracking-wide">
                  Đoàn kết toàn dân
                </h4>
                <p className="mt-4 font-sans text-lg text-primary-foreground/90 leading-[1.8]">
                  Xây dựng nhà nước trong sạch là trách nhiệm của toàn Đảng, toàn dân, toàn quân
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="animate-item group flex gap-8 items-start p-8 bg-card border-2 border-border hover:border-primary transition-all duration-300">
                <div className="shrink-0 w-20 h-20 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <span className="font-mono text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {solution.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-[var(--font-playfair)] text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-[1.3]">
                    <HighlightText parallaxSpeed={0.3}>{solution.title}</HighlightText>
                  </h4>
                  <p className="mt-4 font-sans text-base text-muted-foreground leading-[1.9] tracking-wide">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulations reference */}
        <div className="animate-item">
          <h4 className="font-sans font-bold text-xl text-foreground mb-8 flex items-center gap-4">
            <span className="w-12 h-[3px] bg-primary" />
            Liên hệ thực tiễn - Các Quy định của Bộ Chính trị
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulations.map((reg, idx) => (
              <div key={idx} className="bg-secondary/60 border-2 border-border p-6 hover:border-primary/50 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm text-primary font-bold">{reg.code}</span>
                  <span className="font-mono text-xs text-muted-foreground">({reg.date})</span>
                </div>
                <p className="font-sans text-base text-muted-foreground leading-[1.8]">{reg.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results highlight - larger */}
        <div className="animate-item grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/15 border-2 border-primary p-10">
            <span className="font-[var(--font-playfair)] text-6xl md:text-7xl font-bold text-primary">130</span>
            <p className="mt-4 font-sans text-lg text-foreground leading-[1.8]">
              người đứng đầu và cấp phó bị kỷ luật để xảy ra tham nhũng, tiêu cực năm 2024
            </p>
          </div>
          <div className="bg-primary/15 border-2 border-primary p-10">
            <span className="font-[var(--font-playfair)] text-6xl md:text-7xl font-bold text-primary">22.000+</span>
            <p className="mt-4 font-sans text-lg text-foreground leading-[1.8]">
              tỷ đồng thu hồi tài sản từ án tham nhũng và kinh tế năm 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
