import { Box, Content } from '@lancejpollard/kit'
import React from 'react'

type ScreenPropsType = {
  children: React.ReactNode
}

const Wall = Box(props => ({
  animation: props.theme.animations.fadeIn('2s'),
  direction: 'vertical' as const,
  opacity: 0,
  width: '100%',
}))

export default function Screen({ children }: ScreenPropsType) {
  return (
    <Content>
      <Wall>{children}</Wall>
    </Content>
  )
}
