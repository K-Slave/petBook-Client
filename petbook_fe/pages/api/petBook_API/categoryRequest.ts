import { pypetbookClient } from "../axios/axiosClient";
import getParameters, { getAxiosItems } from "../axios/xhrFunctions";

const { uri, client } = getAxiosItems("/category", pypetbookClient);

export default class CategoryAPI {
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }

    return this.instance;
  }

  instance = this;

  /**
   * 카테고리 조회 API
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.id 0은 Reserved 입니다. 0을 보낼경우 id 에 관계없이 전부 호출됩니다. default : 0
   * @param params.title 카테고리 명을 입력합니다.
   * @param params.currentPage 불러올 페이지를 뜻합니다. default : 1
   * @param params.numPerPage 한 페이지에 몇개의 게시물을 가져올지 전달합니다. default : 10
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async category_list(
    params: CategoryListRequest,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: {
        ...params,
        id: params.id ? params.id : 0,
        currentPage: params.currentPage ? params.currentPage : 1,
        numPerPage: params.numPerPage ? params.numPerPage : 10,
        visible_status: params.visible_status ? params.visible_status : "Y",
      },
      headerObj: config?.headerObj,
    });

    const response = await client.get<
      CategoryListRequest,
      CategoryListResponse
    >(requestURL, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: params,
    };

    return result;
  }

  /**
   * 카테고리 등록 API
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.title 카테고리 명을 입력합니다
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @param params 입력할 쿼리파라미터 입니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async category_create(
    body: CategoryCreateRequest,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: params,
      headerObj: config?.headerObj,
    });

    const response = await client.post<
      CategoryCreateRequest,
      CategoryCreateResponse
    >(requestURL, body, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        params: params,
        body: {
          ...body,
        },
      },
    };

    return result;
  }

  /**
   * 카테고리 수정 API
   * @param params 입력할 쿼리파라미터 입니다.
   * @param body.id 0번 id는 reserved 입니다. 해당 카테고리 id를 입력해주세요.
   * @param body.title 카테고리 명을 입력합니다
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async category_update(
    body: CategoryUpdateRequest,
    params?: string | object,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: params,
      headerObj: config?.headerObj,
    });

    const response = await client.put<
      CategoryUpdateRequest,
      CategoryUpdateResponse
    >(requestURL, body, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        params: params,
        body: {
          ...body,
        },
      },
    };

    return result;
  }

  /**
   * 카테고리 삭제 API
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.id 0번 id는 reserved 입니다. 해당 카테고리 id를 입력해주세요. ex) 1:질문과 답변, 2: 잡담, 3: 나눔활동 ...
   * @param config 객체로 입력할 설정값 입니다. 현재는 headerObj 프로퍼티만 있습니다.
   * @param config.headerObj 옵션으로 보낼 header객체를 담아줍니다.
   * @returns axiosResponse 객체와 요청한 파라미터및 JSON body 가 있습니다.
   */
  async category_delete(
    params: CategoryDeleteRequest,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri,
      params: params,
      headerObj: config?.headerObj,
    });

    const response = await client.delete<
      CategoryDeleteRequest,
      CategoryDeleteResponse
    >(requestURL, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: params,
    };

    return result;
  }
}

export type CategoryListRequest = {
  id: number;
  title?: string;
  reg_user?: string;
  visible_status: string;
  currentPage: number;
  numPerPage: number;
};

export type CategoryListResponse = {
  count: number;
  item:
    | Array<{
        id: number;
        create_at: string;
        update_at: string;
        title: string;
        reg_user: string;
        visible_status: string;
      }>
    | [];
};

export type CategoryCreateRequest = {
  title: string;
  reg_user: string;
  visible_status: string;
};

type CategoryCreateResponse =
  | {
      msg: string;
    }
  | {
      errors: {
        errMsg: Array<any>;
      };
    };

export type CategoryUpdateRequest = {
  id: number;
  create_at: string;
  update_at: string;
  title: string;
  reg_user: string;
  visible_status: string;
};

type CategoryUpdateResponse = CategoryCreateResponse;

type CategoryDeleteRequest = {
  id: number;
};

type CategoryDeleteResponse = CategoryCreateResponse;
