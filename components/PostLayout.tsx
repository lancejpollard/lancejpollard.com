/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from './Layout'
import { Box, Text, Texture, PagePropsType } from '@lancejpollard/kit'
import React from 'react'
import theme from '@configurations/theme'
import Screen from './Screen'
import { MDXProvider } from '@mdx-js/react'

export type PostLayoutPropsType = PagePropsType & {
  children: React.ReactNode
}

const Header = Box({
  align: 'center' as const,
  as: 'header',
  justify: 'center' as const,
  minHeight: '100vh',
  width: '100%',
})

const HeaderTexture = Texture({
  fill: theme.images.soil,
  mask: theme.gradients.band3,
  repeat: true,
  size: 672,
  stretch: true,
})

const Title = Text({
  align: 'center' as const,
  as: 'h1',
  fontFamily: 'text',
  fontSize: 32,
  lineHeight: 1.4,
  marginVertical: 32,
  maxWidth: 672,
  paddingHorizontal: 16,
  width: '100%',
})

const Body = Box({
  // align: 'center' as const,
  justify: 'center' as const,
  marginVertical: 64,
  minHeight: '100vh',
  selectors: {
    '*': {
      fontFamily: 'text',
      fontHeight: 1.4,
    },
    p: {
      marginBottom: 16,
    },
  },
  size: 16,
  width: '100%',
})

const BodyCenter = Box({
  direction: 'vertical',
  maxWidth: 672,
  paddingHorizontal: 16,
  width: '100%',
})

export default function PostLayout({
  url,
  tab,
  tags = [],
  note,
  children,
}: PostLayoutPropsType) {
  return (
    <Layout
      url={url}
      tab={`${tab} @ Lance Pollard`}
      note={note}
      tags={tags}
    >
      <Screen>
        <Header>
          <HeaderTexture />
          <Title>{tab}</Title>
        </Header>
        <Body>
          <BodyCenter>{children}</BodyCenter>
        </Body>
      </Screen>
    </Layout>
  )
}
