import RequestCore from "./RequestCore";

export default class UserRegistrationAPI extends RequestCore {
  /**
   *
   * 유저 이메일 가입여부 체크 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.email POST 할 이메일 입니다.
   */
  public registerCheckEmail = async (
    body: { email: string },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/check-email`,
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
}
