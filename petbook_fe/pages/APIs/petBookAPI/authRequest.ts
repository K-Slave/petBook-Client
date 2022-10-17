import { sprpetbookClient } from "../axios/axiosClient";
import getParameters, { getAxiosItems } from "../axios/xhrFunctions";

const { uri, client } = getAxiosItems("/api/v1", sprpetbookClient);

export default class AuthAPI {
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }

    return this.instance;
  }

  instance = this;

  async login_check(params: any, config?: { headerObj?: object }) {}

  /**
   *
   * 로그인 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.email POST 할 이메일 입니다.
   * @param body.password POST 할 비밀번호 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 유저 토큰을 반환합니다.
   */
  async login(
    body: {
      email: string;
      password: string;
    },
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/login",
      headerObj: config?.headerObj,
    });

    const response = await client.post<string>(requestURL, body, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        body: body,
        config: config,
      },
    };

    return result;
  }

  // TODO : 나중에 userAPI 새로 만들어야함
  /**
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.email POST 할 이메일 입니다.
   * @param body.password POST 할 비밀번호 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 유저 토큰을 반환합니다.
   */
  async register(
    body: {
      email: string;
      nickname: string;
      password: string;
    },
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/user/register",
      headerObj: config?.headerObj,
    });

    const response = await client.post<{}>(requestURL, body, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        body: body,
        config: config,
      },
    };

    return result;
  }
}
