import {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { getQueryString, getUrl } from "../axios/xhrFunctions";
import localConsole from "@lib/utils/localConsole";

type AxiosMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface GetResultArgs<P extends object | string | undefined> {
  requestURL: string;
  requestMethod: AxiosMethod;
  requestHeaders?: AxiosRequestHeaders;
  body?: P;
}

export interface GetResultReturn<T, P = object | string | undefined> {
  // response: AxiosResponse<T, any>;
  // request: {
  //   requestMethod: AxiosMethod;
  //   requestURL: string;
  //   body: P | undefined;
  //   timeout: number;
  //   requestHeaders: AxiosRequestHeaders | undefined;
  // };

  headers: null;
  config: null;
  response: {
    data: T | null;
    status: number | null;
    statusText: string | null;
  };
  request: {
    requestMethod: AxiosMethod;
    requestURL: string;
    body: P | null;
    timeout: number;
  };
  data: T;
  status: number;
  statusText: string;
}

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
        `${typeof window === "undefined" ? this.initBaseUrl || "" : ""}` +
          `${this.commonUri || ""}` +
          `${uri || ""}` +
          `${
            pathParam
              ? pathParam?.includes("/")
                ? pathParam
                : `/${pathParam}`
              : ""
          }`
      )}${isNeedQuery ? getQueryString(params) : ""}`,
      requestHeaders: { ...headerObj },
    };
  };

  /**
   * @generic T : response type
   * @generic P : body type
   * @param requestMethod 정제된 URL 을 입력합니다.
   * @param requestURL 사용할 HTTP 메서드를 입력합니다.
   * @param requestHeaders? 정제된 header 를 입력합니다.
   * @param body? post 요청시 패킷에 담을 body 입니다.
   * @returns AxiosResponse 와 함께 요청한 Request 가 살짝 변경되어 들어옵니다.
   */
  public getResult = async <
    T extends object,
    P extends object | string | undefined
  >({
    requestMethod,
    requestURL,
    requestHeaders,
    body,
  }: GetResultArgs<P>) => {
    // try {
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

    const successResult: {
      response: {
        data: AxiosResponse<T>["data"] | null;
        status: AxiosResponse<T>["status"] | null;
        statusText: AxiosResponse<T>["statusText"] | null;
      };
      request: {
        requestMethod: AxiosMethod;
        requestURL: string;
        body: P | null;
        timeout: number;
      };
    } = {
      response: {
        data: response.data || null,
        status: response.status || null,
        statusText: response.statusText || null,
      },
      request: {
        requestMethod,
        requestURL,
        body: body || null,
        timeout: 10000,
      },
    };

    const result = {
      ...response,
      ...successResult,
      headers: null,
      config: null,
    };

    return result;
    // } catch (err) {
    //   const error = err as AxiosError<T, P>;

    //   if (error.request) {
    //     delete error.request;
    //   }

    //   const errorResult: {
    //     response: {
    //       data: AxiosResponse<T>['data'] | null;
    //       status: AxiosResponse<T>['status'] | null;
    //       statusText: AxiosResponse<T>['statusText'] | null;
    //     };
    //     request: {
    //       requestMethod: AxiosMethod;
    //       requestURL: string;
    //       body: P | null;
    //       timeout: number;
    //     };
    //   } = {
    //     response: {
    //       data: error.response?.data || null,
    //       status: error.response?.status || null,
    //       statusText: error.response?.statusText || null,
    //     },
    //     request: {
    //       requestMethod,
    //       requestURL,
    //       body: body || null,
    //       timeout: 10000,
    //     },
    //   };

    //   const result = {
    //     ...error,
    //     ...errorResult,
    //   };

    //   return result;
    // }
  };
}
