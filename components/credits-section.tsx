"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  { name: "Hồ Trương Thanh Hòa", role: "Trưởng nhóm", id: "SE161039" },
  { name: "Đỗ Hữu Việt Anh", role: "Thành viên", id: "SE172240" },
  { name: "Nguyễn Nhật Trường", role: "Thành viên", id: "SE183428" },
  { name: "Lê Quang Long", role: "Thành viên", id: "SE182594" },
]

const tools = [
  "v0 by Vercel — Thiết kế giao diện",
  "Next.js — Nền tảng web",
  "Tailwind CSS — Định dạng giao diện",
  "GSAP — Hiệu ứng chuyển động",
]

export function CreditsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const colsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          x: -80,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      }
      if (colsRef.current) {
        const cols = colsRef.current.querySelectorAll(".credit-col")
        gsap.from(cols, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: colsRef.current,
            start: "top 88%",
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
      id="credits"
      className="relative bg-[#0e0e0e] text-white py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-16"
    >
      {/* Top rule */}
      <div className="mb-12 border-t border-white/10" />

      {/* Label */}
      <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#c0541a] font-bold">
        06 / TÁC GIẢ VÀ GHI NHẬN
      </span>

      {/* Big title */}
      <h2
        ref={titleRef}
        className="mt-5 mb-20 font-mono text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-[0.04em] leading-[1.05] text-white"
      >
        TÁC GIẢ VÀ<br />GHI NHẬN
      </h2>

      {/* 4 columns */}
      <div ref={colsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

        {/* Col 1 — Research team */}
        <div className="credit-col">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 mb-8 font-bold">
            Nhóm nghiên cứu
          </h3>
          <ul className="space-y-6">
            {teamMembers.map((m) => (
              <li key={m.id}>
                <p className="font-mono text-base font-bold text-white leading-snug">{m.name}</p>
                <p className="font-mono text-xs text-white/45 mt-1">{m.role} / {m.id}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 — Institution */}
        <div className="credit-col">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 mb-8 font-bold">
            Cơ sở đào tạo
          </h3>
          <div className="space-y-2">
            <p className="font-mono text-base font-bold text-white leading-snug">Đại học FPT Phân Hiệu HCM</p>
            <p className="font-mono text-xs text-white/45 mt-3">Môn học: HCM202</p>
            <p className="font-mono text-xs text-white/45">Tư tưởng Hồ Chí Minh</p>
            <p className="font-mono text-xs text-white/45 mt-3">Năm học: 2024 – 2025</p>
            <p className="font-mono text-xs text-white/45">Học kỳ II</p>
          </div>
        </div>

        {/* Col 3 — Advisor */}
        <div className="credit-col">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 mb-8 font-bold">
            Giảng viên hướng dẫn
          </h3>
          <div className="space-y-2">
            <p className="font-mono text-base font-bold text-white leading-snug">TriLM32</p>
            <p className="font-mono text-xs text-white/45 mt-1">Giảng viên cố vấn</p>
          </div>
        </div>

        {/* Col 4 — Tools */}
        <div className="credit-col">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 mb-8 font-bold">
            Công cụ sử dụng
          </h3>
          <ul className="space-y-3">
            {tools.map((t) => (
              <li key={t} className="font-mono text-sm text-white/80 leading-snug">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom rule + footer line */}
      <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
          HCM202 — Tư tưởng Hồ Chí Minh © 2025
        </p>
        <p className="font-mono text-xs text-white/25 tracking-wide">
          Xây dựng với tâm huyết. Học tập với trách nhiệm.
        </p>
      </div>
    </section>
  )
}
