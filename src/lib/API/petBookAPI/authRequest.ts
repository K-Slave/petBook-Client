import RequestCore from "./RequestCore";
import {
  AuthLoginError,
  AuthLoginRequest,
  AuthLoginSuccess,
  AuthLogoutResponse,
} from "./types/authRequest";

export default class AuthRequest extends RequestCore {
  /**
   *
   * 로그인 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.email POST 할 이메일 입니다.
   * @param body.password POST 할 비밀번호 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 유저 토큰을 반환합니다.
   */
  public login = async (
    body: {
      email: string;
      password: string;
      isSave?: boolean;
    },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/login",
      headerObj: config && config.headerObj,
    });

    // AuthLoginError
    const result = await this.getResult<AuthLoginSuccess, AuthLoginRequest>({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  /**
   *
   * 로그인체크 API
   * @param body
   * @param body.userId
   * @param body.enabled
   * @param body.username
   * @param config
   * @returns 헤더 토큰 추가후 요청후 로그인 확인시 API 결과 200반환
   */
  public login_check = async (
    body: {
      userId: number;
      enabled: boolean;
      username: string;
    },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/login-check",
      headerObj: config && config.headerObj,
    });

    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  public logout = async (config?: { headerObj?: object }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/logout",
      headerObj: config && config.headerObj,
    });

    const result = await this.getResult<AuthLogoutResponse, undefined>({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
