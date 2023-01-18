/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import theme from '@configurations/theme'
import pages from '@configurations/pages'
import SocialTitle from '@components/SocialTitle'
import { isRecord, PageInfoType } from '@utils/types'

export const config = {
  runtime: 'edge',
}

// Make sure the font exists in the specified path:
const font = fetch(
  new URL('../../..//public/fonts/code.ttf', import.meta.url),
).then(res => res.arrayBuffer())

export default async function handler({ url }: NextRequest) {
  const fontData = await font
  const parsedUrl = new URL(url)
  const generateUrl = (path: string): string => {
    const full = [parsedUrl.hostname, parsedUrl.port].join(':')
    return `${parsedUrl.protocol}//${full}${path}`
  }
  const path = parsedUrl.searchParams.get('path') ?? '/'

  const parts = path.slice(1).split('/')

  let pageInfo: Record<string, unknown> | unknown | undefined = pages

  parts.forEach(part => {
    if (isRecord(pageInfo)) {
      pageInfo = pageInfo[part]
    } else {
      pageInfo = undefined
    }
  })

  const page = pageInfo ? (pageInfo as PageInfoType) : pages

  const content = (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"text"',
        fontSize: 48,
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <img
        src={generateUrl(theme.images.face)}
        width={400 * 0.85}
        height={400}
        alt="Rabbit face"
      />
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: '"text"',
          fontSize: 48,
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <SocialTitle
          title={page.tab}
          author="Lance Pollard"
        />
      </div>
    </div>
  )

  try {
    return new ImageResponse(content, {
      fonts: [
        {
          data: fontData,
          name: 'text',
          style: 'normal',
        },
      ],
      height: 640,
      width: 1280,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e instanceof Error) {
      console.log(`${e.stack}`)
      return new Response(`Failed to generate the image`, {
        status: 500,
      })
    }
  }
}
