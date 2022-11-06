import { AxiosInstance } from "axios";
import getParameters from "../axios/xhrFunctions";

import { AuthLoginRequest, AuthLoginCheckRequest } from "./types/authRequest";

// const { uri, client } = getAxiosItems();

export default class AuthAPI {
  public uri = "";

  public client: AxiosInstance;

  private initBaseUrl = "";

  constructor(initBaseUrl: string, uri: string, client: AxiosInstance) {
    this.uri = uri;
    this.client = client;
    this.initBaseUrl = initBaseUrl;
  }

  // public login_check = (params: any, config?: { headerObj?: object }) => {};

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
    },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = getParameters({
      uri: `${
        typeof window === "undefined" ? this.initBaseUrl : ""
      }${`${this.uri}/login`}`,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.post<AuthLoginRequest>(requestURL, body, {
        timeout: 10000,
        headers: requestHeaders,
      }));

    const result = {
      ...response,
      request: {
        body,
        config,
      },
    };

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
    const { requestURL, requestHeaders } = getParameters({
      uri: `${
        typeof window === "undefined" ? this.initBaseUrl : ""
      }${`${this.uri}/login-check`}`,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.post<AuthLoginCheckRequest>(requestURL, body, {
        timeout: 10000,
        headers: requestHeaders,
      }));

    const result = {
      ...response,
      request: {
        body,
        config,
      },
    };

    return result;
  };
}
