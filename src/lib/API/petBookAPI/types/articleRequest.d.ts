export interface ArticleCreateRequest {
  title: string;
  content: string;
  categoryId: number;
  imgIds?: number[];
  tags: string[];
}

// article_detail

export interface ArticleDetailPayload {
  pathParam: string;
  headerObj?: object;
}

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

export type ArticleDetailResponse = ArticleItem;
export interface ArticleListResponse {
  articles: ArticleItem[];
  totalElements: number;
}

// article_list

export interface ArticleListPayload {
  params: ArticleListRequest;
  headerObj?: object;
}

export interface ArticleListRequest {
  categoryId: string;
  page: number;
  size: number;
  popular: boolean;
}

// article_search

export interface ArticleSearchPayload {
  params: ArticleSearchRequest;
  headerObj?: object;
}

export interface ArticleSearchRequest {
  categoryId: number | null;
  page: number;
  size: number;
  searchText: string;
}

export type ArticleResponse = ArticleItem;
