import resMsg from "@lib/globalConst/responseMsg";
import AuthController from "@lib/server/controller/AuthController";
import { NextApiRequest, NextApiResponse } from "next";

const loginAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new AuthController(req, res);

  const { method } = req;

  try {
    if (method !== "POST") {
      throw new Error(resMsg.undefinedMethod);
    }

    return controller.login();
  } catch (err) {
    return res.status(400).json(JSON.stringify(err));
  }
};

export default loginAPI;
