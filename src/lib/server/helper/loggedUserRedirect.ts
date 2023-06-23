import { memoizedValue } from "@lib/globalConst";
import { GetServerSidePropsContext } from "next";
import cookies from "next-cookies";

const loggedUserRedirect = (context: GetServerSidePropsContext) => {
  const allCookies = cookies(context);
  const prevPath = allCookies[memoizedValue.prevPath];

  context.res.setHeader(
    "Set-Cookie",
    `${memoizedValue.prevPath}=; Path=/; Max-Age=0;`
  );

  context.res?.writeHead(301, {
    Location: prevPath || `/`,
  });

  return context.res?.end();
};

export default loggedUserRedirect;
