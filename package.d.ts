import { AppFont } from '@configurations/fonts'
import { AppTheme } from '@configurations/theme'

declare module '*.md'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

declare module '@lancejpollard/kit' {
  interface Font extends AppFont {}
}
