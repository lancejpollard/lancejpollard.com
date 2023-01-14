import React, { useEffect, useRef, useState } from 'react'
import { CSSProperties } from 'styled-components'
import { BaseViewPropsType, Theme } from './styles'

export type CompiledViewPropsType = BaseViewPropsType & {
  props: CSSProperties
}

export type DimensionsType = {
  height: number
  width: number
}

export function useViewProps(
  view: BaseViewPropsType | Array<BaseViewPropsType> | undefined,
  theme: Theme,
  converter: (theme: Theme, view: BaseViewPropsType) => CSSProperties,
): [CSSProperties, React.RefObject<HTMLElement>] {
  const [props, setProps] = useState<CSSProperties>({})
  const [propsArray, setPropsArray] =
    useState<Array<CompiledViewPropsType>>()
  const [parentDimensions, setParentDimensions] =
    useState<DimensionsType>()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const states: Array<BaseViewPropsType> = []
    if (view) {
      if (Array.isArray(view)) {
        states.push(...view)
      } else {
        states.push(view)
      }
    }

    let watchesParent = false

    let defaultChildProps: CSSProperties = {}
    const childPropsArray: Array<CompiledViewPropsType> = [
      { props: defaultChildProps },
    ]
    states.forEach(viewProps => {
      const childProps = converter(theme, viewProps)
      if (viewProps.query) {
        if (viewProps.query.element === 'window') {
          const mediaParts = []
          _.merge(defaultChildProps)
        } else {
          watchesParent = true
          childPropsArray.push({
            props: childProps,
            query: viewProps.query,
          })
        }
      } else {
        _.merge(defaultChildProps, childProps)
      }
    })

    childPropsArray.slice(1).forEach(childProps => {
      _.defaultsDeep(childProps, defaultChildProps)
    })

    let observer: ResizeObserver

    if (watchesParent && ref.current) {
      observer = new ResizeObserver(entries => {
        const element = entries[0]
        if (element) {
          const sizeInfo = element.borderBoxSize?.[0]
          const width = sizeInfo?.inlineSize ?? 0
          const height = sizeInfo?.blockSize ?? 0
          setParentDimensions({
            height,
            width,
          })
        }
      })

      observer.observe(ref.current)

      const rect = ref.current?.parentElement?.getBoundingClientRect()
      const width = rect?.width ?? 0
      const height = rect?.height ?? 0

      if (width && height) {
        setParentDimensions({
          height,
          width,
        })
      } else {
        setParentDimensions(undefined)
      }
    }

    setPropsArray(childPropsArray)

    return () => {
      observer?.disconnect()
    }
  }, [ref, converter, view])

  useEffect(() => {
    const defaultProps = propsArray?.[0]

    if (parentDimensions && propsArray) {
      const matchingProps = selectPropsMatchingDimensions(
        propsArray,
        parentDimensions,
      )

      if (defaultProps) {
        setProps(matchingProps ?? defaultProps.props)
      }
    } else {
      if (defaultProps) {
        setProps(defaultProps.props)
      }
    }
  }, [propsArray, parentDimensions, setProps])

  return [props, ref]
}

function selectPropsMatchingDimensions(
  array: Array<CompiledViewPropsType>,
  dimensions: DimensionsType,
): CSSProperties | undefined {
  for (const info of array) {
    const { query, props } = info
    if (query) {
      if (query.minWidth && query.maxWidth) {
        if (
          dimensions.width >= query.minWidth &&
          query.maxWidth < dimensions.width
        ) {
          return props
        }
      } else if (query.minWidth) {
        if (dimensions.width >= query.minWidth) {
          return props
        }
      } else if (query.maxWidth) {
        if (query.maxWidth < dimensions.width) {
          return props
        }
      }
    }
  }
}
