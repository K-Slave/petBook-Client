import { AxiosInstance } from "axios";

import getParameters from "../axios/xhrFunctions";
import { CategoryListResponse } from "./types/categoryRequestSpr";

export default class CategorySprAPI {
  public uri = "";

  public client: AxiosInstance;

  constructor(uri: string, client: AxiosInstance) {
    this.uri = uri;
    this.client = client;
  }

  instance = this;

  /**
   * @param config
   * @returns categoryId 에 해당하는 게시물 리스트를 반환합니다.
   */
  public category_list = async (config?: { headerObj: object }) => {
    const { requestURL, requestHeaders } = getParameters({
      uri: `${this.uri}/list`,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.get<CategoryListResponse>(requestURL, {
        timeout: 10000,
        headers: requestHeaders,
      }));

    const result = {
      ...response,
      request: {
        config,
      },
    };

    return result;
  };
}
