import React from 'react'
import {
  AbsolutePositionMixinType,
  ABSOLUTE_POSITION_PROPERTIES,
  ALIGN,
  AlignType,
  DirectionType,
  FONT,
  FontType,
  JUSTIFY,
  JustifyType,
  PositionType,
  ScrollType,
} from '@configurations/styles'
import styled from 'styled-components'

export type BoxPropsType = AbsolutePositionMixinType & {
  align?: AlignType
  anchor?: string
  animation?: string
  borderRadius?: string | number
  centerImage?: boolean
  contain?: boolean
  cover?: boolean
  crop?: boolean
  cropX?: boolean
  cropY?: boolean
  direction?: DirectionType
  fill?: string
  flex?: number | string
  font?: FontType
  fontSize?: string | number
  gap?: string | number
  grow?: boolean
  hGap?: string | number
  height?: number | string
  image?: string
  imageRepeat?: boolean
  justify?: JustifyType
  margin?: number | string
  marginBottom?: string | number
  marginLeft?: string | number
  marginRight?: string | number
  marginTop?: string | number
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
  padding?: number | string
  paddingBottom?: string | number
  paddingHorizontal?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  paddingVertical?: string | number
  position?: PositionType
  round?: boolean
  scrollX?: ScrollType
  scrollY?: ScrollType
  shrink?: boolean
  unselectable?: boolean
  vGap?: string | number
  width?: number | string
  wrap?: boolean
}

const UNFORWARDED_PROPS = [
  'fill',
  'size',
  'height',
  'width',
  'direction',
  'fontSize',
]

const Box = styled.div.withConfig({
  shouldForwardProp(prop, isValidProp) {
    return (
      !UNFORWARDED_PROPS.includes(prop as string) && isValidProp(prop)
    )
  },
})<BoxPropsType>`
  display: flex;
  flex-shrink: 0;
  ${({ position }) => position && `position: ${position};`}
  ${({ wrap }) => wrap && `flex-wrap: wrap;`}

  ${({ borderRadius }) =>
    borderRadius &&
    `border-radius: ${
      typeof borderRadius === 'number'
        ? `${borderRadius}px`
        : borderRadius
    }};`}
  ${({ gap }) => gap && `gap: ${gap}px;`}
  ${({ vGap }) => vGap && `row-gap: ${vGap}px;`}
  ${({ hGap }) => hGap && `column-gap: ${hGap}px;`}
  ${({ shrink }) => shrink && `flex-shrink: 1;`}
  ${({ grow }) => grow && `flex-grow: 1;`}
  ${({ crop }) => crop && `overflow: hidden;`}
  ${({ cropX }) => cropX && `overflow-x: hidden;`}
  ${({ cropY }) => cropY && `overflow-y: hidden;`}
  ${({ scrollX }) => scrollX && `overflow-x: ${scrollX};`}
  ${({ scrollY }) => scrollY && `overflow-y: ${scrollY};`}
  ${({ animation }) => animation && `animation: ${animation};`}
  ${({ padding }) =>
    padding &&
    `padding: ${
      typeof padding === 'number' ? `${padding}px` : padding
    };`}
  ${({ paddingHorizontal }) =>
    paddingHorizontal &&
    `
    padding-left: ${
      typeof paddingHorizontal === 'number'
        ? `${paddingHorizontal}px`
        : paddingHorizontal
    };
    padding-right: ${
      typeof paddingHorizontal === 'number'
        ? `${paddingHorizontal}px`
        : paddingHorizontal
    };
    `}
  ${({ paddingVertical }) =>
    paddingVertical &&
    `
    padding-top: ${
      typeof paddingVertical === 'number'
        ? `${paddingVertical}px`
        : paddingVertical
    };
    padding-bottom: ${
      typeof paddingVertical === 'number'
        ? `${paddingVertical}px`
        : paddingVertical
    };
    `}
  ${({ margin }) =>
    margin &&
    `margin: ${typeof margin === 'number' ? `${margin}px` : margin};`}
  ${({ width }) =>
    width &&
    `width: ${typeof width === 'number' ? `${width}px` : width};`}
  ${({ minWidth }) =>
    minWidth &&
    `min-width: ${
      typeof minWidth === 'number' ? `${minWidth}px` : minWidth
    };`}
  ${({ maxWidth }) =>
    maxWidth &&
    `max-width: ${
      typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth
    };`}
  ${({ height }) =>
    height &&
    `height: ${typeof height === 'number' ? `${height}px` : height};`}
  ${({ minHeight }) =>
    minHeight &&
    `min-height: ${
      typeof minHeight === 'number' ? `${minHeight}px` : minHeight
    };`}
  ${({ maxHeight }) =>
    maxHeight &&
    `max-height: ${
      typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
    };`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ fill }) => fill && `background-color: ${fill};`}
  ${({ direction }) =>
    direction &&
    `flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};`}
  ${({ justify }) => justify && `justify-content: ${JUSTIFY[justify]};`}
  ${({ align }) => align && `align-items: ${ALIGN[align]};`}
  ${({ round }) => round && `border-radius: 50%;`}
  ${({ paddingTop }) =>
    paddingTop &&
    `padding-top: ${
      typeof paddingTop === 'number' ? `${paddingTop}px` : paddingTop
    };`}
  ${({ paddingRight }) =>
    paddingRight &&
    `padding-right: ${
      typeof paddingRight === 'number'
        ? `${paddingRight}px`
        : paddingRight
    };`}
  ${({ paddingBottom }) =>
    paddingBottom &&
    `padding-bottom: ${
      typeof paddingBottom === 'number'
        ? `${paddingBottom}px`
        : paddingBottom
    };`}
  ${({ paddingLeft }) =>
    paddingLeft &&
    `padding-left: ${
      typeof paddingLeft === 'number' ? `${paddingLeft}px` : paddingLeft
    };`}

  ${({ marginTop }) =>
    marginTop &&
    `margin-top: ${
      typeof marginTop === 'number' ? `${marginTop}px` : marginTop
    };`}
  ${({ marginRight }) =>
    marginRight &&
    `margin-right: ${
      typeof marginRight === 'number' ? `${marginRight}px` : marginRight
    };`}
  ${({ marginBottom }) =>
    marginBottom &&
    `margin-bottom: ${
      typeof marginBottom === 'number'
        ? `${marginBottom}px`
        : marginBottom
    };`}
  ${({ marginLeft }) =>
    marginLeft &&
    `margin-left: ${
      typeof marginLeft === 'number' ? `${marginLeft}px` : marginLeft
    };`}
  ${ABSOLUTE_POSITION_PROPERTIES}
`

export default Box
