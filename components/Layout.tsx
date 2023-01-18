/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Head,
  Text,
  PagePropsType,
  Texture,
  Link,
} from '@lancejpollard/kit'
import theme from '@configurations/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'
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

const Li = Box({
  align: 'center',
  display: 'block',
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

const components = {
  h2: ({ children, ...props }: React.ComponentProps<any>) => {
    const id = _.kebabCase(children as string)
    return (
      <LinkCotent
        id={id}
        className="header"
        href={`#${id}`}
      >
        <LinkIcon className="gg-container">
          <GG type="link" />
        </LinkIcon>
        <H2Container>
          <H2Content {...props}>{children}</H2Content>
          <H2Texture />
        </H2Container>
      </LinkCotent>
    )
  },
  li: ({ children, ...props }: React.ComponentProps<any>) => {
    return (
      <Li
        as="li"
        {...props}
      >
        <span>* </span>
        {children}
      </Li>
    )
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
