import RequestCore from "./RequestCore";
import {
  CommentCreateRequest,
  CommentListResponse,
  CommentUpdateRequest,
} from "./types/commentRequest";

export default class CommentAPI extends RequestCore {
  /**
   * @param payload
   * @param payload.body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param payload.body.content 댓글 내용입니다.
   * @param payload.body.articleId 게시물의 ID 값입니다.
   * @param payload.body.parentId 댓글의 부모 ID 값입니다.
   * @param payload.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 생성한 댓글 정보가 들어옵니다.
   */
  public comment_create = async (payload: {
    body: CommentCreateRequest;
    headerObj?: object;
  }) => {
    const { body, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj,
    });

    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });
    return result;
  };

  /**
   *
   * @param payload
   * @param payload.pathParam 댓글 ID값입니다.
   * @param payload.body 요청 패킷 Body에 JSON 형태로 담을 내용입니다.
   * @param payload.body.content 댓글 내용입니다.
   * @param payload.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 업데이트된 댓글 정보가 들어옵니다.
   */
  public comment_update = async (payload: {
    pathParam: string;
    body: CommentUpdateRequest;
    headerObj?: object;
  }) => {
    const { pathParam, body, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      pathParam,
      headerObj,
    });
    const result = await this.getResult({
      requestMethod: "PUT",
      requestURL,
      requestHeaders,
      body,
    });
    return result;
  };

  /**
   *
   * @param payload
   * @param payload.pathParam 댓글 ID값입니다.
   * @returns 업데이트된 댓글 정보가 들어옵니다.
   */
  public comment_delete = async (payload: {
    pathParam: string;
    headerObj?: object;
  }) => {
    const { pathParam, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      pathParam,
      headerObj,
    });
    const result = this.getResult({
      requestMethod: "DELETE",
      requestURL,
      requestHeaders,
    });
    return result;
  };

  /**
   *
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.articleId 게시물 ID값입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 게시물의 댓글 리스트를 반환합니다.
   */
  public comment_list = async (
    params: { articleId: number; page: number; size: number },
    config?: { headerObj: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/list",
      headerObj: config && config.headerObj,
      params,
    });
    const result = this.getResult<CommentListResponse>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });
    return result;
  };

  /**
   *
   * @param payload
   * @param payload.pathParam 댓글 ID값입니다.
   * @returns 응답이 따로 없고, status code로 성공 여부 판단
   */
  public comment_create_like = async (payload: {
    pathParam: string;
    headerObj?: object;
  }) => {
    const { pathParam, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/${pathParam}/like`,
      headerObj,
    });
    const result = this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
    });
    return result;
  };

  /**
   *
   * @param payload
   * @param payload.pathParam 댓글 ID값입니다.
   * @returns 응답이 따로 없고, status code로 성공 여부 판단
   */
  public comment_delete_like = async (payload: {
    pathParam: string;
    headerObj?: object;
  }) => {
    const { pathParam, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/${pathParam}/like`,
      headerObj,
    });
    const result = this.getResult({
      requestMethod: "DELETE",
      requestURL,
      requestHeaders,
    });
    return result;
  };
}
