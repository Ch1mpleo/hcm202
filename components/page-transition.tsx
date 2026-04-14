"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const curtainRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const curtain = curtainRef.current
    const content = contentRef.current
    if (!curtain || !content) return

    const tl = gsap.timeline()

    gsap.set(curtain, { x: "-100%", display: "flex" })
    gsap.set(content, { opacity: 0 })

    tl
      .to(curtain, { x: "0%", duration: 0.5, ease: "power3.inOut" })
      .to({}, { duration: 0.25 })
      .to(content, { opacity: 1, duration: 0.2, ease: "power2.out" }, "-=0.1")
      .to(curtain, { x: "100%", duration: 0.55, ease: "power3.inOut" }, "-=0.1")
      .set(curtain, { display: "none" })

    return () => { tl.kill() }
  }, [])

  return (
    <>
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[9999] hidden items-center justify-center pointer-events-none"
        style={{ background: "oklch(0.42 0.19 27)" }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-6 text-center px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nPHUcZG0NFWlUSiWMSB1CEAUZDFGBW.png"
            alt="Quoc huy Viet Nam"
            className="w-24 h-24 object-contain drop-shadow-xl"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-white/60 mb-2">
              {"Bước vào"}
            </p>
            <p
              className="font-bold uppercase tracking-[0.15em] text-white"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem, 4vw, 2rem)" }}
            >
              {"Phiên Tòa Liêm Chính"}
            </p>
          </div>
        </div>
      </div>

      <div ref={contentRef}>
        {children}
      </div>
    </>
  )
}
