import {
  Box,
  Head,
  Text,
  PagePropsType,
  Texture,
} from '@lancejpollard/kit'
import theme from '@configurations/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

type LayoutPropsType = PagePropsType & {
  children: React.ReactNode
}

const H2Container = Box({
  as: 'h2',
  direction: 'vertical' as const,
  paddingVertical: 16,
  width: '100%',
})

const H2Content = Text({
  fontSize: 24,
  paddingBottom: 8,
  width: '100%',
})

const H2Texture = Texture({
  fill: theme.images.wave,
  height: 8,
  mask: theme.gradients.h2,
  repeat: true,
  size: '32px',
  width: '100%',
})

const components = {
  h2: (props: React.ComponentProps<any>) => {
    return (
      <H2Container>
        <H2Content {...props} />
        <H2Texture />
      </H2Container>
    )
  },
}

export default function Layout({
  url,
  tab,
  note,
  tags,
  children,
}: LayoutPropsType) {
  return (
    <>
      <Head
        url={url}
        title={tab}
        note={note}
        tags={tags}
      />
      <ThemeProvider theme={theme}>
        <>
          <MDXProvider components={components}>{children}</MDXProvider>
        </>
      </ThemeProvider>
    </>
  )
}
