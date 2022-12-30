import ArticleSection from "@components/community/article/detail/ArticleSection";
import CommentForm from "@components/community/comment/CommentForm";
import { NormalItem, QnaItem } from "@components/community/comment/CommentItem";
import CommentList from "@components/community/comment/CommentList";
import useResource from "@lib/hooks/common/useResource";
import { ARTICLE_ITEM } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import styled from "styled-components";

const ArticleContainer = ({ isLogin }: { isLogin: boolean }) => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const { data } = useResource({
    key: `${ARTICLE_ITEM.key}_${articleId}`,
    fetcher: () => ARTICLE_ITEM.fetcher(`/${articleId}`),
  });
  return (
    <>
      <ArticleSection data={data?.data} />
      {isLogin && (
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
      )}
    </>
  );
};

const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default ArticleContainer;
