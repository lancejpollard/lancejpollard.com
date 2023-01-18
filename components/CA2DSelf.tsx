/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from './Layout'
import React from 'react'
import Screen from './Screen'
import _ from 'lodash'
import { Box } from '@lancejpollard/kit'

export type CA2DSelfPropsType = {
  colors: Array<Array<string>>
}

const Container = Box({
  align: 'center' as const,
  direction: 'vertical' as const,
  gap: 8,
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

export default function CA2DSelf({ colors = [] }: CA2DSelfPropsType) {
  return (
    <Container>
      {colors.map((array, i) => (
        <Self key={i}>
          {array.map((color, j) => (
            <Block
              key={j}
              fill={color}
            />
          ))}
        </Self>
      ))}
    </Container>
  )
}
