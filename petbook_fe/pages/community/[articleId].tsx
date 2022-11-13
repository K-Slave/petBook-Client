import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "@components/common/HtmlHeader";
import ChatSideBanner from "@components/community/article/detail/ChatSideBanner";
import ArticleSection from "@components/community/article/detail/ArticleSection";
import ImageSliderModal from "@components/community/article/detail/ImageSliderModal";
import { articleRequest } from "@lib/API/petBookAPI";
import { createResource } from "@lib/hooks/common/useResource";
import CommentList from "@components/community/comment/CommentList";
import CommentForm from "@components/community/comment/CommentForm";

const ArticleDetailMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 847px;
  width: 90vw;

  margin: 40px auto;
`;

const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ARTICLE_ITEM = {
  key: "ARTICLE_ITEM",
  fetcher: articleRequest.article_item,
};

const ArticleDetail: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      <ArticleDetailMain>
        <ArticleSection />
        <CommentSection>
          <CommentList />
          <CommentForm />
        </CommentSection>
      </ArticleDetailMain>
      <ImageSliderModal />
    </>
  );
};

type PetbookPages = NextPage & {
  requiredResources?: [typeof ARTICLE_ITEM];
};

const ArticleDetailPage: PetbookPages = ArticleDetail;
ArticleDetailPage.requiredResources = [ARTICLE_ITEM];

export default ArticleDetailPage;
