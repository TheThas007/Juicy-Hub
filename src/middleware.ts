import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if it's an admin path
  const isAdminPath = path.startsWith('/admin')
  const isApiPath = path.startsWith('/api/products') || path.startsWith('/api/gallery')

  if (isAdminPath || (isApiPath && request.method !== 'GET')) {
    const sessionCookie = request.cookies.get('admin_session')
    
    // If no valid cookie is found, block access
    if (!sessionCookie || sessionCookie.value !== 'authenticated') {
      if (isApiPath) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'content-type': 'application/json' }
        })
      }
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Allow the request to proceed
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/products/:path*',
    '/api/gallery/:path*'
  ]
}
