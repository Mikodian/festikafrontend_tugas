import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const tokenCookies = request.cookies.get("TOKEN");
  const isLoginPage = request.url.startsWith("/login");
  const isRegisterPage = request.url.startsWith("/register");

  if (!tokenCookies) {
    if (!isLoginPage && !isRegisterPage) {
      // Redirect to login page if not logged in and not on login or sign up page
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!login|register|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
