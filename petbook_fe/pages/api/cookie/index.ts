import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "POST": {
        res.setHeader(
          "Set-Cookie",
          `${String(req.body.key)}=${String(
            req.body.value
          )}; Path=/; SameSite=Strict; Max-Age=2592000; secure; httpOnly`
        );
        return res.status(200).json({ success: true });
      }
      case "DELETE": {
        res.setHeader("Set-Cookie", `${String(req.body.key)}=;`);
        return res.status(200).json({ success: true });
      }
      default:
        break;
    }
  } catch (error) {
    return res
      .status(500)
      .json({ ...error, message: error.message, success: false });
  }
}
