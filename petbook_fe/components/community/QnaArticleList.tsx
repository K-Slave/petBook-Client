import useResource from "@lib/hooks/common/useResource";
import { ARTICLE_LIST } from "@pages/community";
import Link from "next/link";
import styled from "styled-components";
import CommonInfo from "./CommonInfo";

const QnaArticleList = () => {
  // const { data } = useResource(ARTICLE_LIST({ category: { id: 1, name: "질문과 답변" }, page: 0, size: 4 }));

  const { data } = useResource(ARTICLE_LIST);

  return (
    <ListBox>
      {data?.data.articles.slice(0, 4).map((article) => (
        <Link key={article.id} href={`/community/${article.id}`} passHref>
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

const ListBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 24px;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  padding: 32px;
  border-radius: 16px;
  cursor: pointer;
  h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 22px;
  }
  &:first-child {
    background-color: #ffedd1;
  }
  &:nth-child(2) {
    background-color: #ffe7d1;
  }
  &:nth-child(3) {
    background-color: #fcf7c8;
  }
  &:nth-child(4) {
    background-color: #ffe2dc;
  }
`;

export default QnaArticleList;
