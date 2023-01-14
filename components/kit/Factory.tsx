/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash'
import React from 'react'
import styled, { CSSObject, useTheme } from 'styled-components'
import { BaseInputPropsType } from './styles'
import useProps from './useProps'

export type FactoryPropsType = {
  styledProps: CSSObject
}

export type InputPropsType<P> = P extends (...args: any) => any
  ? ReturnType<P>
  : P

export default function FactoryFactory<
  V extends object,
  // The Theme from the current context
  T extends object,
  // The properties from say the `Box`.
  P extends BaseInputPropsType<V> = BaseInputPropsType<V>,
  // The other props added by the template
  O extends React.ComponentPropsWithoutRef<any> = React.ComponentPropsWithoutRef<any>,
>(
  as: string,
  propNames: Array<string>,
  serializer: (theme: T, props: V) => CSSObject,
) {
  const propNamesMap = propNames.reduce<Record<string, boolean>>(
    (m, x) => {
      m[x] = true
      return m
    },
    {},
  )

  return function Factory(inputProps: InputPropsType<O & P>) {
    const Styled = styled.div<FactoryPropsType>(
      props => props.styledProps,
    )

    function Component(props: O, passedRef: React.ForwardedRef<any>) {
      const theme = useTheme() as T

      const [styledProps, elementProps, ref] = useProps<V, P, O, T>(
        propNamesMap,
        props,
        inputProps,
        theme,
        passedRef,
        serializer,
      )

      const node = (
        <Styled
          {...elementProps}
          ref={ref}
          styledProps={styledProps}
        />
      )

      return node
    }

    Component.toString = Styled.toString

    return React.forwardRef(Component)
  }
}
