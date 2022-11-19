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
  createdAt: string;
}

export type CommentListResponse = {
  parent: CommentItem;
  children: CommentItem[];
}[];

export interface CommentListRequest {
  params: { articleId: number };
  headerObj?: object;
}
