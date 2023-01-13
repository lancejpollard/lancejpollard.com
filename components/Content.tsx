import React from 'react'
import { PagePropsType } from '@components/Page'
import Head from '@components/Head'
import Box from '@components/Box'
import theme from '@configurations/theme'

type PropsType = PagePropsType & {
  children: React.ReactNode
}

export default function Content({
  children,
  url,
  tab,
  note,
  tags,
}: PropsType) {
  return (
    <>
      <Head
        url={url}
        title={`${tab}`}
        note={note}
        tags={tags}
      />
      <Box
        minHeight="100vh"
        width="100vw"
        position="absolute"
        scrollY="auto"
      >
        <Box
          flex={1}
          width="100%"
          direction="vertical"
          justify="between"
          height="100vh"
        >
          <Box
            width="100%"
            direction="vertical"
            scrollY="auto"
            borderRadius={8}
            fill={theme.colors.white2}
            flex={1}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}
