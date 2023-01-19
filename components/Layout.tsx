/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Head,
  Text,
  PagePropsType,
  Texture,
} from '@lancejpollard/kit'
import theme from '@configurations/theme'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import _ from 'lodash'
import GG from './GG'

type LayoutPropsType = PagePropsType & {
  children: React.ReactNode
}

const H2Container = Box({
  '*': {
    fontFamily: 'text',
    fontSize: 24,
    lineHeight: 1.4,
  },
  as: 'h2',
  direction: 'vertical' as const,
  paddingVertical: 16,
  width: '100%',
})

const H2Content = Text({
  fontFamily: 'text',
  fontSize: 24,
  lineHeight: 1.4,
  paddingBottom: 8,
  width: '100%',
})

const H2Texture = Texture({
  fill: theme.images.wave,
  height: 8,
  mask: theme.gradients.h2,
  repeat: true,
  size: '32px',
  width: '100%',
})

const LinkCotent = Box({
  as: 'a',
  direction: 'vertical',
  position: 'relative',
})

const LinkIcon = Box({
  height: 16,
  invisible: true,
  left: -32,
  position: 'absolute',
  width: 16,
})

const Ul = styled.ul({
  li: {
    display: 'list-item',
    marginBottom: 4,
    paddingLeft: 24,
  },
  'li:before': {
    content: "'*'",
    fontFamily: 'text',
    left: 0,
    position: 'absolute',
    top: 5,
  },
  marginTop: 4,
})

const Ol = styled.ol({
  li: {
    display: 'list-item',
    marginBottom: 4,
  },
  listStyleType: 'decimal',
  marginLeft: 32,
  marginTop: 4,
})

const P = styled.p({
  marginTop: 24,
})

const components = {
  h2: ({ children, ...props }: React.ComponentProps<any>) => {
    const id = _.kebabCase(children as string)
    return (
      <LinkCotent
        {...props}
        id={id}
        className="header"
        href={`#${id}`}
      >
        <LinkIcon className="gg-container">
          <GG type="link" />
        </LinkIcon>
        <H2Container>
          <H2Content>{children}</H2Content>
          <H2Texture />
        </H2Container>
      </LinkCotent>
    )
  },
  ol: (props: React.ComponentProps<any>) => {
    return <Ol {...props} />
  },
  p: (props: React.ComponentProps<any>) => {
    return <P {...props} />
  },
  ul: (props: React.ComponentProps<any>) => {
    return <Ul {...props} />
  },
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
        title={`${tab} by Lance Pollard`}
        note={note}
        tags={tags}
        icon="/images/rabbit.svg"
        host="https://lancejpollard.com"
        image={`https://lancejpollard.com/api/social?path=${url}`}
        site="Lance Pollard"
        twitterHandle="@lancejpollard"
        twitterCreatorHandle="@lancejpollard"
      />
      <ThemeProvider theme={theme}>
        <>
          <MDXProvider components={components}>{children}</MDXProvider>
        </>
      </ThemeProvider>
    </>
  )
}
