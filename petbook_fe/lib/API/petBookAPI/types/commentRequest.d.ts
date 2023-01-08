export interface CommentCreateRequest {
  content: string;
  articleId: number;
  parentId: number | null;
}

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

export type CommentListResponse = {
  page: number;
  commentList: {
    parent: CommentItem;
    children: CommentItem[];
  }[];
};

export interface CommentListRequest {
  params: { articleId: number; page: number; size: number };
  headerObj?: object;
}

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
