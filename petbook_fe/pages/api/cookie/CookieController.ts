import localConsole from "@lib/utils/localConsole";
import { NextApiRequest, NextApiResponse } from "next";
import cookies from "next-cookies";

export default class CookieController {
  public getCookie = (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const queryKey = req.query.key as string;

      if (!queryKey) {
        throw new Error("key 또는 value 가 없습니다.");
      }

      const cookieValue = cookies({ req })[queryKey] as any;

      if (!cookieValue) {
        throw new Error(
          `요청한 key 값 ${queryKey} 에 해당하는 쿠키가 존재하지 않습니다.`
        );
      }

      const result = {
        key: queryKey,
        value: cookieValue,
      };

      localConsole?.log(result, "resultvalue");
      res.status(200).json(result);

      return result;
    } catch (err) {
      return res.status(400).json(err);
    }
  };

  public getCookieList = (req: NextApiRequest, res: NextApiResponse) => {};

  public setCookie = (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const cookieKey = String(req.body.key);
      const cookieValue = JSON.stringify(req.body.value);

      localConsole?.log(`${cookieKey}=${cookieValue}`);

      res.setHeader(
        "Set-Cookie",
        `${cookieKey}=${encodeURIComponent(
          cookieValue
        )}; Path=/; SameSite=Strict; Max-Age=2592000; secure;`
      );

      const result = { key: cookieKey, value: req.body.value };

      res.status(200).json(result);

      return result;
    } catch (err) {
      localConsole?.warn(err);
      return res.status(400).json(err);
    }
  };

  public patchCookie = (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const key = req.body?.key;
      const value = req.body?.value;

      if (!key || !value) {
        throw new Error("key 또는 value 가 없습니다.");
      }

      const cookieKey = String(req.body.key);
      const cookieValue = cookies({ req })[cookieKey] as any;

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

      res.setHeader(
        "Set-Cookie",
        `${cookieKey}=${encodeURIComponent(
          resultValue
        )}; Path=/; SameSite=Strict; Max-Age=2592000; secure;`
      );

      const result = {
        key: cookieKey,
        value: patchValue,
      };

      res.status(200).json(result);

      return result;
    } catch (err) {
      localConsole?.warn(err);
      return res.status(400).json(err);
    }
  };

  public removeCookie = (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const cookieKey = String(req.body.key);

      res.setHeader("Set-Cookie", `${String(cookieKey)}=;`);

      const result = { success: true };

      res.status(200).json(result);

      return result;
    } catch (err) {
      return res.status(400).json(err);
    }
  };
}
