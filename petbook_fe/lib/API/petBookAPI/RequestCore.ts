import { AxiosInstance, AxiosRequestHeaders } from "axios";
import { getQueryString, getUrl } from "../axios/xhrFunctions";

type AxiosMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// URL 적는 규칙 : BaseUrl 을 제외하고는 모두 /uri 형태로 시작

export default class RequestCore {
  public initBaseUrl = "";

  public commonUri = "";

  public client: AxiosInstance;

  constructor(initBaseUrl: string, commonUri: string, client: AxiosInstance) {
    this.initBaseUrl = initBaseUrl;
    this.commonUri = commonUri;
    this.client = client;
  }

  /**
   * @param uri? 요청할 url 마지막 부분입니다. 그 뒤로 각종 파라미터가 붙습니다.
   * @param pathParam? 요청할 path parameter 를 입력합니다.
   * @param params? 요청할 쿼리파라미터를 입력합니다.
   * @param headerObj? 요청할 헤더를 입력합니다
   * @param isNeedQuery? 쿼리파라미터 사용 여부 (기본값 : true)
   * @returns {requestURL, requestHeaders} : 조합을 전부 마친 URL 과 header 를 객체에 담아 리턴합니다.
   */
  public getParameters = <T>({
    uri,
    pathParam,
    params,
    headerObj,
    isNeedQuery = true,
  }: {
    uri?: string;
    pathParam?: string;
    params?: T;
    headerObj?: object;
    isNeedQuery?: boolean;
  }): {
    requestURL: string;
    requestHeaders: AxiosRequestHeaders;
  } => {
    return {
      requestURL: `${getUrl(
        `${typeof window === "undefined" ? this.initBaseUrl : ""}` +
          `${this.commonUri}` +
          `${uri || ""}` +
          `${pathParam || ""}`
      )}${isNeedQuery ? getQueryString(params) : ""}`,
      requestHeaders: { ...headerObj },
    };
  };

  /**
   *
   * @param requestMethod 정제된 URL 을 입력합니다.
   * @param requestURL 사용할 HTTP 메서드를 입력합니다.
   * @param requestHeaders? 정제된 header 를 입력합니다.
   * @param body? post 요청시 패킷에 담을 body 입니다.
   * @returns AxiosResponse 와 함께 요청한 Request 가 살짝 변경되어 들어옵니다.
   */
  public getResult = async <T, P = undefined>({
    requestMethod,
    requestURL,
    requestHeaders,
    body,
  }: {
    requestURL: string;
    requestMethod: AxiosMethod;
    requestHeaders?: AxiosRequestHeaders;
    body?: P;
  }) => {
    const response =
      this.client &&
      (await this.client.request<T>({
        method: requestMethod,
        url: requestURL,
        data: body,
        timeout: 10000,
        headers: requestHeaders,
      }));
    if (response && response.request) {
      delete response.request;
    }

    const result = {
      ...response,
      request: {
        requestMethod,
        requestURL,
        body,
        timeout: 10000,
        requestHeaders,
      },
    };

    return result;
  };
}
