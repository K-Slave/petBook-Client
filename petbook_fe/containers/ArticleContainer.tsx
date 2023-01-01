import ArticleSection from "@components/community/article/ArticleSection";
import CommentForm from "@components/community/comment/CommentForm";
import { NormalItem, QnaItem } from "@components/community/comment/CommentItem";
import CommentList from "@components/community/comment/CommentList";
import useResource from "@lib/hooks/common/useResource";
import { ARTICLE_ITEM } from "@pages/community/list/[articleId]";
import { useRouter } from "next/router";
import styled from "styled-components";

const ArticleContainer = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const { data } = useResource({
    key: `${ARTICLE_ITEM.key}_${articleId}`,
    fetcher: () => ARTICLE_ITEM.fetcher(`/${articleId}`),
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
