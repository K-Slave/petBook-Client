import RequestCore from "./RequestCore";
import { CommentCreateRequest, CommentUpdateRequest } from "./types/commentRequest";

export default class CommentAPI extends RequestCore {
    /**
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.content 댓글 내용입니다.
   * @param body.articleId 게시물의 ID 값입니다.
   * @param body.parentId 댓글의 부모 ID 값입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @param config.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 생성한 댓글 정보가 들어옵니다.
   */
    public comment_create = async (
        body: CommentCreateRequest,
        config?: { headerObj: object }
    ) => {
        const { requestURL, requestHeaders } = this.getParameters({
            headerObj: config && config.headerObj,
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
   * @param pathParam 댓글 ID값입니다.
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.content 댓글 내용입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @param config.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 업데이트된 댓글 정보가 들어옵니다.
   */
    public comment_update = async (
        pathParam: string,
        body: CommentUpdateRequest,
        config?: { headerObj: object}
    ) => {
        const { requestURL, requestHeaders } = this.getParameters({
            pathParam,
            headerObj: config && config.headerObj,
        });
        const result = await this.getResult({
            requestMethod: "PUT",
            requestURL,
            requestHeaders,
            body
        });
        return result;
    };

     /**
   *
   * @param pathParam 댓글 ID값입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @param config.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 업데이트된 댓글 정보가 들어옵니다.
   */
    public comment_delete = async (pathParam: string, config?: { headerObj: object}) => {
        const { requestURL, requestHeaders } = this.getParameters({
            pathParam,
            headerObj: config && config.headerObj,
        });
        const result = this.getResult({
            requestMethod: "DELETE",
            requestURL,
            requestHeaders
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
    public comment_list = async (config?: { headerObj: object }) => {
        const { requestURL, requestHeaders } = this.getParameters({
            headerObj: config && config.headerObj,
        });
        const result = this.getResult({
            requestMethod: "GET",
            requestURL,
            requestHeaders
        });
        return result;
    };
}
