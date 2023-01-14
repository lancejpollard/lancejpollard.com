import React, { useEffect } from 'react'
import {
  GetServerSidePropsType,
  GetServerSideResultType,
  PagePropsType,
} from '@components/kit/Page'
import Content from '@components/kit/Content'
import Box from '@components/kit/Box'
import theme from '@configurations/theme'
import Texture from '@components/kit/Texture'
import Poem from '@contents/poem.md'
import Description from '@contents/description.md'
import Link from '@components/kit/Link'
import Text from '@components/kit/Text'
import Layout from '@components/Layout'
import Markdown from '@components/kit/Markdown'

const QuestionMark = Text({
  fontSize: 120,
})

const DescriptionCenter = Box({
  maxWidth: 672,
  paddingVertical: 128,
})

const DescriptionContainer = Box({
  align: 'center' as const,
  direction: 'vertical' as const,
  paddingHorizontal: 16,
})

const FaceContainer = Box({
  height: '100vh',
  id: 'rabbit',
  paddingBottom: 48,
  paddingTop: 24,
  width: '100vw',
})

const FireContainer = Box({
  crop: true,
  padding: 64,
  width: '100vw',
})

const HoleContainer = Box({
  marginTop: 128,
  minHeight: '100vh',
})

const LandContainer = Box({
  margin: '128px 0px',
})

const LinkContainer = Box({
  align: 'center' as const,
  height: '100vh',
  justify: 'center' as const,
  width: '100%',
})

const MoonContainer = Box({
  align: 'center' as const,
  height: '100vh',
  justify: 'center' as const,
  width: '100vw',
})

const PoemCenter = Box({
  maxWidth: 672,
  paddingVertical: 128,
})

const PoemContainer = Box({
  align: 'center' as const,
  direction: 'vertical' as const,
  paddingHorizontal: 16,
})

const RockContainer = Box({
  height: '800vh',
  width: '100%',
})

const StarContainer = Box({
  height: '200vh',
  margin: '128px 0px',
  width: '100%',
})

const TubeContainer = Box({
  height: '800vh',
  width: '100%',
})

const FireTexture = Texture({
  anchor: theme.anchors.center,
  animation: theme.animations.spin,
  center: true,
  contain: true,
  fill: theme.images.fire,
  fitContent: true,
  round: true,
  width: '100%',
})

const StartTexture = Texture({
  fill: theme.images.star,
  mask: theme.gradients.band,
  repeat: true,
  size: 384,
  stretch: true,
})

const MoonTexture = Texture({
  as: 'img',
  draggable: 'false',
  src: '/images/moon.png',
  width: 300,
})

const LandTexture = Texture({
  as: 'img',
  draggable: 'false',
  mask: theme.gradients.band2,
  src: '/images/land.png',
  width: '100%',
})

const FaceTexture = Texture({
  animation: theme.animations.jump.slow,
  center: true,
  contain: true,
  fill: theme.images.face,
  height: '100%',
  width: '100%',
})

const HoleTexture = Texture({
  as: 'img',
  center: true,
  draggable: 'false',
  mask: theme.gradients.band,
  src: theme.images.hole,
  width: '100%',
})

const TubeTexture = Texture({
  fill: theme.images.tube,
  mask: theme.gradients.band,
  opacity: 0.7,
  repeat: true,
  size: 672,
  stretch: true,
})

const RockTexture = Texture({
  fill: theme.images.rock,
  mask: theme.gradients.band,
  opacity: 0.7,
  repeat: true,
  size: 384,
  stretch: true,
})

export default function Page({ url, tab, note, tags }: PagePropsType) {
  // useEffect(() => {
  //   console.log(document.querySelector('#rabbit'))
  //   document.querySelector('#rabbit')?.scrollIntoView()
  // }, [])

  return (
    <Layout
      url={url}
      tab={tab}
      note={note}
      tags={tags}
    >
      <Content>
        <FireContainer as="section">
          <FireTexture />
        </FireContainer>
        <StarContainer>
          <StartTexture />
        </StarContainer>
        <PoemContainer>
          <PoemCenter>
            <Markdown>
              <Poem />
            </Markdown>
          </PoemCenter>
        </PoemContainer>
        <MoonContainer>
          <MoonTexture />
        </MoonContainer>
        <LandContainer>
          <LandTexture />
        </LandContainer>
        <FaceContainer id="rabbit">
          <FaceTexture />
        </FaceContainer>
        <HoleContainer>
          <HoleTexture />
        </HoleContainer>
        <TubeContainer>
          <TubeTexture />
        </TubeContainer>
        <DescriptionContainer>
          <DescriptionCenter>
            <Markdown>
              <Description />
            </Markdown>
          </DescriptionCenter>
        </DescriptionContainer>
        <RockContainer>
          <RockTexture />
        </RockContainer>
        <LinkContainer>
          <Link.External href="https://github.com/lancejpollard">
            <QuestionMark size={120}>?</QuestionMark>
          </Link.External>
        </LinkContainer>
      </Content>
    </Layout>
  )
}

export async function getServerSideProps({
  resolvedUrl,
}: GetServerSidePropsType): Promise<
  GetServerSideResultType<PagePropsType>
> {
  return {
    props: {
      tab: 'Lance Pollard',
      tags: ['lancejpollard', 'software engineer'],
      url: resolvedUrl,
    },
  }
}
