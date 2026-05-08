import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isForensicRoute = req.nextUrl.pathname.startsWith("/forensic");

  if (!token && (isAdminRoute || isForensicRoute)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}