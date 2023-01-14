import React from 'react'
import styled, { CSSProperties, useTheme } from 'styled-components'
import { Theme } from './styles'
import useProps from './useProps'

export type BasicInputPropsType<T> = T | Array<T>

export type FactoryStyledPropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styledProps: any
}

export type InputPropsFunctionType<I, T> = (props: I) => T

export type InputPropsType<T, I> = T extends Function
  ? InputPropsFunctionType<I, T>
  : T

export default function FactoryFactory<T>(
  as: string,
  propNames: Array<string>,
  serializer: (theme: Theme, props: T) => CSSProperties,
) {
  const propNamesMap = propNames.reduce<Record<string, boolean>>(
    (m, x) => {
      m[x] = true
      return m
    },
    {},
  )

  return function Factory<I extends object>(
    inputProps: InputPropsType<T, I>,
  ) {
    const isPropsFunction = typeof inputProps === 'function'
    const Styled = styled.div<FactoryStyledPropsType>(
      props => props.styledProps,
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Component(props: I, passedRef: React.ForwardedRef<any>) {
      const actualProps = isPropsFunction
        ? (inputProps as InputPropsFunctionType<I, T>)(props)
        : props

      const elementProps: Record<string, unknown> = {}
      Object.keys(props).forEach(key => {
        if (!(key in propNamesMap)) {
          elementProps[key] = props[key]
        }
      })

      const theme = useTheme()

      const [styledProps, ref] = useProps(
        actualProps,
        theme,
        passedRef,
        serializer,
      )

      return (
        <Styled
          {...elementProps}
          ref={ref}
          styledProps={styledProps}
        />
      )
    }

    Component.toString = Styled.toString

    return React.forwardRef(Component)
  }
}
