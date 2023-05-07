import { AxiosRequestHeaders } from "axios";
import RequestCore from "./RequestCore";
import {
  GetCookieRequest,
  GetCookieResponse,
  RemoveCookieRequest,
  RemoveCookieResponse,
  SetCookieRequest,
  SetCookieResponse,
} from "./types/cookieRequest";

export default class CookieAPI extends RequestCore {
  public getCookie = async (payload: {
    header?: AxiosRequestHeaders;
    params: GetCookieRequest;
  }) => {
    const { header, params } = payload;

    const { requestHeaders, requestURL } = this.getParameters({
      params,
      headerObj: header,
    });

    const result = await this.getResult<GetCookieResponse, GetCookieRequest>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };

  public setCookie = async (payload: {
    header?: AxiosRequestHeaders;
    body: SetCookieRequest;
  }) => {
    const { header, body } = payload;

    const { requestHeaders, requestURL } = this.getParameters({
      headerObj: header,
    });

    const result = await this.getResult<SetCookieResponse, SetCookieRequest>({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  public patchCookie = async (payload: {
    header?: AxiosRequestHeaders;
    body: SetCookieRequest;
  }) => {
    const { header, body } = payload;

    const { requestHeaders, requestURL } = this.getParameters({
      headerObj: header,
    });

    const result = await this.getResult<SetCookieResponse, SetCookieRequest>({
      requestMethod: "PATCH",
      requestURL,
      requestHeaders,
      body: {
        key: body.key,
        value: body.value,
      },
    });

    return result;
  };

  public removeCookie = async (payload: {
    header?: AxiosRequestHeaders;
    params: RemoveCookieRequest;
  }) => {
    const { header, params } = payload;

    const { requestHeaders, requestURL } = this.getParameters({
      params,
      headerObj: header,
    });

    const result = await this.getResult<
      RemoveCookieResponse,
      RemoveCookieRequest
    >({
      requestMethod: "DELETE",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
