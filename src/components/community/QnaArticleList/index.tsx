import { useResource } from "@lib/hooks/common/useResource";
import Link from "next/link";
import CommonInfo from "@components/community/CommonInfo";
import { ListBox, Article } from "./styled";
import { ARTICLE_LIST_PREVIEW } from "@lib/queries/article";

export const QNA_CATEGORY = {
  id: 1,
  name: "질문과 답변",
};

const QnaArticleList = () => {
  const params = {
    categoryId: QNA_CATEGORY.id.toString(),
    page: 0,
    size: 5,
    popular: false,
  };
  const { data } = useResource({
    key: ARTICLE_LIST_PREVIEW.createKey({
      params,
    }),
    fetcher: () => ARTICLE_LIST_PREVIEW.fetcher({ params }),
  });
  return (
    <ListBox>
      {data?.data.articles.slice(0, 4).map((article) => (
        <Link key={article.id} href={`/community/list/${article.id}`} passHref>
          <Article>
            <h4>{article.title}</h4>
            <CommonInfo
              username={article.user.nickname}
              year={1}
              date={article.createdAt}
            />
          </Article>
        </Link>
      ))}
    </ListBox>
  );
};
export default QnaArticleList;
