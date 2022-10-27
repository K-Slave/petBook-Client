import { AxiosInstance } from "axios";
import getParameters from "../axios/xhrFunctions";

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
      uri: `${typeof window === "undefined" ? this.initBaseUrl : ""}${
        this.uri
      }/login`,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.post<string>(requestURL, body, {
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

  // TODO : 나중에 userAPI 새로 만들어야함
  /**
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.email POST 할 이메일 입니다.
   * @param body.password POST 할 비밀번호 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 유저 토큰을 반환합니다.
   */
  public register = async (
    body: {
      email: string;
      nickname: string;
      password: string;
    },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = getParameters({
      uri: `${typeof window === "undefined" ? this.initBaseUrl : ""}${
        this.uri
      }/user/register`,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.post<Record<string, never>>(requestURL, body, {
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
