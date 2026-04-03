import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  // 1. Mengambil token dari sesi NextAuth
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLogin = !!token;

  if (request.nextUrl.pathname.startsWith("/profile")) {
    if (!isLogin) {
      // Jika belum login atau sudah logout, redirect ke home ("/")
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (isLogin) {
    return NextResponse.next();
  } else {
    // Jika belum login dan mengakses /produk atau /about, lempar ke halaman login
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/produk", "/about", "/profile"],
};