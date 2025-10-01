import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


const middleware = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const auth = req.cookies.get("auth")!;
  if (pathname.startsWith("/message") && auth?.value !== "true") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
if(pathname === "/"){
  return NextResponse.redirect(new URL("/home", req.url))
}
  if (pathname === "/auth/login") {
    req.cookies.delete("auth");
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/message", "/auth/login", "/"],
};

export default middleware;
