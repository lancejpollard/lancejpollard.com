import React from 'react'
import styled from 'styled-components'

type PropsType = {
  children: React.ReactNode
}

const Copy = styled.div({
  '*': {
    fontFamily: 'text',
    fontSize: 16,
    lineHeight: 1.4,
  },
  li: {
    marginLeft: 12,
    textIndent: -11,
  },
  ol: {
    marginBottom: 32,
  },
  ul: {
    marginBottom: 32,
  },
})

export default function Markdown({ children }: PropsType) {
  return <Copy>{children}</Copy>
}
