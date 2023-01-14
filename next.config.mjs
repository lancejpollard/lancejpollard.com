/** @type {import('next').NextConfig} */
import createMDXPlugin from '@next/mdx'
import rehypeRaw from 'rehype-raw'
import remarkMdx from 'remark-mdx'

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    rehypePlugins: [rehypeRaw],
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkMdx],
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
