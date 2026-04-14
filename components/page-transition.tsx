"use client"

import { createContext, useContext, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import gsap from "gsap"

// Context so any nested button can trigger the exit wipe
type ExitFn = (href: string) => void
const ExitContext = createContext<ExitFn>(() => {})

export function usePageExit() {
  return useContext(ExitContext)
}

const CURTAIN_LABEL_ENTER = "Bước vào"
const CURTAIN_LABEL_EXIT  = "Trở về"
const CURTAIN_TITLE       = "Phiên Tòa Liêm Chính"
const EMBLEM_SRC          = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nPHUcZG0NFWlUSiWMSB1CEAUZDFGBW.png"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const curtainRef  = useRef<HTMLDivElement>(null)
  const labelRef    = useRef<HTMLParagraphElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)
  const router      = useRouter()

  // Entry animation on mount
  useEffect(() => {
    const curtain = curtainRef.current
    const content = contentRef.current
    if (!curtain || !content) return

    if (labelRef.current) labelRef.current.textContent = CURTAIN_LABEL_ENTER

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

  // Exit animation triggered by children
  const triggerExit: ExitFn = (href) => {
    const curtain = curtainRef.current
    if (!curtain) { router.push(href); return }

    if (labelRef.current) labelRef.current.textContent = CURTAIN_LABEL_EXIT

    gsap.set(curtain, { display: "flex", x: "-100%" })
    gsap.to(curtain, {
      x: "0%",
      duration: 0.48,
      ease: "power3.inOut",
      onComplete: () => router.push(href),
    })
  }

  return (
    <ExitContext.Provider value={triggerExit}>
      {/* Shared curtain used for both entry and exit */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[9999] hidden items-center justify-center pointer-events-none"
        style={{ background: "oklch(0.42 0.19 27)" }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-6 text-center px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={EMBLEM_SRC}
            alt=""
            className="w-24 h-24 object-contain drop-shadow-xl"
          />
          <div>
            <p ref={labelRef} className="font-mono text-xs uppercase tracking-[0.5em] text-white/60 mb-2" />
            <p
              className="font-bold uppercase tracking-[0.15em] text-white"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem, 4vw, 2rem)" }}
            >
              {CURTAIN_TITLE}
            </p>
          </div>
        </div>
      </div>

      <div ref={contentRef}>
        {children}
      </div>
    </ExitContext.Provider>
  )
}
