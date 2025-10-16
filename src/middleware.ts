import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  // const auth = req.cookies.get("access_token")!;

if(pathname === "/"){
  return NextResponse.redirect(new URL("/home", req.url))
}
  // if (auth) {
  //   await fetch("https://failure-server.onrender.com/users/login", {
  //     cache: "force-cache"
  //   })
  // }

  return NextResponse.next();
};

export const config = {
  matcher: ["/message", "/auth/login", "/"],
};

export default middleware;
