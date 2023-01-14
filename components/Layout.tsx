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
  Item: (props: React.ComponentProps<'li'>) => <li {...props} />,
  List: (props: React.ComponentProps<'ul'>) => <ul {...props} />,
  OList: (props: React.ComponentProps<'ol'>) => <ol {...props} />,
  Para: (props: React.ComponentProps<'p'>) => <p {...props} />,
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
