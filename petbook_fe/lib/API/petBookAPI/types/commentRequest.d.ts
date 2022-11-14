export interface CommentCreateRequest {
    content: string;
    articleId: number;
    parentId: number | null;
}

export type CommentUpdateRequest = Pick<CommentCreateRequest, "content">;
