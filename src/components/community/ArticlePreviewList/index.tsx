import useCategories from "@lib/hooks/article/useCategories";
import { useResource } from "@lib/hooks/common/useResource";
import Link from "next/link";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequest";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import { Article, BoxGrid, List } from "./styled";
import { ARTICLE_LIST_PREVIEW } from "@lib/queries/article";

const ArticlePreviewList = () => {
  const { categories } = useCategories({ all: true });
  return (
    <BoxGrid>
      {categories.map((category) => (
        <ArticleBox category={category} key={category.id} />
      ))}
    </BoxGrid>
  );
};

const ArticleBox = ({ category }: { category: CategoryItem }) => {
  const params = {
    categoryId: category.id === 0 ? "" : category.id.toString(),
    page: 0,
    size: 5,
    popular: false,
  };
  const { data } = useResource({
    key: ARTICLE_LIST_PREVIEW.createKey({ params }),
    fetcher: () => ARTICLE_LIST_PREVIEW.fetcher({ params }),
  });
  return (
    <Article>
      <div>
        <h3>{category.name}</h3>
        <Link href={getHrefWithCategory(category)} passHref>
          <button type="button">더보기</button>
        </Link>
      </div>
      {data?.data.articles.length === 0 ? (
        <p className="text">아직 게시물이 없어요!</p>
      ) : (
        <List>
          {data?.data.articles.map((article) => (
            <li key={article.id}>
              <Link href={`/community/list/${article.id}`} passHref>
                <span className="Article_title">{article.title}</span>
              </Link>
              <span className="Article_scrap">
                <BookmarkBlankIcon />
                <span>0</span>
              </span>
            </li>
          ))}
        </List>
      )}
    </Article>
  );
};

export default ArticlePreviewList;
