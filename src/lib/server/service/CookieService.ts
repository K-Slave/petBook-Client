import { NextApiRequest, NextApiResponse } from "next";
import cookies from "next-cookies";
import { cookieKeyName, cookieOptions } from "@lib/globalConst";
import localConsole from "@lib/utils/localConsole";

export default class CookieService {
  public nextReq: NextApiRequest;

  public nextRes: NextApiResponse;

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.nextReq = req;
    this.nextRes = res;
  }

  public getCookie = () => {
    const queryKey = this.nextReq.query.key as string;

    if (!queryKey) {
      throw new Error("key 또는 value 가 없습니다.");
    }

    const cookieValue = cookies({ req: this.nextReq })[queryKey] as any;

    if (!cookieValue) {
      throw new Error(
        `요청한 key 값 ${queryKey} 에 해당하는 쿠키가 존재하지 않습니다.`
      );
    }

    return {
      key: queryKey,
      value: cookieValue,
    };
  };

  public setCookie = (key: string, value: string, isSave?: boolean) => {
    const maxAge = isSave ? `Max-Age=${cookieOptions.loginMaxAge}; ` : "";
    const httpOnly = key.includes(cookieKeyName.location) ? "" : "httpOnly;";
    const contentValue = key.includes(cookieKeyName.location)
      ? encodeURIComponent(value)
      : value;
    const cookieContent = `${key}=${contentValue}; Path=/; SameSite=Strict; secure; ${maxAge}${httpOnly}`;

    localConsole?.log(cookieContent, "cookieContent");

    this.nextRes.setHeader("Set-Cookie", cookieContent);

    return { key, value, isSave };
  };

  // closure 를 이용한 배열 쿠키set
  public setCookieList = ({
    key,
    value,
    isSave,
  }: {
    key: string;
    value: string;
    isSave?: boolean;
  }) => {
    const cookieList: { key: string; value: string; isSave?: boolean }[] = [];

    cookieList.push({
      key,
      value,
      isSave,
    });

    const setHeader = () => {
      const convHeader = cookieList.map((cookie) => {
        const maxAge = isSave ? `Max-Age=${cookieOptions.loginMaxAge}; ` : "";
        const httpOnly = key.includes(cookieKeyName.location)
          ? ""
          : "httpOnly;";
        const contentValue = key.includes(cookieKeyName.location)
          ? encodeURIComponent(value)
          : value;
        const cookieContent = `${key}=${contentValue}; Path=/; SameSite=Strict; secure; ${maxAge}${httpOnly}`;

        return cookieContent;
      });

      this.nextRes.setHeader("Set-Cookie", convHeader);
    };

    return { cookieList, setHeader };
  };

  public patchCookie = () => {
    const key = this.nextReq.body?.key;
    const value = this.nextReq.body?.value;

    if (!key || !value) {
      throw new Error("key 또는 value 가 없습니다.");
    }

    const cookieKey = String(this.nextReq.body.key);
    const cookieValue = cookies({ req: this.nextReq })[cookieKey] as any;

    if (!cookieValue) {
      throw new Error(
        `요청한 key 값 ${cookieKey} 에 해당하는 쿠키가 존재하지 않습니다.`
      );
    }

    const patchValue = {
      ...cookieValue,
      ...value,
    };

    const resultValue = JSON.stringify(patchValue);

    this.nextRes.setHeader(
      "Set-Cookie",
      `${cookieKey}=${encodeURIComponent(
        resultValue
      )}; Path=/; SameSite=Strict; Max-Age=2592000; secure; ${
        cookieKey.includes(cookieKeyName.location) ? "" : "httpOnly;"
      }`
    );

    return {
      key: cookieKey,
      value: patchValue,
    };
  };

  public removeCookie = (key: string) => {
    if (!key) {
      throw new Error("key 가 없습니다.");
    }

    const cookieValue = cookies({ req: this.nextReq })[key] as any;

    if (!cookieValue) {
      throw new Error(
        `요청한 key 값 ${key} 에 해당하는 쿠키가 존재하지 않습니다.`
      );
    }

    this.nextRes.setHeader("Set-Cookie", `${key}=; Path=/; Max-Age=-1;`);

    return { success: true };
  };
}
