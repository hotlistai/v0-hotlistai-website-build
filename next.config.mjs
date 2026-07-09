/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/deployments", destination: "/follow-up-leak-audit", permanent: true },
      { source: "/lab", destination: "/resources", permanent: true },
      { source: "/labs", destination: "/resources", permanent: true },
      { source: "/hotlist-funnels", destination: "/follow-up-leak-audit", permanent: true },
      { source: "/developers", destination: "/resources", permanent: true },
      { source: "/press", destination: "/company", permanent: true },
      { source: "/ethos", destination: "/company", permanent: true },
    ]
  },
 
}

export default nextConfig
