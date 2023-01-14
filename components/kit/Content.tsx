import React from 'react'
import { PagePropsType } from '@components/kit/Page'
import Head from '@components/kit/Head'
import Box from '@components/kit/Box'

type PropsType = PagePropsType & {
  children: React.ReactNode
}

const Wrapper = Box({
  minHeight: '100vh',
  position: 'absolute' as const,
  width: '100vw',
})

const Container = Box({
  direction: 'vertical' as const,
  flex: 1,
  height: '100vh',
  width: '100%',
})

const Scroller = Box({
  direction: 'vertical' as const,
  flex: 1,
  scrollY: true,
  width: '100%',
})

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
        title={tab}
        note={note}
        tags={tags}
      />
      <Wrapper>
        <Container>
          <Scroller>{children}</Scroller>
        </Container>
      </Wrapper>
    </>
  )
}
