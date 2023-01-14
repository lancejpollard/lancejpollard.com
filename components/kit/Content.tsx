import React from 'react'
import { PagePropsType } from '@components/kit/Page'
import Head from '@components/kit/Head'
import Box from '@components/kit/Box'

type PropsType = PagePropsType & {
  children: React.ReactNode
}

const ui = {
  scroller: {
    minHeight: '100vh',
    position: 'absolute' as const,
    scrollY: true,
    width: '100vw',
  },
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
      <Box view={ui.scroller}>{children}</Box>
    </>
  )
}
