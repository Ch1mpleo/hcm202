import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, IBM_Plex_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "")

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const playfairDisplay = Playfair_Display({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"], 
  variable: "--font-playfair" 
})

export const metadata: Metadata = {
  title: "HCM202 - Xây Dựng Nhà Nước Trong Sạch, Vững Mạnh",
  description:
    "Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh. Kiểm soát quyền lực, phòng chống tiêu cực, và các biện pháp xây dựng.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: `${basePath}/icon-light-32x32.png`,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: `${basePath}/icon-dark-32x32.png`,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: `${basePath}/icon.svg`,
        type: "image/svg+xml",
      },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body
        className={`${beVietnamPro.variable} ${playfairDisplay.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
