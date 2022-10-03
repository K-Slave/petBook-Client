import { petBookClient } from "../fetch/fetchClient";

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

// Promise 객체를 핸들링하는 곳입니다.
// 추후 에러 핸들링등을 이쪽에서 구현하려고 합니다.
class CategoryAPI {
  constructor() {}

  /**
   * 카테고리 조회 API
   * @param params.id 0은 Reserved 입니다. 의미없는 호출입니다.
   * @param params.title 카테고리 명을 입력합니다.
   * @returns fetch API Response 객체를 직렬화한 Promise 객체를 반환합니다.
   */
  async category_list(params: CategoryListRequest) {
    const response = await petBookClient
      .get("/category", params)
      .catch((err) => console.error(err));

    const resolvedRes = response as Response;

    const body: CategoryListResponse = await resolvedRes.json();
    return body;
  }

  /**
   * 카테고리 등록 API
   * @param data.title 카테고리 명을 입력합니다
   * @returns fetch Response 객체가 직렬화된 Promise를 반환합니다.
   */
  async category_create(data: CategoryCreateRequest, params?: string | object) {
    const response = await petBookClient
      .post("/category", data, params)
      .catch((err) => console.error(err));
    const resolvedRes = response as Response;
    const body: CategoryCreateResponse = await resolvedRes.json();

    return body;
  }

  /**
   * 카테고리 수정 API
   * @param data.id 0번 id는 reserved 입니다. 해당 카테고리 id를 입력해주세요.
   * @param data.title 카테고리 명을 입력합니다
   * @returns fetch Response 객체가 직렬화된 Promise를 반환합니다.
   */
  async category_update(data: CategoryUpdateRequest, params?: string | object) {
    const response = await petBookClient
      .put("/category", data, params)
      .catch((err) => console.error(err));
    const resolvedRes = response as Response;
    const body: CategoryUpdateResponse = await resolvedRes.json();

    return body;
  }

  /**
   * 카테고리 삭제 API
   * @param data.id 0번 id는 reserved 입니다. 해당 카테고리 id를 입력해주세요.
   * @returns fetch Response 객체가 직렬화된 Promise를 반환합니다.
   */
  async category_delete(data: CategoryDeleteRequest, params?: string | object) {
    const response = await petBookClient
      .post("/category", data, params)
      .catch((err) => console.error(err));
    const resolvedRes = response as Response;
    const body: CategoryDeleteResponse = await resolvedRes.json();

    return body;
  }
}

export default CategoryAPI;

export const category_list_defaults: CategoryListRequest = {
  id: 0,
  visible_status: "Y",
  currentPage: 1,
  numPerPage: 10,
};
