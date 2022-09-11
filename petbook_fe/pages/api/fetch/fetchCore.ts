import QueryString from "qs";
import getParameters from "./fetchFunctions";

class fetchInstance {
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
    mode: "cors" as RequestMode,
    cache: "no-cache" as RequestCache,
    credentials: "same-origin" as RequestCredentials,
    redirect: "follow" as RequestRedirect,
    referrerPolicy: "no-referrer" as ReferrerPolicy,
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
      method: "GET",
      headers: requestHeaders,
      mode: this.defaults.mode,
      cache: this.defaults.cache,
      credentials: this.defaults.credentials,
      redirect: this.defaults.redirect,
      referrerPolicy: this.defaults.referrerPolicy,
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
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(data),
      mode: this.defaults.mode,
      cache: this.defaults.cache,
      credentials: this.defaults.credentials,
      redirect: this.defaults.redirect,
      referrerPolicy: this.defaults.referrerPolicy,
    });
  }
}

const fetchCore = {
  create() {
    return new fetchInstance();
  },
};

export default fetchCore;
