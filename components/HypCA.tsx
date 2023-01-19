import theme from '@configurations/theme'
import { Box } from '@lancejpollard/kit'
import React, { useEffect, useCallback, useState } from 'react'
import main from '@utils/hypCa'

type HypCAPropsType = {}

const Container = Box({
  paddingVertical: 16,
  width: '100%',
})

const Canvas = Box({
  shadow: theme.shadows.big,
  width: '100%',
})

export default function HypCA(props: HypCAPropsType) {
  const [canvas, setCanvas] = useState<HTMLCanvasElement>()
  const ref = useCallback(
    (node: HTMLCanvasElement) => {
      setCanvas(node ?? undefined)
    },
    [setCanvas],
  )

  useEffect(() => {
    if (!canvas) {
      return
    }

    main()
  }, [canvas])

  return (
    <Container>
      <Canvas
        id="canvas"
        as="canvas"
        ref={ref}
      />
    </Container>
  )
}
