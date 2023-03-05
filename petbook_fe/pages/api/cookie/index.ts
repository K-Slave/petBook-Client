import { NextApiRequest, NextApiResponse } from "next";
import CookieController from "./CookieController";

const cookieService = (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new CookieController();
  const { method } = req;

  try {
    switch (method) {
      case "GET": {
        return controller.getCookie(req, res);
      }

      case "POST": {
        return controller.setCookie(req, res);
      }

      case "DELETE": {
        return controller.removeCookie(req, res);
      }

      default: {
        throw new Error("지원하지 않는 메서드 입니다.");
      }
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default cookieService;
