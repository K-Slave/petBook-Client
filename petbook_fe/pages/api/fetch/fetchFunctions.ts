import QueryString from "qs";

// baseURL + 사용자 정의 url + 사용자 정의 queryParams
// ex: "https://@@@.com" + "/board" + "?id=0&category_id=0&visible_status=Y&currentPage=1&numPerPage=10"
function getUrl(url: string) {
  if (url.includes("/")) return url;
  if (!url.includes("/")) return "/" + url;
}

function getQueryString(params?: string | object) {
  if (!params) return "";

  if (typeof params === "string") return "?" + params;

  if (typeof params === "object") return "?" + QueryString.stringify(params);
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
function getHeaders(defaults: object, headerObj?: object) {
  if (headerObj) return { ...defaults, ...headerObj };
  if (!headerObj) return { ...defaults };
}

type GetParametersType = {
  url: string;
  baseURL?: string;
  params?: string | object;
  defaultHeader: object;
  headerObj?: object;
  isNeedQuery?: boolean;
};

export default function getParameters({
  url,
  baseURL,
  params,
  defaultHeader,
  headerObj,
  isNeedQuery = true,
}: GetParametersType) {
  return {
    requestURL: `${baseURL}${getUrl(url)}${
      isNeedQuery ? getQueryString(params) : ""
    }`,
    requestHeaders: getHeaders(defaultHeader, headerObj),
  };
}
