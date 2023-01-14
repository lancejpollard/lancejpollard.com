import React from 'react'
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

const QuestionMark = Text({
  size: 120,
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

export default function Page({ url, tab, note, tags }: PagePropsType) {
  return (
    <Layout
      url={url}
      tab={tab}
      note={note}
      tags={tags}
    >
      <Content>
        <FireContainer as="section">
          <Texture
            fitContent
            width="100%"
            center
            fill={theme.images.fire}
            anchor={theme.anchors.center}
            animation={theme.animations.spin}
            contain
            round
          />
        </FireContainer>
        <StarContainer>
          <Texture
            stretch
            fill={theme.images.star}
            repeat
            size={384}
            mask={theme.gradients.band}
          />
        </StarContainer>
        <PoemContainer>
          <PoemCenter>
            <Poem />
          </PoemCenter>
        </PoemContainer>
        <MoonContainer>
          <Texture
            as="img"
            draggable="false"
            width={300}
            src="/images/moon.png"
          />
        </MoonContainer>
        <LandContainer>
          <Texture
            as="img"
            draggable="false"
            width="100%"
            src="/images/land.png"
            mask={theme.gradients.band2}
          />
        </LandContainer>
        <FaceContainer id="rabbit">
          <Texture
            width="100%"
            height="100%"
            fill={theme.images.face}
            center
            contain
            animation={theme.animations.jump.slow}
          />
        </FaceContainer>
        <HoleContainer>
          <Texture
            as="img"
            width="100%"
            src={theme.images.hole}
            center
            draggable="false"
            mask={theme.gradients.band}
          />
        </HoleContainer>
        <TubeContainer>
          <Texture
            stretch
            opacity={0.7}
            fill={theme.images.tube}
            size={672}
            repeat
            mask={theme.gradients.band}
          />
        </TubeContainer>
        <DescriptionContainer>
          <DescriptionCenter>
            <Description />
          </DescriptionCenter>
        </DescriptionContainer>
        <RockContainer>
          <Texture
            stretch
            opacity={0.7}
            fill={theme.images.rock}
            size={384}
            repeat
            mask={theme.gradients.band}
          />
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
