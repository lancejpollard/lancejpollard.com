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
  justify: 'center',
  width: `calc(100% * (1/7) - (48px / 7))`,
})

export default function CA2DSelf({ colors = [] }: CA2DSelfPropsType) {
  return (
    <Container>
      <Self>
        {colors.map((color, i) => (
          <Block
            key={i}
            fill={color}
          />
        ))}
      </Self>
    </Container>
  )
}
