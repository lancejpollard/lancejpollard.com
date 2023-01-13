import React from 'react'
import {
  GetServerSidePropsType,
  GetServerSideResultType,
  PagePropsType,
} from 'components/Page'
import Content from '@components/Content'
import Box from '@components/Box'
import theme from '@configurations/theme'
import Texture from '@components/Texture'
import POEM from '@contents/poem.md'
import DESCRIPTION from '@contents/description.md'
import Markdown from '@components/Markdown'
import Link from '@components/Link'
import Text from '@components/Text'

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
        padding={64}
        width="100vw"
        crop
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
      <Box
        height="200vh"
        width="100%"
        margin="128px 0px"
      >
        <Texture
          stretch
          fill={theme.images.star}
          repeat
          size={384}
          mask={theme.gradients.band}
        />
      </Box>
      <Box
        paddingHorizontal={16}
        direction="vertical"
        align="center"
      >
        <Box
          maxWidth={672}
          paddingVertical={128}
        >
          <Markdown>{POEM}</Markdown>
        </Box>
      </Box>
      <Box
        width="100vw"
        height="100vh"
        justify="center"
        align="center"
      >
        <Texture
          as="img"
          draggable="false"
          width={300}
          src="/images/moon.png"
        />
      </Box>
      <Box margin="128px 0px">
        <Texture
          as="img"
          draggable="false"
          width="100%"
          src="/images/land.png"
          mask={theme.gradients.band2}
        />
      </Box>
      <Box
        width="100vw"
        height="100vh"
        id="rabbit"
        paddingTop={24}
        paddingBottom={48}
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
      <Box
        marginTop={128}
        minHeight="100vh"
      >
        <Texture
          as="img"
          width="100%"
          src={theme.images.hole}
          center
          draggable="false"
          mask={theme.gradients.band}
        />
      </Box>
      <Box
        width="100%"
        height="800vh"
      >
        <Texture
          stretch
          opacity={0.7}
          fill={theme.images.tube}
          size={672}
          repeat
          mask={theme.gradients.band}
        />
      </Box>
      <Box
        paddingHorizontal={16}
        direction="vertical"
        align="center"
      >
        <Box
          maxWidth={672}
          paddingVertical={128}
        >
          <Markdown>{DESCRIPTION}</Markdown>
        </Box>
      </Box>
      <Box
        width="100%"
        height="800vh"
      >
        <Texture
          stretch
          opacity={0.7}
          fill={theme.images.rock}
          size={384}
          repeat
          mask={theme.gradients.band}
        />
      </Box>
      <Box
        width="100%"
        height="100vh"
        align="center"
        justify="center"
      >
        <Link.External href="https://github.com/lancejpollard">
          <Text size={120}>?</Text>
        </Link.External>
      </Box>
    </Content>
  )
}
