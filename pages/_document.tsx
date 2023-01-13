import { Html, Head, Main, NextScript } from 'next/document'
import FONTS from 'configurations/fonts'

const fontsPaths = Object.keys(FONTS).map(name => FONTS[name][0])

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="/styles/base.css"
        />
        <link
          rel="stylesheet"
          href="/styles/index.css"
        />
        <link
          rel="stylesheet"
          href="/styles/color.css"
        />
        <link
          rel="stylesheet"
          href="/styles/globals.css"
        />
        <link
          rel="stylesheet"
          href="/styles/theme.css"
        />
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
