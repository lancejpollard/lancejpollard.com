import theme from '@configurations/theme'
import { CA2DRenderer, CA2D, RuleType, wait } from '@lancejpollard/ca'
import { Box } from '@lancejpollard/kit'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type CA2DPropsType = {
  h: number
  max: number
  move: Array<RuleType>
  steps: number
  w: number
}

const Container = Box({
  paddingVertical: 16,
  width: '100%',
})

const Canvas = Box({
  shadow: theme.shadows.big,
  width: '100%',
})

export default function CA2DComponent({
  h,
  w,
  max,
  move,
  steps = 100,
}: CA2DPropsType) {
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

    const ca = new CA2D({ h, max, move, w })
    const renderer = new CA2DRenderer(canvas)

    renderer.setDimensions({
      columnSize: ca.w,
      gap: 1,
      rowSize: ca.h,
      width: canvas.width,
    })

    const colors = [
      theme.colors.white2,
      theme.colors.green,
      theme.colors.purple,
      theme.colors.red,
    ]

    let i = 0

    start()

    async function start() {
      ca.seed()

      renderer.draw(ca, colors)

      // debugger

      while (i < steps) {
        await wait(100)
        ca.update()
        renderer.draw(ca, colors)
        i++
      }
    }

    return () => {
      i = steps
    }
  }, [h, w, max, move, steps, canvas])

  return (
    <Container id="ca-container">
      <Canvas
        as="canvas"
        ref={ref}
      />
    </Container>
  )
}
