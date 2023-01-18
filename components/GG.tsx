import { Box } from '@lancejpollard/kit'
import React from 'react'

type ScreenPropsType = {
  type: string
}

const Icon = Box({
  aspectRatio: '1 / 1',
  width: '100%',
})

export default function GG({ type, ...props }: ScreenPropsType) {
  return (
    <Icon
      className={`gg-${type}`}
      {...props}
    />
  )
}
