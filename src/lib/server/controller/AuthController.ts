import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import AuthRequest from "@lib/API/petBookAPI/authRequest";
import { AuthLoginRequest } from "@lib/API/petBookAPI/types/authRequest";
import localConsole from "@lib/utils/localConsole";
import CookieService from "../service/CookieService";
import { cookieKeyName } from "@lib/globalConst";

const authRequestOrigin = new AuthRequest(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1",
  sprPetBookClient
);

export default class AuthController extends CookieService {
  public login = async () => {
    try {
      const { email, password } = this.nextReq.body as AuthLoginRequest;

      const tokenResult = await authRequestOrigin.login({ email, password });

      if (!tokenResult.response.data || !tokenResult.response.data.token) {
        throw new Error(
          "서버 에러. 응답에 토큰이 없습니다. 유효한 유저가 아니거나 API 서버에 문제가 있을수 있습니다."
        );
      }

      const cookieResult = this.setCookie(
        cookieKeyName.userToken,
        tokenResult.response.data.token
      );

      this.nextRes.status(200).json({ token: cookieResult.value });

      return cookieResult;
    } catch (err) {
      localConsole?.warn(err);
      return this.nextRes.status(400).json(JSON.stringify(err));
    }
  };

  public logout = () => {
    const result = this.removeCookie(cookieKeyName.userToken);
    this.nextRes.status(200).json(result);

    return result;
  };
}
