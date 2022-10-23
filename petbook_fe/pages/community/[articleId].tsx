/* eslint-disable react/jsx-props-no-spreading */
import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "@components/common/HtmlHeader";
import CommentSection from "@components/community/comment/CommentSection";
import ChatSideBanner from "@components/community/article/detail/ChatSideBanner";
import ArticleSection from "@components/community/article/detail/ArticleSection";
import ImageSliderModal from "@components/community/article/detail/ImageSliderModal";

const Main = styled.main`
  display: flex;
  align-items: start;
  gap: 20px;

  max-width: 1064px;
  width: 90vw;

  margin: 40px auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 847px;
`;

const ArticleDetail: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      <Main>
        <ChatSideBanner />
        <Wrapper>
          <ArticleSection />
          <CommentSection />
        </Wrapper>
      </Main>
      <ImageSliderModal />
    </>
  );
};

export default ArticleDetail;
