import { NextApiRequest, NextApiResponse } from "next";
import AuthController from "@lib/server/controller/AuthController";

const loginAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new AuthController(req, res);

  const { method } = req;

  return controller.login();

  // try {
  //   if (method !== 'POST') {
  //     throw new Error(resMsg.undefinedMethod);
  //   }

  //   return controller.login();
  // } catch (err) {
  // return res.status(400).json(JSON.stringify(err));
  // }
};

export default loginAPI;
