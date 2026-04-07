import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

export function mainMiddleware(request: NextRequest) {
  // Tidak perlu getToken lagi di sini, sudah dihandle withAuth
  return NextResponse.next();
}

export default withAuth(mainMiddleware, [
  "/produk",
  "/about",
  "/profile",
  "/admin",
]);

export const config = {
  matcher: ["/profile", "/admin"],
};