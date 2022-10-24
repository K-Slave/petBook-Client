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
  };
}
export type ArticleResponse = ArticleItem;
export type ArticleListResponse = ArticleItem[];
