import QueryString from "qs";
import getParameters from "./fetchFunctions";

class FetchInstance {
  constructor() {
    this.defaults = this.defaults;
  }

  defaults = {
    baseURL: "",
    headers: {
      common: {
        "Content-Type": "application/json",
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

  get(url: string, params?: string | object, config?: { headerObj?: object }) {
    const { requestURL, requestHeaders } = getParameters({
      url: url,
      baseURL: this.defaults.baseURL,
      params: params,
      defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "GET",
      headers: requestHeaders,
    });
  }

  post(
    url: string,
    data?: any,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      url: url,
      baseURL: this.defaults.baseURL,
      params: params,
      defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(data),
    });
  }

  put(
    url: string,
    data?: any,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      url: url,
      baseURL: this.defaults.baseURL,
      params: params,
      defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "PUT",
      headers: requestHeaders,
      body: JSON.stringify(data),
    });
  }

  delete(
    url: string,
    data?: any,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      url: url,
      baseURL: this.defaults.baseURL,
      params: params,
      defaultHeader: this.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    return fetch(requestURL, {
      ...this.defaults.options,
      method: "DELETE",
      headers: requestHeaders,
      body: JSON.stringify(data),
    });
  }
}

const fetchCore = {
  create() {
    return new FetchInstance();
  },
};

export default fetchCore;

// export type FetchResponseToJS = {
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
