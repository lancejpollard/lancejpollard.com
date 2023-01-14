import type { AppProps } from 'next/app'
import { polyfill } from 'seamless-scroll-polyfill'
import IS_SERVER from '@utils/isServer'
import '../styles/index.css'

if (!IS_SERVER) {
  polyfill()
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
