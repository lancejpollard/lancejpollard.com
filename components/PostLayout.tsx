import Layout from './Layout'
import { Box, Text, Texture, PagePropsType } from '@lancejpollard/kit'
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

const Title = Text({
  as: 'h1',
  fontFamily: 'text',
  fontSize: 16,
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
      {/* <section class="move w100v minh100v v">
        <div class="hc fs16 mtb64">
          <div class="maxw672 zvw672minw672 plr16">
            <p class="mb16"></p>
          </div>
        </div>
      </section>
      <section class="move soil wall"></section>
      <section class="move wall">
        <a href="/">
          <img
            draggable="false"
            src="face.png"
            class="a1"
            width="128"
          />
        </a>
      </section>
      <div class="pf v s b16 r16">
        <div class="wave-r r w32 h32 mb16 tune-soul cp move t4"></div>
        <div class="wave-r r w32 h32 tune-back cp t4"></div>
      </div> */}
    </Layout>
  )
}
