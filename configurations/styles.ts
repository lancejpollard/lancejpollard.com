import { Property } from 'csstype'
import { css } from 'styled-components'

export const ABSOLUTE_POSITION_PROPERTIES = css<AbsolutePositionMixinType>`
  ${({ top }) =>
    top && `top: ${typeof top === 'number' ? `${top}px` : top};`}
  ${({ right }) =>
    right &&
    `right: ${typeof right === 'number' ? `${right}px` : right};`}
  ${({ bottom }) =>
    bottom &&
    `bottom: ${typeof bottom === 'number' ? `${bottom}px` : bottom};`}
  ${({ left }) =>
    left && `left: ${typeof left === 'number' ? `${left}px` : left};`}
`

export type AbsolutePositionMixinType = {
  bottom?: number | string
  left?: number | string
  right?: number | string
  top?: number | string
}

export type AlignType = 'center' | 'end' | 'start'

export type DirectionType = 'horizontal' | 'vertical'

export type JustifyType = 'between' | 'center' | 'end'

export type PositionType = 'absolute' | 'relative' | 'fixed'

export type ScrollType = 'auto' | 'scroll'

// eslint-disable-next-line sort-exports/sort-exports
export const JUSTIFY: Record<JustifyType, string> = {
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
}

// eslint-disable-next-line sort-exports/sort-exports
export const ALIGN: Record<AlignType, string> = {
  center: 'center',
  end: 'end',
  start: 'start',
}

export const FONT: Record<FontType, string> = {
  amharic: 'Amharic',
  arabic: 'Arabic',
  armenian: 'Armenian',
  bengali: 'Bengali',
  burmese: 'Burmese',
  chinese: 'Chinese',
  georgian: 'Georgian',
  hebrew: 'Hebrew',
  hindi: 'Hindi',
  inuktitut: 'Inuktitut',
  japanese: 'Japanese',
  kannada: 'Kannada',
  khmer: 'Khmer',
  korean: 'Korean',
  latin: 'Latin',
  malayalam: 'Malayalam',
  persian: 'Persian',
  tamil: 'Tamil',
  thai: 'Thai',
  tibetan: 'Tibetan',
}

export type FontType =
  | 'arabic'
  | 'armenian'
  | 'persian'
  | 'hebrew'
  | 'bengali'
  | 'inuktitut'
  | 'chinese'
  | 'japanese'
  | 'tamil'
  | 'burmese'
  | 'amharic'
  | 'thai'
  | 'khmer'
  | 'hindi'
  | 'georgian'
  | 'tibetan'
  | 'latin'
  | 'kannada'
  | 'korean'
  | 'malayalam'

// eslint-disable-next-line sort-exports/sort-exports, @typescript-eslint/no-explicit-any
export const TEXT_ALIGN: Record<AlignType, Property.TextAlign> = {
  center: 'center',
  end: 'right',
  start: 'left',
}
