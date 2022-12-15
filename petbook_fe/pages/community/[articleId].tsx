import { GetServerSidePropsContext, NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "@components/common/HtmlHeader";
import ImageSliderModal from "@components/community/article/detail/ImageSliderModal";
import { articleRequest, commentRequest } from "@lib/API/petBookAPI";
import { createRequest } from "@lib/hooks/common/useResource";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/ArticleContainer";
import cookies from "next-cookies";

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

type PetbookPage = NextPage<ReturnType<typeof getServerSideProps>["props"]> & {
  requiredResources?: [typeof ARTICLE_ITEM] | [typeof ARTICLE_ITEM, typeof COMMENT_LIST];
};

const ArticleDetail: PetbookPage = ({ token }) => {
  return (
    <>
      <HtmlHeader />
      <ArticleDetailMain>
        <BackButton position="start" />
        <ArticleContainer isLogin={token !== null} />
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

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const allCookies = cookies(ctx);
  const token = allCookies.petBookUser;
  if (token) {
    ArticleDetail.requiredResources = [ARTICLE_ITEM, COMMENT_LIST];
  } else {
    ArticleDetail.requiredResources = [ARTICLE_ITEM];
  }
  return {
    props: {
      token: (token === undefined || token === "") ? null : token
    }
  };
};

export default ArticleDetail;
