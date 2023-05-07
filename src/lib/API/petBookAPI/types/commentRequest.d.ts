// comment_create
export interface CommentCreateRequest {
  content: string;
  articleId: number;
  parentId: number | null;
}

// comment_update

export type CommentUpdateRequest = Pick<CommentCreateRequest, "content">;

export interface CommentItem {
  id: number;
  content: string;
  user: {
    id: number;
    nickname: string;
  };
  articleId: number;
  likeCount: number;
  isLiked: boolean;
  isDeleted: boolean;
  createdAt: string;
}

// comment_list

export interface CommentListPayload {
  params: CommentListRequest;
  header?: object;
}
export interface CommentListRequest {
  articleId: number;
  page: number;
  size: number;
}

export type CommentListResponse = {
  page: number;
  commentList: {
    parent: CommentItem;
    children: CommentItem[];
  }[];
};

export interface CommentErrorResponse {
  response: {
    data: {
      error: string;
      message: string;
      path: string;
      status: number;
      timestamp: string;
    };
  };
}
