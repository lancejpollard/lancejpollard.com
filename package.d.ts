import { AppFont } from '@configurations/fonts'
import { AppTheme } from '@configurations/theme'

declare module '*.md'

declare module '*.glsl' {
  const content: string
  export default content
}

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}

declare module '@lancejpollard/kit' {
  interface Font extends AppFont {}
  interface Theme extends AppTheme {}
}
