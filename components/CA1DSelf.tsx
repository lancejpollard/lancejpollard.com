/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from './Layout'
import React from 'react'
import Screen from './Screen'
import _ from 'lodash'
import { Box, Text } from '@lancejpollard/kit'

export type CA2DSelfPropsType = {
  colors: Array<string>
}

const Container = Box({
  align: 'center' as const,
  justify: 'center' as const,
  marginBottom: 48,
  marginTop: 24,
  width: '100%',
})

const Self = Box({
  align: 'center',
  gap: 8,
  justify: 'center',
  shrink: true,
  width: '100%',
  wrap: true,
})

const Block = Box({
  align: 'center',
  aspectRatio: '1 / 1',
  height: 40,
  justify: 'center',
})

const TextBlock = Text({
  fontHeight: 0,
})

export default function CA2DSelf({ colors = [] }: CA2DSelfPropsType) {
  return (
    <Container>
      <Self>
        <Block>
          <TextBlock as="span">...</TextBlock>
        </Block>
        {colors.map((color, i) => (
          <Block
            key={i}
            fill={color}
          />
        ))}
        <Block>
          <TextBlock as="span">...</TextBlock>
        </Block>
      </Self>
    </Container>
  )
}
