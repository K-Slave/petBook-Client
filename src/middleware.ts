import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import {
  cookieKeyName,
  cookieOptions,
  headerKeyName,
  memoizedValue,
} from "@lib/globalConst";
import MiddleWareService from "@lib/server/middleWareService";
import { GlobalMiddleWareCache } from "@lib/types/common/MiddleWare";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  try {
    const service = new MiddleWareService(request);
    const { decodedTokenValue } = service._parseUserToken("EXEC");
    const { checkedOwnerToken } = service._checkOwnerToken();

    // 방문자 쿠키 없을시 리다이렉트 처리
    // 현재는 / 가 아닌 페이지에서만 방문자 인증 처리
    // / 가 임시적으로 랜딩페이지 역할을 맡고 있기 때문
    if (
      request.nextUrl.pathname !== "/" &&
      (!checkedOwnerToken ||
        checkedOwnerToken !== process.env.NEXT_PUBLIC_OWNER)
    ) {
      return service.redirect({
        location: "/?owner_author=true",
      });
    }

    // 로그인 유저가 /auth 로 접속할때 리다이렉트 처리
    if (request.nextUrl.pathname.startsWith("/auth") && decodedTokenValue) {
      const prevPath = request.cookies.get(memoizedValue.prevPath);

      return service.redirect({
        location: prevPath?.value || "/",
        setCookie: {
          name: memoizedValue.prevPath,
          value: request.nextUrl.pathname,
          options: {
            path: "/",
            maxAge: 0,
          },
        },
      });
    }

    const middlewareCache: GlobalMiddleWareCache = {
      device: service.device,
      agentName: service.agentName,
      decodedTokenValue: decodedTokenValue,
      checkedOwnerToken: service.checkedOwnerToken,
    };

    const response = NextResponse.next({
      headers: {
        [headerKeyName.middlewareCache]: JSON.stringify(middlewareCache),
      },
    });

    // 방문자 인증 쿠키 갱신 처리
    // 1. development 환경에서는 방문자 인증을 통과시킴
    // 2. production 환경에서는 NEXT_PUBLIC_OWNER 와 일치할 경우 쿠키 갱신
    // TODO : 매번 갱신 시키는거 비효율적임, 다른 쿠키와 겹치는 문제가 있었던듯 함.
    if (
      checkedOwnerToken === process.env.NEXT_PUBLIC_OWNER ||
      process.env.NODE_ENV === "development"
    ) {
      service.setCookie({
        response,
        name: cookieKeyName.owner,
        value: cookieKeyName.owner.includes(cookieKeyName.location)
          ? encodeURIComponent(process.env.NEXT_PUBLIC_OWNER)
          : process.env.NEXT_PUBLIC_OWNER,
        options: {
          path: "/",
          sameSite: "strict",
          secure: true,
          maxAge: cookieOptions.loginMaxAge,
          httpOnly: cookieKeyName.owner.includes(cookieKeyName.location)
            ? false
            : true,
        },
      });
    }

    // 유저 토큰 쿠키 갱신 처리
    // 1. 디코딩된 토큰이 존재하면서
    // 2. 유저 토큰 쿠키가 존재할 경우
    if (decodedTokenValue && service.userToken) {
      service.setCookie({
        response,
        name: cookieKeyName.userToken,
        value: service.userToken.value,
        options: {
          maxAge: cookieOptions.loginMaxAge,
        },
      });
    }

    if (
      request.nextUrl.pathname.startsWith("/hospitalmap") &&
      service.locationCookie
    ) {
      service.setCookie({
        response,
        name: cookieKeyName.location,
        value: encodeURIComponent(
          JSON.stringify(service.locationCookie.value || "")
        ),
        options: {
          maxAge: cookieOptions.oneMonth,
          secure: true,
          sameSite: "strict",
          path: "/",
        },
      });
    }

    return response;
  } catch (error) {
    console.error(error, "middleware error");
    return NextResponse.next();
  }
}
