import { Property } from 'csstype'
import { CSSObject } from 'styled-components'

export type AbsolutePositionMixinType = {
  bottom?: number | string
  left?: number | string
  right?: number | string
  top?: number | string
}

export type AlignType = 'center' | 'end' | 'start'

export type BaseInputPropsType<T extends object> = T & {
  queries?: Array<BaseMatchInputPropsType<T>>
  selectors?: Record<string, T>
}

export type BaseMatchInputPropsType<T extends object> = T & {
  match?: QueryType
  selectors?: Record<string, T>
}

export type BorderRadiusMixinType = {
  borderRadius?: string | number
  round?: boolean
}

export type DirectionType = 'horizontal' | 'vertical'

export interface Font {
  arial: true
}

export type FontMixinType = {
  font?: keyof Font
  height?: number | string
  size?: number
  weight?: number
}

export type JustifyType = 'between' | 'center' | 'end'

export type OverflowMixinType = {
  crop?: boolean
  cropX?: boolean
  cropY?: boolean
  scroll?: boolean
  scrollX?: boolean
  scrollY?: boolean
}

export type PositionType = 'absolute' | 'relative' | 'fixed'

export interface Theme {
  fonts: Record<keyof Font, string>
}

// eslint-disable-next-line sort-exports/sort-exports
export const DIRECTION: Record<DirectionType, Property.FlexDirection> =
  {
    horizontal: 'row',
    vertical: 'column',
  }

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

export type BreakTextMixinType = {
  breakEverywhere?: boolean
  breakWord?: boolean
}

export type DimensionMixinType = {
  height?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
  width?: number | string
}

export type QueryElementType = 'parent' | 'window'

export type QueryType = {
  element: QueryElementType
  maxHeight?: number
  maxWidth?: number
  minHeight?: number
  minWidth?: number
}

export type SpacingMixinType = {
  margin?: number | string
  marginBottom?: string | number
  marginLeft?: string | number
  marginRight?: string | number
  marginTop?: string | number
  padding?: number | string
  paddingBottom?: string | number
  paddingHorizontal?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  paddingVertical?: string | number
}

// eslint-disable-next-line sort-exports/sort-exports, @typescript-eslint/no-explicit-any
export const TEXT_ALIGN: Record<AlignType, Property.TextAlign> = {
  center: 'center',
  end: 'right',
  start: 'left',
}

export function getBorderRadius(
  props: BorderRadiusMixinType,
): number | string | undefined {
  if (props.borderRadius) {
    return getNumberOrString(props.borderRadius)
  }
  if (props.round) {
    return '50%'
  }
}

export function getDimensionMixin(
  props: DimensionMixinType,
): CSSObject {
  return {
    height: props.height ? getNumberOrString(props.height) : undefined,
    maxHeight: props.maxHeight
      ? getNumberOrString(props.maxHeight)
      : undefined,
    maxWidth: props.maxWidth
      ? getNumberOrString(props.maxWidth)
      : undefined,
    minHeight: props.minHeight
      ? getNumberOrString(props.minHeight)
      : undefined,
    minWidth: props.minWidth
      ? getNumberOrString(props.minWidth)
      : undefined,

    width: props.width ? getNumberOrString(props.width) : undefined,
  }
}

export function getNumberOrString(value: number | string): string {
  if (typeof value === 'number') {
    return `${value}px`
  } else {
    return value
  }
}

export function getNumberOrStringAspect(
  props: SpacingMixinType,
  aspects: Array<string>,
): string | undefined {
  for (const aspect of aspects) {
    if (aspect in props) {
      return getNumberOrString(
        props[aspect as keyof SpacingMixinType] as string | number,
      )
    }
  }
}

export function getOverflow(
  props: OverflowMixinType,
): Property.Overflow | undefined {
  if (props.crop) {
    return 'hidden'
  }

  if (props.scroll) {
    return 'auto'
  }
}

export function getOverflowAspect(
  props: OverflowMixinType,
  aspect: string,
): Property.OverflowX | Property.OverflowY | undefined {
  if (props[`crop${aspect}` as keyof OverflowMixinType]) {
    return 'hidden'
  }

  if (props[`scroll${aspect}` as keyof OverflowMixinType]) {
    return 'auto'
  }
}

export function getWordBreak(
  props: BreakTextMixinType,
): Property.WordBreak | undefined {
  if (props.breakWord) {
    return 'break-word'
  }
  if (props.breakEverywhere) {
    return 'break-all'
  }
}
