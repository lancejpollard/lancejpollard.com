import _ from 'lodash'
import {
  AbsolutePositionMixinType,
  ALIGN,
  AlignType,
  BaseInputPropsType,
  BorderRadiusMixinType,
  DimensionMixinType,
  DIRECTION,
  DirectionType,
  getBorderRadius,
  getNumberOrString,
  getNumberOrStringAspect,
  getOverflow,
  getOverflowAspect,
  JUSTIFY,
  JustifyType,
  OverflowMixinType,
  PositionType,
  SpacingMixinType,
  Theme,
} from '@components/kit/styles'
import { CSSProperties } from 'styled-components'
import Factory from './Factory'

export type BoxPropsType = BaseInputPropsType<BoxViewPropsType>

export type BoxViewPropsType = DimensionMixinType &
  SpacingMixinType &
  OverflowMixinType &
  BorderRadiusMixinType &
  AbsolutePositionMixinType & {
    align?: AlignType
    animation?: string
    direction?: DirectionType
    fill?: string
    flex?: number | string
    gap?: string | number
    grow?: boolean
    hGap?: string | number
    invisible?: boolean
    justify?: JustifyType
    position?: PositionType
    shrink?: boolean
    unselectable?: boolean
    vGap?: string | number
    wrap?: boolean
  }

export const PROP_LIST: Array<string> = [
  'align',
  'animation',
  'direction',
  'fill',
  'flex',
  'gap',
  'grow',
  'hGap',
  'invisible',
  'justify',
  'position',
  'shrink',
  'unselectable',
  'vGap',
  'wrap',
  'bottom',
  'left',
  'right',
  'top',
  'borderRadius',
  'round',
  'queries',
  'selectors',
  'crop',
  'cropX',
  'cropY',
  'scroll',
  'scrollX',
  'scrollY',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'padding',
  'paddingBottom',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingVertical',
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'width',
]

export default Factory<BoxViewPropsType>(
  'div',
  PROP_LIST,
  serializeViewProps,
)

function serializeViewProps(
  theme: Theme,
  stateProps: BoxViewPropsType,
): CSSProperties {
  return {
    alignItems: stateProps.align ? ALIGN[stateProps.align] : undefined,
    animation: stateProps.animation ? stateProps.animation : undefined,
    backgroundColor: stateProps.fill ? stateProps.fill : undefined,
    borderRadius: getBorderRadius(stateProps),
    bottom: stateProps.bottom
      ? getNumberOrString(stateProps.bottom)
      : undefined,
    columnGap: stateProps.hGap
      ? getNumberOrString(stateProps.hGap)
      : undefined,
    display: 'flex',
    flex: stateProps.flex ? stateProps.flex : undefined,
    flexDirection: stateProps.direction
      ? DIRECTION[stateProps.direction]
      : undefined,
    flexGrow: stateProps.grow ? 1 : undefined,
    flexShrink: stateProps.shrink ? 1 : 0,
    flexWrap: stateProps.wrap ? 'wrap' : undefined,
    gap: stateProps.gap ? getNumberOrString(stateProps.gap) : undefined,
    height: stateProps.height
      ? getNumberOrString(stateProps.height)
      : undefined,
    justifyContent: stateProps.justify
      ? JUSTIFY[stateProps.justify]
      : undefined,
    left: stateProps.left
      ? getNumberOrString(stateProps.left)
      : undefined,
    margin: stateProps.margin
      ? getNumberOrString(stateProps.margin)
      : undefined,
    marginBottom: getNumberOrStringAspect(stateProps, [
      'marginBottom',
      'marginVertical',
    ]),
    marginLeft: getNumberOrStringAspect(stateProps, [
      'marginLeft',
      'marginHorizontal',
    ]),
    marginRight: getNumberOrStringAspect(stateProps, [
      'marginRight',
      'marginHorizontal',
    ]),
    marginTop: getNumberOrStringAspect(stateProps, [
      'marginTop',
      'marginVertical',
    ]),
    maxHeight: stateProps.maxHeight
      ? getNumberOrString(stateProps.maxHeight)
      : undefined,
    maxWidth: stateProps.maxWidth
      ? getNumberOrString(stateProps.maxWidth)
      : undefined,
    minHeight: stateProps.minHeight
      ? getNumberOrString(stateProps.minHeight)
      : undefined,
    minWidth: stateProps.minWidth
      ? getNumberOrString(stateProps.minWidth)
      : undefined,
    overflow: getOverflow(stateProps),
    overflowX: getOverflowAspect(stateProps, 'X'),
    overflowY: getOverflowAspect(stateProps, 'Y'),
    padding: stateProps.padding
      ? getNumberOrString(stateProps.padding)
      : undefined,
    paddingBottom: getNumberOrStringAspect(stateProps, [
      'paddingBottom',
      'paddingVertical',
    ]),
    paddingLeft: getNumberOrStringAspect(stateProps, [
      'paddingLeft',
      'paddingHorizontal',
    ]),
    paddingRight: getNumberOrStringAspect(stateProps, [
      'paddingRight',
      'paddingHorizontal',
    ]),
    paddingTop: getNumberOrStringAspect(stateProps, [
      'paddingTop',
      'paddingVertical',
    ]),
    position: stateProps.position ? stateProps.position : undefined,
    right: stateProps.right
      ? getNumberOrString(stateProps.right)
      : undefined,
    rowGap: stateProps.vGap
      ? getNumberOrString(stateProps.vGap)
      : undefined,
    top: stateProps.top ? getNumberOrString(stateProps.top) : undefined,
    visibility: stateProps.invisible ? 'hidden' : undefined,
    width: stateProps.width
      ? getNumberOrString(stateProps.width)
      : undefined,
  }
}
