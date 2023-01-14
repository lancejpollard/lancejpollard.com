import Head from '@components/kit/Head'
import { PagePropsType } from '@components/kit/Page'
import theme from '@configurations/theme'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'

type LayoutPropsType = PagePropsType & {
  children: React.ReactNode
}

const components = {
  p: props => <p {...props} />,
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
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </ThemeProvider>
    </>
  )
}
