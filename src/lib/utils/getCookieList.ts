import { GetServerSidePropsContext, NextPageContext } from "next";
import cookies from "next-cookies";
import localConsole from "./localConsole";

const getCookieList = (
  ctx: NextPageContext | GetServerSidePropsContext,
  options: {
    decode: boolean;
  }
) => {
  const allCookies = cookies(ctx);
  const keyList = Object.keys(allCookies);
  const valueList = Object.values(allCookies);
  let cookieList: {
    key: string;
    value: any;
  }[] = [];

  if (
    keyList.length > 0 &&
    valueList.length > 0 &&
    keyList.length === valueList.length
  ) {
    cookieList = keyList.map((key, idx) => {
      return {
        key,
        value: typeof valueList[idx] !== "undefined" ? valueList[idx] : "",
      };
    });
  }

  return cookieList;
};

export default getCookieList;
