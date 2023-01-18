/* eslint-disable @typescript-eslint/no-explicit-any */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import FONTS from '@configurations/fonts'
import { ServerStyleSheet } from 'styled-components'

const fontsPaths = Object.keys(FONTS).map(name => FONTS[name][0])

export async function getInitialProps(ctx: DocumentContext) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => (props: React.ComponentProps<any>) =>
          sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    }
  } finally {
    sheet.seal()
  }
}

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {fontsPaths.map(font => (
          <link
            key={font}
            href={font}
            as="font"
            crossOrigin=""
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
