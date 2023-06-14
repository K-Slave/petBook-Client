import { cookieKeyName, cookieOptions } from "@lib/globalConst";
import { GetServerSidePropsContext } from "next";

export const ownerAuthRedirect = (context: GetServerSidePropsContext) => {
  context.res?.writeHead(301, {
    Location: `/?owner_author=true`,
  });

  return context.res?.end();
};

const ownerAuth = (context: GetServerSidePropsContext) => {
  // 방문자 인증 쿠키 한달보관
  context.res?.setHeader(
    "Set-Cookie",
    `${cookieKeyName.owner}=${process.env.NEXT_PUBLIC_OWNER}; SameSite=Strict; Max-Age=${cookieOptions.oneMonth}; secure; httpOnly;`
  );

  // 방문자 인증 체크 쿠키 세션동안 보관
  context.res?.setHeader(
    "Set-Cookie",
    `${cookieKeyName.isOwnerCheck}=true; SameSite=Strict; secure; httpOnly;`
  );
};

export default ownerAuth;
