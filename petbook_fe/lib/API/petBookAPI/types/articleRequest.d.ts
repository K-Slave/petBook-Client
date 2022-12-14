interface ArticleItem {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    nickname: string;
  };
  category: {
    id: number;
    name: string;
  };
  tags: string[];
  stat: {
    viewCount: number;
    likeCount: number;
  },
  createdAt: string;
}
export type ArticleResponse = ArticleItem;
export interface ArticleListResponse {
  articles: ArticleItem[],
  totalElements: number;
}

export interface ArticleListRequest {
  categoryId: number | string | number[];
  page: number;
  size: number;
}
