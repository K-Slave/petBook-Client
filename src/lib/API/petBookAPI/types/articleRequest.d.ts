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
  images: {
    id: number;
    imageUrl: string;
  }[];
  tags: string[];
  stat: {
    viewCount: number;
    likeCount: number;
  };
  isLike: boolean;
  createdAt: string;
}

export type ArticleResponse = ArticleItem;
export interface ArticleListResponse {
  articles: ArticleItem[];
  totalElements: number;
}

export interface ArticleListRequest {
  categoryId: string;
  page: number;
  size: number;
  popular: boolean;
}

export interface ArticleSearchRequest {
  categoryId: number | null;
  page: number;
  size: number;
  searchText: string;
}
