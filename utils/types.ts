export type PageInfoType = {
  image?: string
  note?: string
  tab: string
  tags?: Array<string>
  url: string
}

export function isPageInfo(object: unknown): object is PageInfoType {
  return (
    object != null &&
    typeof object === 'object' &&
    'url' in object &&
    typeof object.url === 'string'
  )
}

export function isRecord(
  object: unknown,
): object is Record<string, unknown> {
  return object != null && typeof object === 'object'
}
