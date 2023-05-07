import ArticleSection from "@components/community/article/ArticleSection";
import CommentForm from "@components/community/comment/CommentForm";
import { NormalItem, QnaItem } from "@components/community/comment/CommentItem";
import CommentList from "@components/community/comment/CommentList";
import { useResource } from "@lib/hooks/common/useResource";
import { ARTICLE_DETAIL } from "@lib/resources/articleResource";
import { useRouter } from "next/router";
import styled from "styled-components";

const ArticleContainer = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const payload = {
    pathParam: articleId,
  };
  const { data } = useResource({
    resource: ARTICLE_DETAIL,
    payload,
  });
  return (
    <>
      <ArticleSection data={data?.response.data} />
      <CommentSection>
        {data?.response.data.category.name === "질문과 답변" ? (
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
