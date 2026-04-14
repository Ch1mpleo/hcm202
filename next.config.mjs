/** @type {import('next').NextConfig} */
function normalizeBasePath(value) {
  if (!value) return ""
  let v = String(value).trim()
  if (!v || v === "/") return ""
  if (!v.startsWith("/")) v = `/${v}`
  v = v.replace(/\/+$/, "")
  return v
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH)

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
