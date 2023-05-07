import resMsg from "@lib/globalConst/responseMsg";
import AuthController from "@lib/server/controller/AuthController";
import localConsole from "@lib/utils/localConsole";
import { NextApiRequest, NextApiResponse } from "next";

const logoutAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new AuthController(req, res);

  const { method } = req;

  try {
    if (method !== "POST") {
      throw new Error(resMsg.undefinedMethod);
    }

    return controller.logout();
  } catch (err) {
    localConsole?.warn(err);

    return res.status(400).send(JSON.stringify(err));
  }
};

export default logoutAPI;
