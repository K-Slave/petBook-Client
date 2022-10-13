import { pypetbookClient } from "../axios/axiosClient";
import getParameters, { getAxiosItems } from "../axios/xhrFunctions";

const { uri, client } = getAxiosItems("/board", pypetbookClient);

export default class BoardAPI {
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }

    return this.instance;
  }

  instance = this;

  /**
   * 게시글 조회 API
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.id 0은 Reserved 입니다. 0을 보낼경우 id 에 관계없이 전부 호출됩니다. default : 0
   * @param params.category_id 0은 Reserved 입니다. 0을 보낼경우 category 에 관계없이 전부 호출됩니다. default : 0
   * @param params.currentPage 불러올 페이지를 뜻합니다. default : 1
   * @param params.numPerPage 한 페이지에 몇개의 게시물을 가져올지 전달합니다. default : 10
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async board_list(
    params: {
      id?: number;
      title?: string;
      content?: string;
      reg_user?: string;
      category_id?: number;
      visible_status?: "Y" | "N";
      currentPage?: number;
      numPerPage?: number;
    },
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: {
        ...params,
        id: params.id ? params.id : 0,
        category_id: params.category_id ? params.category_id : 0,
        currentPage: params.currentPage ? params.currentPage : 1,
        numPerPage: params.numPerPage ? params.numPerPage : 10,
        visible_status: params.visible_status ? params.visible_status : "Y",
      },
      headerObj: config?.headerObj,
    });

    const response = await client.get<BoardListResponse>(requestURL, {
      timeout: 10000,
      headers: requestHeaders,
    });

    console.log(response, "response");

    const result = {
      ...response,
      request: {
        params: params,
        config: config,
      },
    };

    return result;
  }

  /**
   * 게시글 등록 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.category_id 0번 카테고리는 reserved 입니다. 글쓰기 카테고리 선택순서로 id가 매핑됩니다. ex) 1:질문과 답변, 2: 잡담, 3: 나눔활동 ...
   * @param params 입력할 쿼리파라미터 입니다.
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async board_create(
    body: {
      title: string;
      content: string;
      category_id: number;
      reg_user: string;
      visible_status?: "Y" | "N";
    },
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: params,
      headerObj: config?.headerObj,
    });

    const response = await client.post<BoardCreateResponse>(
      requestURL,
      {
        ...body,
        visible_status: body.visible_status ? body.visible_status : "Y",
      },
      {
        timeout: 10000,
        headers: requestHeaders,
      }
    );

    const result = {
      ...response,
      request: {
        params: params,
        body: {
          body: body,
          params: params,
          config: config,
        },
      },
    };

    return result;
  }

  /**
   * 게시글 수정 API
   * @param params 입력할 쿼리파라미터 입니다.
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.id 0번 id는 reserved 입니다. 해당 게시글 id를 입력해주세요.
   * @param body.category_id 0번 카테고리는 reserved 입니다. 글쓰기 카테고리 선택순서로 id가 매핑됩니다. ex) 1:질문과 답변, 2: 잡담, 3: 나눔활동 ...
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async board_update(
    body: {
      id: number;
      create_at: string;
      update_at: string;
      title: string;
      content: string;
      reg_user: string;
      visible_status?: "Y" | "N";
      category_id: number;
    },
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: params,
      headerObj: config?.headerObj,
    });

    const response = await client.put<BoardUpdateResponse>(
      requestURL,
      {
        ...body,
        visible_status: body.visible_status ? body.visible_status : "Y",
      },
      {
        timeout: 10000,
        headers: requestHeaders,
      }
    );

    const result = {
      ...response,
      request: {
        params: params,
        body: {
          body: body,
          params: params,
          config: config,
        },
      },
    };

    return result;
  }

  /**
   * 게시글 삭제 API
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.id 0번 id는 reserved 입니다. 해당 게시글 id를 입력해주세요. ex) 1:질문과 답변, 2: 잡담, 3: 나눔활동 ...
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async board_delete(
    params: {
      id: number;
    },
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: params,
      headerObj: config?.headerObj,
    });

    const response = await client.delete<BoardDeleteResponse>(requestURL, {
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

export type BoardListRequest = {
  id: number;
  title?: string;
  content?: string;
  reg_user?: string;
  category_id: number;
  visible_status: "Y" | "N";
  currentPage: number;
  numPerPage: number;
};

export type BoardListResponse = {
  count: number;
  items:
    | Array<{
        id: number;
        create_at: string;
        update_at: string;
        title: string;
        content: string;
        reg_user: string;
        visible_status: "Y" | "N";
        category_id: number;
      }>
    | [];
};

export type BoardCreateRequest = {
  title: string;
  content: string;
  category_id: number;
  reg_user: string;
  visible_status: "Y" | "N";
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
  visible_status: "Y" | "N";
  category_id: number;
};

export type BoardUpdateResponse = BoardCreateResponse;

export type BoardDeleteRequest = {
  id: number;
};

export type BoardDeleteResponse = BoardCreateResponse;
