import { AppContext } from "next/app";
import url from "url";

export default function tokenRedirect({ ctx, router }: AppContext) {
  // const url = require("url");

  let redirectPathname = router.pathname.concat();

  // login 페이지 에서 접속했을경우, 메인 페이지로 보내줌.
  if (router.pathname.includes("login")) {
    redirectPathname = router.pathname.split("login").join("");
  }

  const { query } = url.parse(ctx.req?.url ? ctx.req?.url : "");
  if (!query) return;
  const searchParams = new URLSearchParams(query);

  const accessToken = router.query.access_token
    ? (router.query.access_token as string)
    : "";
  const refreshToken = router.query.refresh_token
    ? (router.query.refresh_token as string)
    : "";

  if (accessToken) {
    searchParams.delete("access_token");
  }

  if (refreshToken) {
    searchParams.delete("refresh_token");
  }

  // searchParams 자체로는 path 와 ? 가 포함되지 않는다.
  // 따라서 재조합 과정이 필요.

  const redirectURL =
    redirectPathname +
    (searchParams.toString() ? `?${searchParams.toString()}` : "");

  ctx.res?.writeHead(301, {
    "Set-Cookie": [
      `access_token=${accessToken}`,
      `refresh_token=${refreshToken}`,
    ],
    Location: `${redirectURL}`,
  });

  ctx.res?.end();
}
