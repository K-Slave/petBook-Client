import getParameters from "../pages/API/axios/xhrFunctions";

class FetchInstance {
  constructor() {
    this.defaults = this.defaults;
  }

  defaults = {
    baseURL: "",
    headers: {
      common: {
        "Content-Type": "",
        "X-CSRFToken": "",
      },
    },
    options: {
      mode: "cors" as RequestMode,
      cache: "no-cache" as RequestCache,
      credentials: "same-origin" as RequestCredentials,
      redirect: "follow" as RequestRedirect,
      referrerPolicy: "no-referrer" as ReferrerPolicy,
    },
  };

  /**
   * HTTP Method GET
   * @param params 입력할 쿼리파라미터 입니다.
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   */
  get(url: string, params?: string | object, config?: { headerObj?: object }) {
    const { requestURL, requestHeaders } = getParameters({
      uri: url,
      baseURL: this.defaults.baseURL,
      params: params,
      // defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "GET",
      headers: requestHeaders,
    });
  }

  /**
   * HTTP Method POST
   * @param data 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param params 입력할 쿼리파라미터 입니다.
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   */
  post(
    url: string,
    data?: any,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: url,
      baseURL: this.defaults.baseURL,
      params: params,
      // defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(data),
    });
  }

  /**
   * HTTP Method PUT
   * @param data 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param params 입력할 쿼리파라미터 입니다.
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   */
  put(
    url: string,
    data?: any,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: url,
      baseURL: this.defaults.baseURL,
      params: params,
      // defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "PUT",
      headers: requestHeaders,
      body: JSON.stringify(data),
    });
  }

  /**
   * HTTP Method PUT
   * @param data 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param params 입력할 쿼리파라미터 입니다.
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   */
  delete(
    url: string,
    data?: any,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: url,
      baseURL: this.defaults.baseURL,
      params: params,
      // defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "DELETE",
      headers: requestHeaders,
    });
  }
}

// export type FetchInstanceType = FetchInstance;

// const fetchCore = {
//   create() {
//     return new FetchInstance();
//   },
// };

// export default fetchCore;

// export type UseQueryResponseToJS = {
//   data: any;
//   dataUpdatedAt: number;
//   error: any | null;
//   errorUpdateCount: number;
//   errorUpdatedAt: number;
//   failureCount: number;
//   isError: boolean;
//   isFetched: boolean;
//   isFetchedAfterMount: boolean;
//   isFetching: boolean;
//   isIdle: boolean;
//   isLoading: boolean;
//   isLoadingError: boolean;
//   isPlaceholderData: boolean;
//   isPreviousData: boolean;
//   isRefetchError: boolean;
//   isRefetching: boolean;
//   isStale: boolean;
//   isSuccess: boolean;
//   refetch: Function;
//   remove: Function;
//   status: string;
// };
