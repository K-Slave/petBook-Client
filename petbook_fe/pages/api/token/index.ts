import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case 'POST': {
                res.setHeader('Set-Cookie', `pekBookUser=${String(req.body.token)}; Path=/; SameSite=Strict; Max-Age=2592000; Secure; HttpOnly;`);
                return res.status(200).json({ success: true });
            }
            default:
                break;
        }
    } catch (error: any) {
        return res.status(500).json({ ...error, message: error.message, verify: false });
    }
}
