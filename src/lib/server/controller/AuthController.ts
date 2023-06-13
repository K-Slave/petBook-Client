import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import AuthRequest from "@lib/API/petBookAPI/authRequest";
import { ProxyLoginRequest } from "@lib/API/petBookAPI/types/authRequest";
import localConsole from "@lib/utils/localConsole";
import CookieService from "../service/CookieService";
import { cookieKeyName } from "@lib/globalConst";

const authRequestOrigin = new AuthRequest(
  process.env.NEXT_PUBLIC_SPR_URL,
  "/api/v1",
  sprPetBookClient
);

export default class AuthController extends CookieService {
  public login = async () => {
    try {
      const { email, password, isSave } = this.nextReq
        .body as ProxyLoginRequest;

      const tokenResult = await authRequestOrigin.login({
        email,
        password,
      });

      localConsole?.log(tokenResult.response, "tokenResult.response");

      if (!tokenResult.response.data || !tokenResult.response.data.token) {
        throw new Error(
          "서버 에러. 응답에 토큰이 없습니다. 유효한 유저가 아니거나 API 서버에 문제가 있을수 있습니다."
        );
      }

      this.setCookie(
        cookieKeyName.userToken,
        tokenResult.response.data.token,
        isSave
      );

      this.nextRes.status(200).json({ token: tokenResult.response.data.token });

      return tokenResult.response.data.token;
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
