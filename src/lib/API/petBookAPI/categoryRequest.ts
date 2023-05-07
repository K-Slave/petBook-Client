import RequestCore from "./RequestCore";
import {
  CategoryListPayload,
  CategoryListResponse,
} from "./types/categoryRequest";

export default class CategoryAPI extends RequestCore {
  /**
   * @param config
   * @returns categoryId 에 해당하는 게시물 리스트를 반환합니다.
   */
  public category_list = async (payload?: { header?: object }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/list",
      headerObj: payload?.header,
    });

    const result = await this.getResult<
      CategoryListResponse,
      CategoryListPayload
    >({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
