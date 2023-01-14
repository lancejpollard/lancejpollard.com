import React from 'react'
import {
  AlignType,
  BaseInputPropsType,
  BreakTextMixinType,
  Font,
  FontMixinType,
  getWordBreak,
  TEXT_ALIGN,
  Theme,
} from '@components/kit/styles'
import Factory from './Factory'
import { CSSProperties } from 'styled-components'

export const PROP_LIST = [
  'font',
  'height',
  'size',
  'weight',
  'breakEverywhere',
  'breakWord',
  'align',
  'animation',
  'fill',
  'font',
  'preserveNewLines',
  'resizable',
  'unselectable',
]

export type TextPropsType = BaseInputPropsType<TextViewPropsType>

export type TextViewPropsType = FontMixinType &
  BreakTextMixinType & {
    align?: AlignType
    animation?: string
    fill?: string
    font?: keyof Font
    preserveNewLines?: boolean
    resizable?: boolean
    unselectable?: boolean
  }

export default Factory('p', PROP_LIST, serializeProps)

function serializeProps(
  theme: Theme,
  props: TextViewPropsType,
): CSSProperties {
  return {
    animation: props.animation ? props.animation : undefined,
    color: props.fill ? props.fill : undefined,
    fontFamily: props.font
      ? `${theme.fonts[props.font]}, text`
      : 'text',
    fontSize: props.size ? `${props.size}px` : undefined,
    fontWeight: props.weight ? props.weight : undefined,
    lineHeight: props.height ? props.height : undefined,
    overflowWrap: props.breakWord ? 'break-word' : undefined,
    resize: props.resizable ? 'both' : undefined,
    textAlign: props.align ? TEXT_ALIGN[props.align] : undefined,
    userSelect: props.unselectable ? 'none' : undefined,
    whiteSpace: props.preserveNewLines ? 'pre-wrap' : undefined,
    wordBreak: getWordBreak(props),
  }
}
