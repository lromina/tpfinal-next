import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const isLogged = false;

    //cookie nos permite saber si un usuario esta logueado o no 

    console.log('aca')

    if (isLogged){
        return NextResponse.next()
    }else {
        return NextResponse.redirect (new URL('/login', request.url))
    }


}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}