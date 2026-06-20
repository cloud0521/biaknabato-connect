import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_VALUE,
} from "@/app/lib/admin-auth-constants";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authenticated =
    request.cookies.get(ADMIN_SESSION_COOKIE)?.value === ADMIN_SESSION_VALUE;

  const publicRoutePrefixes = [
    "/",
    "/announcements",
    "/services",
    "/events",
    "/directory",
    "/about",
    "/report",
  ];

  const publicRouteForAdmin =
    pathname === "/" ||
    publicRoutePrefixes
      .filter((route) => route !== "/")
      .some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (authenticated && publicRouteForAdmin) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (pathname === "/admin/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") && !authenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/announcements",
    "/services",
    "/services/:path*",
    "/events",
    "/directory",
    "/about",
    "/report",
    "/admin",
    "/admin/:path*",
  ],
};
