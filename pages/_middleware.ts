import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const families = ['/mac', '/ipad', '/watch', '/iphone', '/airpods']

export function middleware(req: NextRequest) {
  
  if (req.nextUrl.pathname.startsWith('/family')) {
    return NextResponse.redirect(
      new URL(req.nextUrl.pathname.replace('/family', ''), req.url)
    )
  }
  if (families.includes(req.nextUrl.pathname)) {
    return NextResponse.rewrite(
      new URL(`/family${req.nextUrl.pathname}`, req.url)
    )
  }
}
