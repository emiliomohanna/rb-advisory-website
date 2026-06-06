/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/', destination: '/site.html' }]
  }
}
module.exports = nextConfig
