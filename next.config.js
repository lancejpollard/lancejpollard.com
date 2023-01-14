/** @type {import('next').NextConfig} */
import withMDXPlugin from '@next/mdx'

const withMDX = withMDXPlugin()

const nextConfig = withMDX({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lancejpollard.com'],
  },
  pageExtensions: ['mdx', 'md', 'tsx', 'ts'],
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
})

export default nextConfig
