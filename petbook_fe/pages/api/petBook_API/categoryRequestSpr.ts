import { sprpetbookClient } from "../axios/axiosClient";
import getParameters, { getAxiosItems } from "../axios/xhrFunctions";

const { uri, client } = getAxiosItems("/api/v1/category", sprpetbookClient);

export default class CategorySprAPI {
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }

    return this.instance;
  }

  instance = this;

  /**
   * @param config
   * @returns categoryId 에 해당하는 게시물 리스트를 반환합니다.
   */
  async category_list(config?: { headerObj: object }) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/list",
      headerObj: config?.headerObj,
    });

    const response = await client.get<categoryListResponse>(requestURL, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        config: config,
      },
    };

    return result;
  }
}

type categoryListResponse = Array<{
  id: number;
  name: string;
}>;
