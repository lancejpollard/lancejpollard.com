/** @type {import('next').NextConfig} */
const nextConfig = {
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
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false }
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}

export default nextConfig
