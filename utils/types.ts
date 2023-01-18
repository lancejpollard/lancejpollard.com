import _ from 'lodash'

export type PageInfoType = {
  note?: string
  tab: string
  tags?: Array<string>
  url: string
}

export function isPageInfo(object: unknown): object is PageInfoType {
  return _.isObject(object) && 'url' in object && _.isString(object.url)
}

export function isRecord(
  object: unknown,
): object is Record<string, unknown> {
  return _.isObject(object)
}
