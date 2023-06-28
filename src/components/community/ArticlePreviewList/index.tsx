import useCategories from "@lib/hooks/article/useCategories";
import { useResource } from "@lib/hooks/common/useResource";
import Link from "next/link";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequest";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import { BookmarkOutline } from "@/stories/Icon/Bookmark";
import { Article, BoxGrid, List } from "./styled";
import { ARTICLE_LIST_PREVIEW } from "@lib/resources/articleResource";
import localConsole from "@lib/utils/localConsole";

const ArticlePreviewList = () => {
  const { categories } = useCategories({ all: true });
  // localConsole?.log(categories, 'categories');
  return (
    <BoxGrid>
      {categories.map((category) => (
        <ArticleBox category={category} key={category.id} />
      ))}
    </BoxGrid>
  );
};

const ArticleBox = ({ category }: { category: CategoryItem }) => {
  const payload = {
    params: {
      categoryId: category.id.toString(),
      page: 0,
      size: 5,
      popular: false,
    },
  };

  const { data } = useResource({
    resource: ARTICLE_LIST_PREVIEW[category.id],
    payload,
  });
  return (
    <Article>
      <div>
        <h3>{category.name}</h3>
        <Link href={getHrefWithCategory(category)} passHref>
          <button type="button">더보기</button>
        </Link>
      </div>
      {data?.response.data.result.articles.length === 0 ? (
        <p className="text">아직 게시물이 없어요!</p>
      ) : (
        <List>
          {data?.response.data.result.articles.map((article) => (
            <li key={article.id}>
              <Link href={`/community/list/${article.id}`} passHref>
                <span className="Article_title">{article.title}</span>
              </Link>
              <span className="Article_scrap">
                <BookmarkOutline />
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
