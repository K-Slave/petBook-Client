import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { cookieKeyName } from "@lib/globalConst";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import jwtDecode from "jwt-decode";
import { GetServerSidePropsContext, NextPageContext } from "next";
import cookies from "next-cookies";

export default function getToken(
  ctx: NextPageContext | GetServerSidePropsContext,
  options: {
    decode: boolean;
  }
) {
  const allCookies = cookies(ctx);
  const token = allCookies[cookieKeyName.userToken];
  const ownerToken = allCookies[cookieKeyName.owner];

  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (options.decode) {
      const user = jwtDecode<DecodedUserInfo>(token);
      return {
        token,
        user,
        ownerToken:
          ownerToken === process.env.NEXT_PUBLIC_OWNER ? ownerToken : null,
      };
    }
  }

  // else if (typeof window === "undefined") {
  //   sprPetBookClient.defaults.headers.common.Authorization = "";
  // }

  return {
    token: token || null,
    user: null,
    ownerToken:
      ownerToken === process.env.NEXT_PUBLIC_OWNER ? ownerToken : null,
  };
}
