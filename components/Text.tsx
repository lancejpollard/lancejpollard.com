import React from 'react'
import {
  AlignType,
  FONT,
  FontType,
  TEXT_ALIGN,
} from '@configurations/styles'
import styled from 'styled-components'
import { Property } from 'csstype'

const UNFORWARDED_PROPS = [
  'fill',
  'size',
  'height',
  'width',
  'color',
  'direction',
  'fontSize',
]

type PropsType = {
  align?: AlignType
  animation?: string
  breakEverywhere?: boolean
  breakWord?: boolean
  fill?: string
  font?: FontType
  height?: number | string
  preserveNewLines?: boolean
  resizable?: boolean
  size?: number
  unselectable?: boolean
  weight?: number
}

const Text = styled.p.withConfig({
  shouldForwardProp(prop, isValidProp) {
    return (
      !UNFORWARDED_PROPS.includes(prop as string) && isValidProp(prop)
    )
  },
})<PropsType>(props => ({
  '&::placeholder': {
    opacity: 0.5,
  },

  animation: props.animation ? props.animation : undefined,
  color: props.fill ? props.fill : undefined,
  fontFamily: props.font ? `${FONT[props.font]}, text` : 'text',
  fontSize: props.size ? `${props.size}px` : undefined,
  fontWeight: props.weight ? props.weight : undefined,
  lineHeight: props.height ? props.height : undefined,
  overflowWrap: props.breakWord ? 'break-word' : undefined,
  resize: props.resizable ? 'both' : undefined,
  textAlign: props.align ? TEXT_ALIGN[props.align] : undefined,
  userSelect: props.unselectable ? 'none' : undefined,
  whiteSpace: props.preserveNewLines ? 'pre-wrap' : undefined,
  wordBreak: getWordBreak(props),
}))

export default Text

function getWordBreak(
  props: PropsType,
): Property.WordBreak | undefined {
  if (props.breakWord) {
    return 'break-word'
  }
  if (props.breakEverywhere) {
    return 'break-all'
  }
}
