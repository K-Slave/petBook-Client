export interface ArticleResponse {
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
}

export interface ArticleItem {
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
}

export type ArticleListResponse = ArticleItem[];
