import {
  AbsolutePositionMixinType,
  ABSOLUTE_POSITION_PROPERTIES,
  PositionType,
} from '@configurations/styles'
import React from 'react'
import styled, { css } from 'styled-components'

type PropsType = AbsolutePositionMixinType & {
  anchor?: string
  animation?: string
  borderRadius?: string | number
  center?: boolean
  contain?: boolean
  cover?: boolean
  fill?: string
  fitContent?: boolean
  height?: number | string
  mask?: string
  minHeight?: number | string
  minWidth?: number | string
  opacity?: number
  position?: PositionType
  repeat?: boolean
  round?: boolean
  size?: number | string
  stretch?: boolean
  unselectable?: boolean
  width?: number | string
}

const FIT_CONTENT_MIXIN = css`
  height: 0;
  padding-top: 100%;
  background-size: contain;
`

const STRETCH_MIXIN = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const UNFORWARDED_PROPS = [
  'fill',
  'height',
  'width',
  'direction',
  'mask',
]

const Texture = styled.div.withConfig({
  shouldForwardProp(prop, isValidProp) {
    return (
      !UNFORWARDED_PROPS.includes(prop as string) && isValidProp(prop)
    )
  },
})<PropsType>`
  ${({ position }) => position && `position: ${position};`}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ unselectable }) => unselectable && `user-select: none;`}

  ${({ borderRadius }) =>
    borderRadius &&
    `border-radius: ${
      typeof borderRadius === 'number'
        ? `${borderRadius}px`
        : borderRadius
    }};`}
  ${({ size }) =>
    size &&
    `background-size: ${
      typeof size === 'number' ? `${size}px` : size
    };`}
  ${({ width }) =>
    width &&
    `width: ${typeof width === 'number' ? `${width}px` : width};`}
  ${({ minWidth }) =>
    minWidth &&
    `min-width: ${
      typeof minWidth === 'number' ? `${minWidth}px` : minWidth
    };`}
  ${({ height }) =>
    height &&
    `height: ${typeof height === 'number' ? `${height}px` : height};`}
  ${({ minHeight }) =>
    minHeight &&
    `min-height: ${
      typeof minHeight === 'number' ? `${minHeight}px` : minHeight
    };`}

  ${({ fill }) => fill && `background-image: url(${fill});`}
  ${({ contain }) => contain && `background-size: contain;`}
  ${({ cover }) => cover && `background-size: cover;`}
  ${({ anchor }) => anchor && `transform-origin: ${anchor};`}
  ${({ center }) => center && `background-position: center center;`}
  ${({ repeat }) =>
    `background-repeat: ${repeat ? 'repeat' : 'no-repeat'};`}
  ${({ animation }) => animation && `animation: ${animation};`}
  ${({ fitContent }) => fitContent && FIT_CONTENT_MIXIN}
  ${({ stretch }) => stretch && STRETCH_MIXIN}
  ${({ round }) => round && `border-radius: 50%;`}
  ${({ mask }) => mask && `mask-image: ${mask};`}
  ${ABSOLUTE_POSITION_PROPERTIES}
`

export default Texture
