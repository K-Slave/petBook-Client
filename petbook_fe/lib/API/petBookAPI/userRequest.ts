import { AxiosInstance } from "axios";
import getParameters from "../axios/xhrFunctions";

import { UserCreateRequest } from "./types/userRequest";

export default class UserAPI {
  public uri = "";

  public client: AxiosInstance;

  private initBaseUrl = "";

  constructor(initBaseUrl: string, uri: string, client: AxiosInstance) {
    this.uri = uri;
    this.client = client;
    this.initBaseUrl = initBaseUrl;
  }

  /**
   *
   * 유저 회원가입 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.email POST 할 이메일 입니다.
   * @param body.nickname POST 할 닉네임 입니다.
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
        this.uri + "/register"
      }`,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.post<UserCreateRequest>(requestURL, body, {
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
