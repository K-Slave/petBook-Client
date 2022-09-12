import localConsole from "../../../lib/localConsole";
import fetchClient from "../fetch/fetchClient";
// import { FetchResponseToJS } from "../fetch/fetchCore";

type BoardListRequest = {
  id: number;
  title?: string;
  content?: string;
  reg_user?: string;
  category_id: number;
  visible_status: string;
  currentPage: number;
  numPerPage: number;
};

export type BoardListResponse = {
  count: number;
  item:
    | Array<{
        id: number;
        create_at: string;
        update_at: string;
        title: string;
        content: string;
        reg_user: string;
        visible_status: string;
        category_id: number;
      }>
    | [];
};

export type BoardCreateRequest = {
  title: string;
  content: string;
  category_id: number;
  reg_user: string;
  visible_status: string;
};

type BoardCreateResponse =
  | {
      msg: string;
    }
  | {
      errors: {
        errMsg: Array<any>;
      };
    };

export type BoardUpdateRequest = {
  id: number;
  create_at: string;
  update_at: string;
  title: string;
  content: string;
  reg_user: string;
  visible_status: string;
  category_id: number;
};

type BoardUpdateResponse = BoardCreateResponse;

type BoardDeleteRequest = {
  id: number;
};

type BoardDeleteResponse = BoardCreateResponse;

// Promise 객체를 핸들링하는 곳입니다.
// 추후 에러 핸들링등을 이쪽에서 구현하려고 합니다.
/**
 * @APIDocs https://pypetbook.herokuapp.com/swagger/
 */
class BoardAPI {
  uri = "/board";

  /**
   * 게시글 조회 API
   * @param params.id 0 이면 전체 게시물 조회를 합니다
   * @param params.category_id 0 이면 전체 카테고리 조회를 합니다
   * @param params.currentPage 불러올 페이지를 뜻합니다. default : 1
   * @param params.numPerPage 한 페이지에 몇개의 게시물을 가져올지 전달합니다. default : 10
   * @returns fetch API Response 객체를 직렬화한 Promise 객체를 반환합니다.
   */
  async board_list(params: BoardListRequest) {
    const response = await fetchClient.get(this.uri, params);
    const body: BoardListResponse = await response.json();
    return body;
  }

  /**
   * 게시글 등록 API
   * @param data.category_id 0번 카테고리는 reserved 입니다. 글쓰기 카테고리 선택순서로 id가 매핑됩니다. ex) 1:질문과 답변, 2: 잡담, 3: 나눔활동 ...
   * @returns fetch Response 객체가 직렬화된 Promise를 반환합니다.
   */
  async board_create(data: BoardCreateRequest, params?: string | object) {
    const response = await fetchClient.post(this.uri, data, params);
    const body: BoardCreateResponse = await response.json();

    return body;
  }

  /**
   * 게시글 수정 API
   * @param data.id 0번 id는 reserved 입니다. 해당 게시글 id를 입력해주세요.
   * @param data.category_id 0번 카테고리는 reserved 입니다. 글쓰기 카테고리 선택순서로 id가 매핑됩니다. ex) 1:질문과 답변, 2: 잡담, 3: 나눔활동 ...
   * @returns fetch Response 객체가 직렬화된 Promise를 반환합니다.
   */
  async board_update(data: BoardUpdateRequest, params?: string | object) {
    const response = await fetchClient.put(this.uri, data, params);
    const body: BoardUpdateResponse = await response.json();

    return body;
  }

  /**
   * 게시글 삭제 API
   * @param data.id 0번 id는 reserved 입니다. 해당 게시글 id를 입력해주세요. ex) 1:질문과 답변, 2: 잡담, 3: 나눔활동 ...
   * @returns fetch Response 객체가 직렬화된 Promise를 반환합니다.
   */
  async board_delete(data: BoardDeleteRequest, params?: string | object) {
    const response = await fetchClient.post(this.uri, data, params);
    const body: BoardDeleteResponse = await response.json();

    return body;
  }
}

/**
 * @uri '/board'
 * @method board_list(params) : GET 게시글 조회
 * @method board_create(data, params) : POST 게시글 등록
 * @method board_update(data, params) : PUT 게시글 수정
 * @method board_delete(data, params) : DELETE 게시글 삭제
 * @APIDocs https://pypetbook.herokuapp.com/swagger/
 */
const boardRequest = new BoardAPI();

export default boardRequest;
