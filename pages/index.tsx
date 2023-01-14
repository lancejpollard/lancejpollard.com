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
import POEM from '@contents/poem.md'
import DESCRIPTION from '@contents/description.md'
import Markdown from '@components/kit/Markdown'
import Link from '@components/kit/Link'
import Text from '@components/kit/Text'

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

const ui = {
  descriptionCenter: {
    maxWidth: 672,
    paddingVertical: 128,
  },
  descriptionContainer: {
    align: 'center' as const,
    direction: 'vertical' as const,
    paddingHorizontal: 16,
  },
  faceContainer: {
    height: '100vh',
    id: 'rabbit',
    paddingBottom: 48,
    paddingTop: 24,
    width: '100vw',
  },
  fireContainer: {
    crop: true,
    padding: 64,
    width: '100vw',
  },
  holeContainer: {
    marginTop: 128,
    minHeight: '100vh',
  },
  landContainer: {
    margin: '128px 0px',
  },
  linkContainer: {
    align: 'center' as const,
    height: '100vh',
    justify: 'center' as const,
    width: '100%',
  },
  moonContainer: {
    align: 'center' as const,
    height: '100vh',
    justify: 'center' as const,
    width: '100vw',
  },
  poemCenter: {
    maxWidth: 672,
    paddingVertical: 128,
  },
  poemContainer: {
    align: 'center' as const,
    direction: 'vertical' as const,
    paddingHorizontal: 16,
  },
  rockContainer: {
    height: '800vh',
    width: '100%',
  },
  starContainer: {
    height: '200vh',
    margin: '128px 0px',
    width: '100%',
  },
  tubeContainer: {
    height: '800vh',
    width: '100%',
  },
}

export default function Page({ url, tab, note, tags }: PagePropsType) {
  return (
    <Content
      url={url}
      tab={tab}
      note={note}
      tags={tags}
    >
      <Box
        as="section"
        view={ui.fireContainer}
      >
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
      </Box>
      <Box view={ui.starContainer}>
        <Texture
          stretch
          fill={theme.images.star}
          repeat
          size={384}
          mask={theme.gradients.band}
        />
      </Box>
      <Box view={ui.poemContainer}>
        <Box view={ui.poemCenter}>
          <Markdown>{POEM}</Markdown>
        </Box>
      </Box>
      <Box view={ui.moonContainer}>
        <Texture
          as="img"
          draggable="false"
          width={300}
          src="/images/moon.png"
        />
      </Box>
      <Box view={ui.landContainer}>
        <Texture
          as="img"
          draggable="false"
          width="100%"
          src="/images/land.png"
          mask={theme.gradients.band2}
        />
      </Box>
      <Box
        view={ui.faceContainer}
        id="rabbit"
      >
        <Texture
          width="100%"
          height="100%"
          fill={theme.images.face}
          center
          contain
          animation={theme.animations.jump.slow}
        />
      </Box>
      <Box view={ui.holeContainer}>
        <Texture
          as="img"
          width="100%"
          src={theme.images.hole}
          center
          draggable="false"
          mask={theme.gradients.band}
        />
      </Box>
      <Box view={ui.tubeContainer}>
        <Texture
          stretch
          opacity={0.7}
          fill={theme.images.tube}
          size={672}
          repeat
          mask={theme.gradients.band}
        />
      </Box>
      <Box view={ui.descriptionContainer}>
        <Box view={ui.descriptionCenter}>
          <Markdown>{DESCRIPTION}</Markdown>
        </Box>
      </Box>
      <Box view={ui.rockContainer}>
        <Texture
          stretch
          opacity={0.7}
          fill={theme.images.rock}
          size={384}
          repeat
          mask={theme.gradients.band}
        />
      </Box>
      <Box view={ui.linkContainer}>
        <Link.External href="https://github.com/lancejpollard">
          <Text size={120}>?</Text>
        </Link.External>
      </Box>
    </Content>
  )
}
