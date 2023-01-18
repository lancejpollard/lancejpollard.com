/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from './Layout'
import {
  Box,
  Text,
  Texture,
  PagePropsType,
  Link,
} from '@lancejpollard/kit'
import React from 'react'
import theme from '@configurations/theme'
import Screen from './Screen'

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

const HeaderContent = Box({
  align: 'center' as const,
  direction: 'vertical' as const,
  justify: 'center' as const,
  paddingHorizontal: 16,
  paddingVertical: 32,
  width: '100%',
})

const Title = Text({
  align: 'center' as const,
  as: 'h1',
  breakWord: true,
  fontFamily: 'text',
  fontSize: 32,
  lineHeight: 1.4,
  marginTop: 8,
  maxWidth: 672,
  width: '100%',
})

const Body = Box({
  // align: 'center' as const,
  justify: 'center' as const,
  marginVertical: 64,
  minHeight: '100vh',
  selectors: {
    '*': {
      fontFamily: 'latin',
      fontHeight: 1.7,
    },
    'a:hover:not(.header)': {
      borderBottom: `1px dotted ${theme.colors.purpleLight}`,
    },
    'a:not(.header)': {
      borderBottom: `1px dotted black`,
    },
    'h2 *': {
      fontFamily: 'text',
      fontHeight: 1.4,
    },
    'h3 *': {
      fontFamily: 'text',
      fontHeight: 1.4,
    },
    'h4 *': {
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

const Footer = Box({
  align: 'center' as const,
  as: 'footer',
  justify: 'center' as const,
  minHeight: '100vh',
  width: '100%',
})

const Rabbit = Texture({
  animation: theme.animations.jump.fast,
  as: 'img',
  draggable: 'false',
  height: 128,
  src: theme.images.face,
})

export default function PostLayout({
  url,
  tab,
  tags = [],
  note,
  children,
}: PostLayoutPropsType) {
  const urlParts = url.split('/')
  urlParts.pop()
  const previousUrl = urlParts.length > 1 ? urlParts.join('/') : '/'
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
          <HeaderContent>
            <Link href={previousUrl}>▲</Link>
            <Title>{tab}</Title>
          </HeaderContent>
        </Header>
        <Body>
          <BodyCenter>{children}</BodyCenter>
        </Body>
        <Footer>
          <Link href="/">
            <Rabbit />
          </Link>
        </Footer>
      </Screen>
    </Layout>
  )
}
