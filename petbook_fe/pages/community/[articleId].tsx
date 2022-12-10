import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "@components/common/HtmlHeader";
import ChatSideBanner from "@components/community/article/detail/ChatSideBanner";
import ArticleSection from "@components/community/article/detail/ArticleSection";
import ImageSliderModal from "@components/community/article/detail/ImageSliderModal";
import { articleRequest, commentRequest } from "@lib/API/petBookAPI";
import { createRequest, createResource } from "@lib/hooks/common/useResource";
import CommentList from "@components/community/comment/CommentList";
import CommentForm from "@components/community/comment/CommentForm";
import BackButton from "@components/community/BackButton";

export const ARTICLE_ITEM = {
  key: "ARTICLE_ITEM",
  fetcher: articleRequest.article_item,
};

export const COMMENT_LIST = {
  key: "COMMENT_LIST",
  fetcher: commentRequest.comment_list,
};

export const COMMENT_CREATE = createRequest({
  key: "COMMENT_CREATE",
  requester: commentRequest.comment_create,
});

export const COMMENT_UPDATE = createRequest({
  key: "COMMENT_UPDATE",
  requester: commentRequest.comment_update
});

export const COMMENT_DELETE = createRequest({
  key: "COMMENT_DELETE",
  requester: commentRequest.comment_delete
});

const ArticleDetail: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      <ArticleDetailMain>
        <BackButton position="start" />
        <ArticleSection />
        <CommentSection>
          <CommentForm />
          <CommentList />
        </CommentSection>
        <BackButton position="end" />
      </ArticleDetailMain>
      <ImageSliderModal />
    </>
  );
};

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
  gap: 24px;
`;

type PetbookPages = NextPage & {
  requiredResources?: [typeof ARTICLE_ITEM, typeof COMMENT_LIST];
};

const ArticleDetailPage: PetbookPages = ArticleDetail;
ArticleDetailPage.requiredResources = [ARTICLE_ITEM, COMMENT_LIST];

export default ArticleDetailPage;
