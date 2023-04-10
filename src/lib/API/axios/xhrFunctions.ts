import { AxiosInstance } from "axios";
import QueryString from "qs";

interface GetParametersType<T> {
  uri: string;
  baseURL?: string;
  params?: T;
  headerObj?: object;
  isNeedQuery?: boolean;
}

// baseURL + 사용자 정의 url + 사용자 정의 queryParams
// ex: "https://@@@.com" + "/board" + "?id=0&category_id=0&visible_status=Y&currentPage=1&numPerPage=10"
export function getUrl(url: string) {
  if (url.includes("/")) return url;
  if (!url.includes("/")) return `/${url}`;
  return "";
}

export function getQueryString<T>(params?: T) {
  if (!params) return "";

  if (typeof params === "string") return `?${params}`;

  if (typeof params === "object") return `?${QueryString.stringify(params)}`;

  return "";
}

// 인스턴스에 정의된 defaults.headers.common 객체와
// 인자로 받은 headerObj 를 spread 하여 객체로 반환
// ex : {
//   (this.defaults.headers.common 객체)
//   ...{
//     "Content-Type": "application/json",
//     "X-CSRFToken": "",
//   },
//   (인자로 받은 headerObj 객체)
//   ...{
//     'Content-Length' : '9999'
//   }
// }
function getHeaders(headerObj: object) {
  return { ...headerObj };
}

export default function getParameters<T>({
  uri,
  baseURL,
  params,
  headerObj,
  isNeedQuery = true,
}: GetParametersType<T>) {
  if (headerObj) {
    return {
      requestURL: `${baseURL || ""}${getUrl(uri)}${
        isNeedQuery ? getQueryString(params) : ""
      }`,
      requestHeaders: getHeaders(headerObj),
    };
  }

  return {
    requestURL: `${baseURL || ""}${getUrl(uri)}${
      isNeedQuery ? getQueryString(params) : ""
    }`,
  };
}

export function getAxiosItems(uri: string, instance: AxiosInstance) {
  return { uri, client: instance };
}
