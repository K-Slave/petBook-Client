import localConsole from "@lib/utils/localConsole";
import { NextApiRequest, NextApiResponse } from "next";

export default class CookieController {
  public getCookie = (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const cookieKey = String(req.body.key);
      const cookieValue = res.getHeader(cookieKey);

      if (cookieValue === undefined) {
        throw new Error(
          `요청한 key 값 ${cookieKey} 에 해당하는 쿠키가 존재하지 않습니다.`
        );
      }

      const result = {
        key: cookieKey,
        value: cookieValue.toString(),
      };

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
        )};Path=/;SameSite=Strict;Max-Age=2592000;secure;httpOnly`
      );

      const result = { key: cookieKey, value: req.body.value };

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
