import { AxiosError } from "axios";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import AuthRequest from "@lib/API/petBookAPI/authRequest";
import { ProxyLoginRequest } from "@lib/API/petBookAPI/types/authRequest";
import { cookieKeyName } from "@lib/globalConst";
import localConsole from "@lib/utils/localConsole";
import setResStatus from "@lib/utils/setResStatus";
import { getUserToken } from "../parse/getToken";
import CookieService from "../service/CookieService";

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

      if (
        tokenResult.response.data.result &&
        tokenResult.response.data.result.accessToken
      ) {
        const { cookieList, setHeader } = this.setCookieList({
          key: cookieKeyName.userToken,
          value: tokenResult.response.data.result.accessToken,
          isSave: true,
        });

        const { decodedTokenValue } = getUserToken(
          tokenResult.response.data.result.accessToken,
          {
            decode: "EXEC",
          }
        );

        if (decodedTokenValue) {
          cookieList.push({
            key: cookieKeyName.userInfo,
            value: encodeURIComponent(JSON.stringify(decodedTokenValue)),
            isSave: true,
          });

          setHeader();
        }
      }

      this.nextRes
        .status(tokenResult.response.status || 200)
        .json(tokenResult.response.data || null);
    } catch (err) {
      const error = err as AxiosError;

      localConsole?.log(err, "error");

      this.nextRes
        .status(setResStatus(error.response?.status))
        .json(error.response?.data || null);
    }
  };

  public logout = () => {
    const result = this.removeCookie(cookieKeyName.userToken);
    this.removeCookie(cookieKeyName.userInfo);
    this.nextRes.status(200).json(result);

    return result;
  };
}
