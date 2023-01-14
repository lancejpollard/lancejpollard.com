import React from 'react'
import {
  GetServerSidePropsType,
  GetServerSideResultType,
  PagePropsType,
  Box,
  Texture,
  Link,
  Text,
} from '@lancejpollard/kit'
import theme from '@configurations/theme'
import Poem from '@contents/poem.md'
import Description from '@contents/description.md'
import Layout from '@components/Layout'
import Copy from '@components/Copy'
import useScrollIntoView from '@hooks/useScrollIntoView'
import Screen from '@components/Screen'

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

const RockTexture = Texture(props => ({
  fill: props.theme.images.rock,
  mask: props.theme.gradients.band,
  opacity: 0.7,
  repeat: true,
  size: 384,
  stretch: true,
}))

export default function Page({ url, tab, note, tags }: PagePropsType) {
  const rabbitRef = useScrollIntoView()

  return (
    <Layout
      url={url}
      tab={tab}
      note={note}
      tags={tags}
    >
      <Screen>
        <FireContainer as="section">
          <FireTexture />
        </FireContainer>
        <StarContainer>
          <StartTexture />
        </StarContainer>
        <PoemContainer>
          <PoemCenter>
            <Copy>
              <Poem />
            </Copy>
          </PoemCenter>
        </PoemContainer>
        <MoonContainer>
          <MoonTexture />
        </MoonContainer>
        <LandContainer>
          <LandTexture />
        </LandContainer>
        <FaceContainer
          id="rabbit"
          ref={rabbitRef}
        >
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
            <Copy>
              <Description />
            </Copy>
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
      </Screen>
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
