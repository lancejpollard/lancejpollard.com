import { Head, PagePropsType } from '@lancejpollard/kit'
import theme from '@configurations/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

type LayoutPropsType = PagePropsType & {
  children: React.ReactNode
}

export default function Layout({
  url,
  tab,
  note,
  tags,
  children,
}: LayoutPropsType) {
  return (
    <>
      <Head
        url={url}
        title={tab}
        note={note}
        tags={tags}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
