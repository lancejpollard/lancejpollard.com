import Layout from './Layout'
import { PagePropsType } from '@components/kit/Page'
import React from 'react'
import { Box, Text, Texture } from './kit'
import theme from '@configurations/theme'

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
  marginVertical: 32,
  paddingHorizontal: 16,
  size: 16,
  width: 672,
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
      <Header>
        <HeaderTexture />
        <Title>{tab}</Title>
      </Header>
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
