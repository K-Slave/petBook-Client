import { AxiosInstance } from "axios";
import getParameters from "../axios/xhrFunctions";
import { ArticleResponse, ArticleListResponse } from "./types/articleRequest";

export default class ArticleAPI {
  public uri = "";

  public client: AxiosInstance;

  constructor(uri: string, client: AxiosInstance) {
    this.uri = uri;
    this.client = client;
  }

  /**
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.title 게시물의 타이틀 입니다.
   * @param body.content 게시물의 컨텐츠 입니다.
   * @param body.categoryId 게시물의 카테고리 ID 값 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @param config.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 생성한 게시물 정보가 들어옵니다.
   */
  public article_create = async (
    body: {
      title: string;
      content: string;
      categoryId: number;
    },
    config: { headerObj: object }
  ) => {
    const { requestURL, requestHeaders } = getParameters({
      uri: `${this.uri}/`,
      headerObj: config.headerObj,
    });

    const response =
      this.client &&
      (await this.client.post<any>(requestURL, body, {
        timeout: 10000,
        headers: requestHeaders,
      }));

    const result = {
      ...response,
      request: {
        body,
        config,
      },
    };

    return result;
  };

  /**
   *
   * @param path 게시물 ID 값 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 게시물 ID 에 해당하는 게시물을 반환합니다.
   */
  public article_item = async (
    path: string,
    config?: { headerObj: object }
  ) => {
    const { requestURL, requestHeaders } = getParameters({
      uri: `${this.uri}/${path}`,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.get<ArticleResponse>(requestURL, {
        timeout: 10000,
        headers: requestHeaders,
      }));

    const result = {
      ...response,
      request: {
        path,
        config,
      },
    };

    return result;
  };

  /**
   *
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.categoryId 해당하는 카테고리 ID 값을 number[] 형태로 명시합니다.
   * @param params.page 몇 페이지까지 불러올지 명시합니다.
   * @param params.size page 당 불러올 게시물의 갯수입니다.
   * @param config
   * @returns categoryId 에 해당하는 게시물 리스트를 반환합니다.
   */
  public article_list = async (
    params?: {
      initUrl?: string;
      categoryId: number[] | number | string;
      page: number;
      size: number;
    },
    config?: { headerObj: object }
  ) => {
    const { requestURL, requestHeaders } = getParameters({
      uri: `${params?.initUrl || ""}${this.uri}/list`,
      params,
      headerObj: config?.headerObj,
    });

    const response =
      this.client &&
      (await this.client.get<ArticleListResponse>(requestURL, {
        timeout: 10000,
        headers: requestHeaders,
      }));

    console.log(response, "response");

    const result = {
      ...response,
      request: {
        params,
        config,
      },
    };

    return result;
  };
}
