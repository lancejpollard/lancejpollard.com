import colors from '@configurations/colors'
import animations from '@configurations/animations'
import images from '@configurations/images'
import anchors from '@configurations/anchors'
import gradients from '@configurations/gradients'
import shadows from '@configurations/shadows'
import { FONT } from '@configurations/fonts'

const theme = {
  anchors,
  animations,
  colors,
  fonts: FONT,
  gradients,
  images,
  shadows,
}

export type AppTheme = typeof theme

export default theme
