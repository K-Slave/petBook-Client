import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import keyName from "@lib/commonValue/keyName";
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
  const token = allCookies[keyName.userToken];
  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (options.decode) {
      const user = jwtDecode<DecodedUserInfo>(token);
      return {
        token,
        user,
      };
    }
  }
  return { token: token || null };
}
