import RequestCore from "./RequestCore";
import {
  ArticleListResponse,
  ArticleListRequest,
  ArticleSearchRequest,
  ArticleCreateRequest,
  ArticleListPayload,
  ArticleDetailResponse,
  ArticleDetailPayload,
  ArticleSearchPayload,
} from "./types/articleRequest";

export default class ArticleAPI extends RequestCore {
  /**
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.title 게시물의 타이틀 입니다.
   * @param body.content 게시물의 컨텐츠 입니다.
   * @param body.categoryId 게시물의 카테고리 ID 값 입니다.
   * @param body.imageIds 해당 게시물에 해당하는 이미지 ID 값 입니다
   * @param config Header 메시지를 추가할때 씁니다.
   * @param config.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 생성한 게시물 정보가 들어옵니다.
   */
  public article_create = async (payload: {
    header?: object;
    body: ArticleCreateRequest;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: payload.header,
    });

    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body: payload.body,
    });

    return result;
  };

  /**
   *
   * @param pathParam 게시물 ID 값 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 게시물 ID 에 해당하는 게시물을 반환합니다.
   */
  public article_detail = async (payload: {
    pathParam: string;
    headerObj?: object;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      pathParam: payload.pathParam,
      headerObj: payload?.headerObj,
    });

    const result = await this.getResult<
      ArticleDetailResponse,
      ArticleDetailPayload
    >({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

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
  public article_list = async (payload: {
    params: ArticleListRequest;
    headerObj?: object;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/list",
      params: payload.params,
      headerObj: payload.headerObj,
    });

    const result = await this.getResult<
      ArticleListResponse,
      ArticleListPayload
    >({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };

  /**
   *
   * @param payload
   * @param payload.pathParam 게시물 ID값입니다.
   * @returns 응답이 따로 없고, status code로 성공 여부 판단
   */
  public article_create_like = async (payload: {
    pathParam: string;
    headerObj?: object;
  }) => {
    const { pathParam, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/${pathParam}/like`,
      headerObj,
    });

    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
    });
    return result;
  };

  /**
   *
   * @param payload
   * @param payload.pathParam 게시물 ID값입니다.
   * @returns 응답이 따로 없고, status code로 성공 여부 판단
   */
  public article_delete_like = async (payload: {
    pathParam: string;
    headerObj?: object;
  }) => {
    const { pathParam, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/${pathParam}/like`,
      headerObj,
    });

    const result = await this.getResult({
      requestMethod: "DELETE",
      requestURL,
      requestHeaders,
    });
    return result;
  };

  public article_search = async (payload: {
    params: ArticleSearchRequest;
    headerObj?: object;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/search",
      params: payload.params,
      headerObj: payload.headerObj,
    });

    const result = await this.getResult<
      ArticleListResponse,
      ArticleSearchPayload
    >({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
