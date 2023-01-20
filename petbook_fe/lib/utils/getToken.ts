import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import jwtDecode from "jwt-decode";
import { GetServerSidePropsContext, NextPageContext } from "next";
import cookies from "next-cookies";

interface Decode {
  id: string;
  email: string;
}

export default function getToken(
  ctx: NextPageContext | GetServerSidePropsContext,
  options: {
    decode: boolean;
  }
) {
  const allCookies = cookies(ctx);
  const token = allCookies?.petBookUser;
  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (options.decode) {
      const user = jwtDecode<Decode>(token);
      return {
        token,
        user,
      };
    }
  }
  return { token: token || null };
}
