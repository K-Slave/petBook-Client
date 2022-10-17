import { AppContext } from "next/app";

export default function tokenRedirect({ ctx, router }: AppContext) {
  const url = require("url");

  let redirectPathname = router.pathname.concat();

  // login 페이지 에서 접속했을경우, 메인 페이지로 보내줌.
  if (router.pathname.includes("login")) {
    redirectPathname = router.pathname.split("login").join("");
  }

  const { query } = url.parse(ctx.req?.url);
  const searchParams = new URLSearchParams(query);

  const access_token = router.query.access_token
    ? router.query.access_token
    : "";
  const refresh_token = router.query.refresh_token
    ? router.query.refresh_token
    : "";

  if (access_token) {
    searchParams.delete("access_token");
  }

  if (refresh_token) {
    searchParams.delete("refresh_token");
  }

  // searchParams 자체로는 path 와 ? 가 포함되지 않는다.
  // 따라서 재조합 과정이 필요.

  const redirectURL =
    redirectPathname +
    (searchParams.toString() ? `?${searchParams.toString()}` : "");

  ctx.res?.writeHead(301, {
    "Set-Cookie": [
      `access_token=${access_token}`,
      `refresh_token=${refresh_token}`,
    ],
    Location: `${redirectURL}`,
  });

  ctx.res?.end();

  return {};
}
