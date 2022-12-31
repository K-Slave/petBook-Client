import { NextPage, NextPageContext } from "next";
import styled from "styled-components";
import ImageSliderModal from "@components/community/article/ImageSliderModal";
import { articleRequest, commentRequest } from "@lib/API/petBookAPI";
import { createRequest } from "@lib/hooks/common/useResource";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/ArticleContainer";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { getHttpOnlyCookie } from "@lib/utils/httpOnlyCookie";
import { useEffect } from "react";

export const ARTICLE_ITEM = {
  key: "ARTICLE_ITEM",
  fetcher: articleRequest.article_item,
};

export const ARTICLE_CREATE_LIKE = createRequest({
  key: "ARTICLE_CREATE_LIKE",
  requester: articleRequest.article_create_like,
});

export const ARTICLE_DELETE_LIKE = createRequest({
  key: "ARTICLE_DELETE_LIKE",
  requester: articleRequest.article_delete_like,
});

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
  requester: commentRequest.comment_update,
});

export const COMMENT_DELETE = createRequest({
  key: "COMMENT_DELETE",
  requester: commentRequest.comment_delete,
});

export const COMMENT_CREATE_LIKE = createRequest({
  key: "COMMENT_CREATE_LIKE",
  requester: commentRequest.comment_create_like,
});

export const COMMENT_DELETE_LIKE = createRequest({
  key: "COMMENT_DELETE_LIKE",
  requester: commentRequest.comment_delete_like,
});

interface Props {
  token: string | null;
}
type PetbookPage = NextPage<Props> & {
  requiredResources?:
    | [typeof ARTICLE_ITEM]
    | [typeof ARTICLE_ITEM, typeof COMMENT_LIST];
};

const ArticleDetail: PetbookPage = ({ token }) => {
  useEffect(() => {
    if (token) {
      // sprPetBookClient in client-side
      sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);
  return (
    <>
      <Main>
        <BackButton position="start" />
        <ArticleContainer isLogin={token !== null} />
        <BackButton position="end" />
      </Main>
      <ImageSliderModal />
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 847px;
  width: 90vw;

  margin: 40px auto;
`;

ArticleDetail.getInitialProps = async (
  ctx: NextPageContext
): Promise<Props> => {
  const token = await getHttpOnlyCookie({ ctx, key: "petBookUser" });
  if (token) {
    // sprPetBookClient in server-side and client-side
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    ArticleDetail.requiredResources = [ARTICLE_ITEM, COMMENT_LIST];
  } else {
    ArticleDetail.requiredResources = [ARTICLE_ITEM];
  }
  return {
    token: token === undefined || token === "" ? null : token,
  };
};

export default ArticleDetail;
