import React from 'react'
import {
  AlignType,
  BaseViewPropsType,
  BreakTextMixinType,
  Font,
  FontMixinType,
  getWordBreak,
  TEXT_ALIGN,
  Theme,
} from '@components/kit/styles'
import styled, { CSSProperties, useTheme } from 'styled-components'
import { useViewProps } from './useProps'

export const StyledText = styled.p({})

export type TextPropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | React.ComponentType<any>
  children?: React.ReactNode
  id?: string
  view?: TextViewPropsType | Array<TextViewPropsType>
}

export type TextViewPropsType = FontMixinType &
  BreakTextMixinType &
  BaseViewPropsType & {
    align?: AlignType
    animation?: string
    fill?: string
    font?: keyof Font
    preserveNewLines?: boolean
    resizable?: boolean
    unselectable?: boolean
  }

export default function Text({ view, as, id }: TextPropsType) {
  const theme = useTheme()
  const [viewProps, ref] = useViewProps(view, theme, serializeViewProps)

  return (
    <StyledText
      as={as}
      id={id}
      ref={ref}
      {...viewProps}
    />
  )
}

function serializeViewProps(
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
