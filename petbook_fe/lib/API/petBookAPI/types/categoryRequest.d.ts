export interface CategoryListRequest {
  id: number;
  title?: string;
  reg_user?: string;
  visible_status: string;
  currentPage: number;
  numPerPage: number;
}

export interface CategoryListResponse {
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
}

export interface CategoryCreateRequest {
  title: string;
  reg_user: string;
  visible_status: string;
}

interface CategoryCreateSuccess {
  msg: string;
}

interface CategoryCreateError {
  errors: {
    errMsg: Array<any>;
  };
}

export type CategoryCreateResponse =
  | CategoryCreateSuccess
  | CategoryCreateError;

export interface CategoryUpdateRequest {
  id: number;
  create_at: string;
  update_at: string;
  title: string;
  reg_user: string;
  visible_status: string;
}

export type CategoryUpdateResponse = CategoryCreateResponse;

interface CategoryDeleteRequest {
  id: number;
}

export type CategoryDeleteResponse = CategoryCreateResponse;
