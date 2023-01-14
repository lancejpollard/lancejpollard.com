/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'

export default function useScrollIntoView(
  dependencies: React.DependencyList = [],
) {
  const localRef = useCallback((node: HTMLElement) => {
    setTimeout(() => node?.scrollIntoView(), 100)
  }, dependencies)

  return localRef
}
