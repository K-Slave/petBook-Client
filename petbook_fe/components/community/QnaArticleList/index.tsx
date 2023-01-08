import useResource from "@lib/hooks/common/useResource";
import { createResourceByCategory } from "@pages/community";
import Link from "next/link";
import CommonInfo from "@components/community/CommonInfo";
import { ListBox, Article } from "./styled";

export const QNA_CATEGORY = {
  id: 1,
  name: "질문과 답변",
};

const QnaArticleList = () => {
  const { data } = useResource(createResourceByCategory(QNA_CATEGORY));
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
