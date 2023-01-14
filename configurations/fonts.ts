import { Font } from '@lancejpollard/kit'

export type AppFont = {
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

export const FONT: Record<keyof Font, string> = {
  amharic: 'Amharic',
  arabic: 'Arabic',
  arial: 'Arial',
  armenian: 'Armenian',
  bengali: 'Bengali',
  burmese: 'Burmese',
  chinese: 'Chinese',
  georgian: 'Georgian',
  hebrew: 'Hebrew',
  hindi: 'Hindi',
  inuktitut: 'Inuktitut',
  japanese: 'Japanese',
  kannada: 'Kannada',
  khmer: 'Khmer',
  korean: 'Korean',
  latin: 'Latin',
  malayalam: 'Malayalam',
  persian: 'Persian',
  tamil: 'Tamil',
  text: 'text',
  thai: 'Thai',
  tibetan: 'Tibetan',
}

export type FontDataType = [string, string, string]

const FONTS: Record<string, FontDataType> = {
  amharic: ['/fonts/screen/amharic.ttf', 'ጥበብ', 'Amharic'],
  arabic: ['/fonts/screen/arabic.ttf', 'حديقة', 'Arabic'],
  burmese: ['/fonts/screen/myanmar.ttf', 'ပင်လယ်', 'Burmese'],
  canadian: ['/fonts/screen/canadian.ttf', 'ᕿᓚᓗᒐᖅ', 'Canadian'],
  chinese: [
    '/fonts/screen/chinese-(simplified).otf',
    '晓',
    'CJKSimplified',
  ],
  georgian: ['/fonts/screen/georgian.ttf', 'ფრჩხილი', 'Georgian'],
  he: ['/fonts/screen/hebrew.ttf', 'אזהרה', 'Hebrew'],
  hindi: ['/fonts/screen/devanagari.ttf', 'टोकरी', 'Devanagari'],
  japanese: ['/fonts/screen/japanese.otf', 'ばった', 'Japanese'],
  latin: ['/fonts/screen/latin.otf', 'IEAOU', 'Latin'],
  tamil: ['/fonts/screen/tamil.ttf', 'புஷ்பம்', 'Tamil'],
  thai: ['/fonts/screen/thai.ttf', 'บ้าน', 'Thai'],
  tibetan: ['/fonts/screen/tibetan.ttf', 'སེང', 'Tibetan'],
}

export default FONTS
