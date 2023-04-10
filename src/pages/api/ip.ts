import { NextApiRequest, NextApiResponse } from "next";
import * as requestIp from "request-ip";

const ipService = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  try {
    if (method !== "GET") {
      throw new Error("지원하지 않는 메서드 입니다.");
    }
    const clientIp = requestIp.getClientIp(req);

    if (!clientIp) {
      throw new Error("IP 를 알수 없습니다.");
    }

    res.status(200).json({
      ip: clientIp,
    });

    return clientIp;
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default ipService;
