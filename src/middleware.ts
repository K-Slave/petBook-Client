import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import MiddleWareService from "@lib/server/service/middleWareService";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  try {
    const service = new MiddleWareService(request);
    const { decodedTokenValue, userTokenCookieAction } =
      service._parseUserToken("EXEC");
    const { checkedOwnerToken, ownerTokenSessionAction } =
      service._checkOwnerToken();

    // 방문자 쿠키 (owner) 확인, 리다이렉트 처리
    // 현재는 / 가 아닌 페이지에서만 방문자 인증 처리
    // / 가 임시적으로 랜딩페이지 역할을 맡고 있기 때문
    if (
      request.nextUrl.pathname !== "/" &&
      (!checkedOwnerToken ||
        checkedOwnerToken !== process.env.NEXT_PUBLIC_OWNER)
    ) {
      return service._ownerRedirect();
    }

    // 로그인 한 유저 확인, /auth 로 접속할때 리다이렉트 처리
    if (request.nextUrl.pathname.startsWith("/auth") && decodedTokenValue) {
      return service._authRedirect();
    }

    const { response } = service.generateResponse();

    if (userTokenCookieAction) {
      userTokenCookieAction(response);
    }

    if (ownerTokenSessionAction) {
      ownerTokenSessionAction(response);
    }

    // 방문자 인증 쿠키 갱신 처리
    // 1. development 환경에서는 방문자 인증을 통과시킴
    // 2. production 환경에서는 NEXT_PUBLIC_OWNER 와 일치할 경우 쿠키 갱신
    // TODO : 매번 갱신 시키는거 비효율적임, 다른 쿠키와 겹치는 문제가 있었던듯 함.
    if (
      checkedOwnerToken === process.env.NEXT_PUBLIC_OWNER ||
      process.env.NODE_ENV === "development"
    ) {
      service._putOwnerCookie(response);
    }

    // 유저 토큰 쿠키 갱신 처리
    // 1. 디코딩된 토큰이 존재하면서
    // 2. 유저 토큰 쿠키가 존재할 경우
    if (decodedTokenValue && service.userToken) {
      service._putUserTokenCookie(response);
    }

    // 위치정보 쿠키 갱신 처리
    // 1. hospitalmap 페이지에서 접속할 하면서
    // 2. 위치정보 쿠키가 존재할 경우
    if (
      request.nextUrl.pathname.startsWith("/hospitalmap") &&
      service.locationCookie
    ) {
      service._putLocationCookie(response);
    }

    return response;
  } catch (error) {
    console.error(error, "middleware error");
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * api (API 라우트)
     * _next/static (정적 파일)
     * _next/image (이미지 최적화 파일)
     * favicon.ico (파비콘 파일)
     * 로 시작하지 않는 모든 요청 경로와 일치합니다.
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
