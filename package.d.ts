declare module '*.md'

type AppFont = {
  amharic: true
  arabic: true
  armenian: true
  bengali: true
  burmese: true
  chinese: true
  georgian: true
  hebrew: true
  hindi: true
  inuktitut: true
  japanese: true
  kannada: true
  khmer: true
  korean: true
  latin: true
  malayalam: true
  persian: true
  tamil: true
  text: true
  thai: true
  tibetan: true
}

declare module './components/kit/types' {
  interface Font extends AppFont {}
}
