import { NextResponse } from "next/server";
import * as jose from 'jose'
import { SECRET_KEY } from "./config/apiUrl";

export default async function middleware(request) {
  // Verifikasi TOKEN
  // Ada atau Tidak
  const token = request.cookies.get("token")?.value;
  // const privateKey = await jose.parseJwk(SECRET_KEY);

  // Decrypt the JWE
  console.log(token, 'yyy')
  const decoded = await jose.decodeJwt(token, SECRET_KEY)
  console.log(decoded)


  if (decoded.role === 'USER') {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
