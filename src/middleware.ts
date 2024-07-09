import { NextRequest, NextResponse } from 'next/server'
import parser from 'ua-parser-js'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

const allowedViewport = new Set(['m', 'd', 'p'])

export default async function middleware(request: NextRequest) {
  const [, prevViewport, ...segments] = request.nextUrl.pathname.split('/')

  let newViewport = 'd'
  const agent = request.headers.get('user-agent')
  if (agent) {
    const ua = parser(agent)
    newViewport = ua.device.type === 'mobile' ? 'm' : 'd'
  }

  let viewport = prevViewport
  let newSegments = [...segments]
  if (!allowedViewport.has(viewport)) {
    viewport = newViewport
    newSegments = [prevViewport, ...segments]
  }
  newSegments = newSegments.filter((e) => e)

  const url = `/${viewport}/${newSegments.join('/')}`

  const newUlr = new URL(url, request.url)
  console.log('newUlr.pathname ===', newUlr.pathname)

  return NextResponse.rewrite(newUlr)
}
