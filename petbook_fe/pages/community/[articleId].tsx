import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "@components/common/HtmlHeader";
import CommentSection from "@components/community/comment/CommentSection";
import ChatSideBanner from "@components/community/article/detail/ChatSideBanner";
import ArticleSection from "@components/community/article/detail/ArticleSection";
import ImageSliderModal from "@components/community/article/detail/ImageSliderModal";
import { articleRequest } from "@lib/API/petBookAPI";
import { createResource } from "@lib/hooks/useResource";

const ArticleDetailMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 847px;
  width: 90vw;

  margin: 40px auto;
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
        <CommentSection />
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
