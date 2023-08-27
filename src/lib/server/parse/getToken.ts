import jwtDecode from "jwt-decode";
import { GetServerSidePropsContext, NextPageContext } from "next";
import cookies from "next-cookies";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { cookieKeyName } from "@lib/globalConst";
import { DecodeOptions } from "@lib/types/common/Token";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";

export const getUserToken = (
  userToken: string,
  options: {
    decode: DecodeOptions;
  }
) => {
  if (options.decode === "EXEC") {
    const decodedTokenValue = jwtDecode<DecodedUserInfo>(userToken);
    return {
      userToken,
      decodedTokenValue,
    };
  }

  return {
    userToken,
    decodedTokenValue: null,
  };
};

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
