import { NextRequest, NextResponse } from "next/server";
import { memoizedValue } from "@lib/globalConst";

const loggedUserRedirect = (request: NextRequest) => {
  const prevPath = request.cookies.get(memoizedValue.prevPath);
  const response = NextResponse.redirect(prevPath?.value || "/");

  response.cookies.set(memoizedValue.prevPath, request.nextUrl.pathname, {
    path: "/",
    maxAge: 0,
  });

  return response;
};

export default loggedUserRedirect;
