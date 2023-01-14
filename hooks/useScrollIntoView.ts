/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'

export default function useScrollIntoView(
  dependencies: React.DependencyList = [],
) {
  const localRef = useCallback((node: HTMLElement) => {
    const timeout = setTimeout(() => node?.scrollIntoView(), 16)

    return () => {
      clearTimeout(timeout)
    }
  }, dependencies)

  return localRef
}
