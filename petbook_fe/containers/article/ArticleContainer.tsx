import ArticleSection from "@components/community/article/ArticleSection";
import CommentForm from "@components/community/comment/CommentForm";
import { NormalItem, QnaItem } from "@components/community/comment/CommentItem";
import CommentList from "@components/community/comment/CommentList";
import { useResourceNew } from "@lib/resources";
import { ARTICLE_DETAIL } from "@lib/resources/article";
import { useRouter } from "next/router";
import styled from "styled-components";

const ArticleContainer = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const payload = {
    pathParam: articleId,
  };
  const { data } = useResourceNew({
    key: ARTICLE_DETAIL.createKey(payload),
    fetcher: () => ARTICLE_DETAIL.fetcher(payload),
  });
  return (
    <>
      <ArticleSection data={data?.data} />
      <CommentSection>
        {data?.data.category.name === "질문과 답변" ? (
          <>
            <CommentList Item={QnaItem} />
            <CommentForm />
          </>
        ) : (
          <>
            <CommentForm />
            <CommentList Item={NormalItem} />
          </>
        )}
      </CommentSection>
    </>
  );
};

const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default ArticleContainer;
