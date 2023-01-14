import React from 'react'
import NextLink, { LinkProps } from 'next/link'
import Box, { BoxPropsType } from './Box'

type ExternalLinkPropsType = Omit<BoxPropsType, 'unselectable'> & {
  children: React.ReactNode
  href: string
}

function ExternalLink({
  href,
  children,
  ...attrs
}: ExternalLinkPropsType) {
  return (
    <Box
      {...attrs}
      as="a"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {children}
    </Box>
  )
}

type PropsType = LinkProps & {
  children: React.ReactNode
}

export default function Link(props: PropsType) {
  return <NextLink {...props} />
}

Link.External = ExternalLink
