import { sprpetbookClient } from "../axios/axiosClient";
import getParameters, { getAxiosItems } from "../axios/xhrFunctions";

const { uri, client } = getAxiosItems(
  "/api/v1/board/article",
  sprpetbookClient
);

export default class ArticleAPI {
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }

    return this.instance;
  }

  instance = this;

  /**
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.title 게시물의 타이틀 입니다.
   * @param body.content 게시물의 컨텐츠 입니다.
   * @param body.categoryId 게시물의 카테고리 ID 값 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @param config.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 응답 객체는 없습니다.
   */
  async article_create(
    body: {
      title: string;
      content: string;
      categoryId: number;
    },
    config: { headerObj: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/",
      headerObj: config.headerObj,
    });

    const response = await client.post<any>(requestURL, body, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        body: {
          ...body,
        },
      },
    };

    return result;
  }

  /**
   *
   * @param path 게시물 ID 값 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 게시물 ID 에 해당하는 게시물을 반환합니다.
   */
  async article_item(path: string, config?: { headerObj: object }) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/" + path,
      headerObj: config?.headerObj,
    });

    const response = await client.get<articleResponse>(requestURL, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        path: path,
      },
    };

    return result;
  }

  /**
   *
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.categoryId 해당하는 카테고리 ID 값을 number[] 형태로 명시합니다.
   * @param params.page 몇 페이지까지 불러올지 명시합니다.
   * @param params.size page 당 불러올 게시물의 갯수입니다.
   * @param config
   * @returns categoryId 에 해당하는 게시물 리스트를 반환합니다.
   */
  async article_list(
    params: {
      categoryId: number[];
      page: number;
      size: number;
    },
    config?: { headerObj: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/list",
      params: params,
      headerObj: config?.headerObj,
    });

    const response = await client.get<articleListResponse>(requestURL, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        params: params,
        config: config,
      },
    };

    return result;
  }
}

type articleResponse = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    nickname: string;
  };
  category: {
    id: number;
    name: string;
  };
};

type articleListResponse = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    nickname: string;
  };
  category: {
    id: number;
    name: string;
  };
};
