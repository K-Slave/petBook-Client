export interface BoardListRequest {
  id: number;
  title?: string;
  content?: string;
  reg_user?: string;
  category_id: number;
  visible_status: "Y" | "N";
  currentPage: number;
  numPerPage: number;
}

export interface BoardListResponse {
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
}

export interface BoardCreateRequest {
  title: string;
  content: string;
  category_id: number;
  reg_user: string;
  visible_status: "Y" | "N";
}

interface BoardCreateSuccess {
  msg: string;
}

interface BoardCreateError {
  errors?: {
    errMsg: Array<any>;
  };
}

export type BoardCreateResponse = BoardCreateSuccess | BoardCreateError;

export interface BoardUpdateRequest {
  id: number;
  create_at: string;
  update_at: string;
  title: string;
  content: string;
  reg_user: string;
  visible_status: "Y" | "N";
  category_id: number;
}

export type BoardUpdateResponse = BoardCreateResponse;

export interface BoardDeleteRequest {
  id: number;
}

export type BoardDeleteResponse = BoardCreateResponse;
