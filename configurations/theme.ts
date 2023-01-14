import colors from '@configurations/colors'
import animations from '@configurations/animations'
import images from '@configurations/images'
import anchors from '@configurations/anchors'
import gradients from '@configurations/gradients'
import { FONT } from '@configurations/styles'

const theme = {
  anchors,
  animations,
  colors,
  fonts: FONT,
  gradients,
  images,
}

export type AppTheme = typeof theme

export default theme
