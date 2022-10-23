import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { articleRequest, categorySprRequest } from "@lib/API/petBookAPI";
import About from "@components/community/about/About";
import WriteButton from "@components/community/WriteButton";
import SectionContainer from "@containers/SectionContainer";
import { createResource } from "@lib/hooks/useResource";
import ArticleListSection from "@components/community/article/ArticleListSection";

export const ARTICLE_LIST = createResource({
  key: "ARTICLE_LIST",
  fetcher: articleRequest.article_list,
});

export const CATEGORY_LIST = createResource({
  key: "CATEGORY_LIST",
  fetcher: categorySprRequest.category_list,
});

const Container = styled.main`
  background-color: #fffbf4;
`;

const Sections = styled.div`
  width: 90vw;
  max-width: 1280px;

  margin: 0 auto;
  padding-top: 80px;
`;

const Community: NextPage = () => {
  return (
    <Container>
      <About />
      <Sections>
        <ArticleListSection />
      </Sections>
      <WriteButton />
    </Container>
  );
};

type PetbookPages = NextPage & {
  requiredResources?: [typeof ARTICLE_LIST, typeof CATEGORY_LIST];
};

const CommunityIndex: PetbookPages = Community;
CommunityIndex.requiredResources = [ARTICLE_LIST, CATEGORY_LIST]; // category_list

export default CommunityIndex;
