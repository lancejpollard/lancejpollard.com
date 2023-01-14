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
  serializer: (theme: Theme, props: T) => CSSProperties,
) {
  return function Factory<I>(inputProps: InputPropsType<T, I>) {
    const isPropsFunction = typeof inputProps === 'function'
    const Styled = styled.div<FactoryStyledPropsType>(
      props => props.styledProps,
    )

    function Component(props: I) {
      const actualProps = isPropsFunction
        ? (inputProps as InputPropsFunctionType<I, T>)(props)
        : props
      const theme = useTheme()

      const [styledProps, ref] = useProps(
        actualProps,
        theme,
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

    return Component
  }
}
