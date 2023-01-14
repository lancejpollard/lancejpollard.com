/** @type {import('next').NextConfig} */
import createMDXPlugin from '@next/mdx'

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
}

const withMDX = createMDXPlugin(mdxConfig)

const nextConfig = withMDX({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lancejpollard.com'],
  },
  pageExtensions: ['mdx', 'md', 'tsx', 'ts'],
  poweredByHeader: false,
  // reactStrictMode: true,
  trailingSlash: false,
})

export default nextConfig
