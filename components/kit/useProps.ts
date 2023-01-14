import _ from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { CSSProperties } from 'styled-components'
import { BaseInputPropsType, QueryType, Theme } from './styles'

export type CompiledViewPropsType = {
  match?: QueryType
  props: CSSProperties
}

export type DimensionsType = {
  height: number
  width: number
}

export default function useProps<T extends object>(
  input: BaseInputPropsType<T> | undefined,
  theme: Theme,
  converter: (
    theme: Theme,
    input: BaseInputPropsType<T>,
  ) => CSSProperties,
): [CSSProperties, React.RefObject<HTMLElement>] {
  const [props, setProps] = useState<CSSProperties>({})
  const [propsArray, setPropsArray] =
    useState<Array<CompiledViewPropsType>>()
  const [parentDimensions, setParentDimensions] =
    useState<DimensionsType>()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let watchesParent = false

    let defaultChildProps: CSSProperties = {}
    const childPropsArray: Array<CompiledViewPropsType> = [
      { props: defaultChildProps },
    ]

    if (input) {
      const childProps = converter(theme, input)
      _.merge(defaultChildProps, childProps)

      if (input.queries) {
        input.queries.forEach(query => {
          const childProps = converter(theme, query)
          if (query.match) {
            if (query.match.element === 'window') {
              const mediaParts = []
              _.merge(defaultChildProps)
            } else {
              watchesParent = true
              childPropsArray.push({
                match: query.match,
                props: childProps,
              })
            }
          }
        })
      }
    }

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
  }, [ref, converter, input, theme])

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
    const { match, props } = info
    if (match) {
      if (match.minWidth && match.maxWidth) {
        if (
          dimensions.width >= match.minWidth &&
          match.maxWidth < dimensions.width
        ) {
          return props
        }
      } else if (match.minWidth) {
        if (dimensions.width >= match.minWidth) {
          return props
        }
      } else if (match.maxWidth) {
        if (match.maxWidth < dimensions.width) {
          return props
        }
      }
    }
  }
}
