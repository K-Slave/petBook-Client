import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { articleRequest, categorySprRequest } from "@lib/API/petBookAPI";
import AboutSection from "@components/community/AboutSection";
import WriteButton from "@components/community/WriteButton";
import { createResource } from "@lib/hooks/common/useResource";
import ArticleFilter from "@components/community/article/list/ArticleFilter";
import ArticleList from "@components/community/article/list/ArticleList";
import CommunitySection from "@components/community/CommunitySection";

export const ARTICLE_LIST = createResource({
  key: "ARTICLE_LIST",
  fetcher: articleRequest.article_list,
});

export const CATEGORY_LIST = createResource({
  key: "CATEGORY_LIST",
  fetcher: categorySprRequest.category_list,
});

const CommunityDiv = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
`;

const Community: NextPage = () => {
  return (
    <main>
      <AboutSection />
      <CommunityDiv>
        <CommunitySection
          title="Live talk"
          description="실시간 업로드되는 유저들의 이야기"
        >
          <ArticleFilter />
          <ArticleList />
        </CommunitySection>
      </CommunityDiv>
      <WriteButton />
    </main>
  );
};

type PetbookPages = NextPage & {
  requiredResources?: [typeof ARTICLE_LIST, typeof CATEGORY_LIST];
};

const CommunityIndex: PetbookPages = Community;
CommunityIndex.requiredResources = [ARTICLE_LIST, CATEGORY_LIST]; // category_list

export default CommunityIndex;
