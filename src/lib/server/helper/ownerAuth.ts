import { cookieRequest } from "@lib/API/petBookAPI";
import { cookieKeyName, cookieOptions } from "@lib/globalConst";
import { GetServerSidePropsContext } from "next";

export const ownerAuthRedirect = (context: GetServerSidePropsContext) => {
  context.res?.writeHead(301, {
    Location: `/?owner_author=true`,
  });

  return context.res?.end();
};

const ownerAuth = (context: GetServerSidePropsContext) => {
  const key = cookieKeyName.owner;
  const value = process.env.NEXT_PUBLIC_OWNER;
  const isSave = true;

  context.res.setHeader(
    "Set-Cookie",
    `${key}=${
      key.includes(cookieKeyName.location) ? encodeURIComponent(value) : value
    }; Path=/; SameSite=Strict; ${
      isSave ? `Max-Age=${cookieOptions.loginMaxAge};` : ""
    } secure; ${key.includes(cookieKeyName.location) ? "" : "httpOnly;"}`
  );

  // 방문자 인증 체크 쿠키 세션동안 보관
  // context.res?.setHeader(
  //   "Set-Cookie",
  //   `${cookieKeyName.isOwnerCheck}=true; SameSite=Strict; secure; httpOnly;`
  // );
};

export default ownerAuth;
