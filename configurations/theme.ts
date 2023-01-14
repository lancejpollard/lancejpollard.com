import colors from '@configurations/colors'
import fonts from '@configurations/fonts'
import animations from '@configurations/animations'
import images from '@configurations/images'
import anchors from '@configurations/anchors'
import gradients from '@configurations/gradients'
import { Theme } from '@components/kit/styles'

const theme = {
  anchors,
  animations,
  colors,
  fonts,
  gradients,
  images,
}

export type AppTheme = typeof theme

export default theme

export interface DefaultTheme extends Theme {}

declare module 'styled-components' {
  export interface Theme extends AppTheme {}
}
