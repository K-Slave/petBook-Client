import useCategories from "@lib/hooks/article/useCategories";
import useResource from "@lib/hooks/common/useResource";
import { createResourceByCategory } from "@pages/community";
import Link from "next/link";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import { Article, BoxGrid, List } from "./styled";

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
  const { data } = useResource(createResourceByCategory(category));
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
