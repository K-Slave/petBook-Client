import { NextApiRequest, NextApiResponse } from "next";
import resMsg from "@lib/globalConst/responseMsg";
import CookieController from "../../../lib/server/controller/CookieController";

const cookieAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new CookieController(req, res);
  const { method } = req;

  try {
    switch (method) {
      case "GET": {
        return controller.read();
      }

      case "POST": {
        return controller.create();
      }

      case "PATCH": {
        return controller.update();
      }

      case "DELETE": {
        return controller.delete();
      }

      default: {
        throw new Error(resMsg.undefinedMethod);
      }
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default cookieAPI;
