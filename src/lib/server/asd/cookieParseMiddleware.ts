import { GetServerSidePropsContext } from "next";
import { cookieKeyName } from "@lib/globalConst";
import getCookieList from "@lib/utils/getCookieList";
import getToken from "../parse/getToken";

const cookieParseMiddleware = (context: GetServerSidePropsContext) => {
  const { url } = context.req;

  const path = url?.split("?")[0];

  const { ownerToken, token, user } = getToken(context, {
    decode: true,
  });

  const cookieList = getCookieList(context, {
    decode: true,
  });

  const locationCookie = cookieList.find(
    (cookie) => cookie.key === cookieKeyName.location
  );

  return { cookieList, path, ownerToken, token, user, locationCookie };
};

export default cookieParseMiddleware;
