/** @type {import('next').NextConfig} */
import createMDXPlugin from '@next/mdx'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    rehypePlugins: [],
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
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
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        next: path.resolve(__dirname, './node_modules/next'),
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(
          __dirname,
          './node_modules/react-dom',
        ),
        'styled-components': path.resolve(
          __dirname,
          './node_modules/styled-components',
        ),
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
    }

    return config
  },
})

export default nextConfig
