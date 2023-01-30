import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { articleRequest, categorySprRequest } from "@lib/API/petBookAPI";
import CommunityBanner from "@components/community/CommunityBanner";
import WriteButton from "@components/community/WriteButton";
import { createResource } from "@lib/hooks/common/useResource";
import CommunitySection from "@components/community/CommunitySection";
import HotArticleList from "@components/community/HotArticleList";
import CategoryNav from "@components/community/CategoryNav";
import ArticlePreviewList from "@components/community/ArticlePreviewList";
import QnaArticleList, {
  QNA_CATEGORY,
} from "@components/community/QnaArticleList";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import Link from "next/link";
import SearchBar from "@components/community/SearchBar";

export const CATEGORY_LIST = createResource({
  key: ["CATEGORY_LIST"],
  fetcher: categorySprRequest.category_list,
});

export const HOT_ARTICLE_LIST = createResource({
  key: ["HOT_ARTICLE_LIST"],
  fetcher: () =>
    articleRequest.article_list({
      categoryId: "",
      page: 0,
      size: 5,
      popular: true,
    }),
});

export const createResourceByCategory = (category: CategoryItem) => ({
  key: ["ARTICLE_LIST", category.name || ""],
  fetcher: () =>
    articleRequest.article_list({
      categoryId:
        typeof category.id !== "undefined" && category.id === 0
          ? ""
          : (category.id as number),
      page: 0,
      size: 5,
      popular: false,
    }),
});

const Main = styled.main`
  width: 100%;
  max-width: 1330px;
  margin: 0 auto;
  padding: 52px 35px 0;
  margin-bottom: 100px;
`;

type PetbookPage = NextPage & {
  requiredResources?: (
    | typeof CATEGORY_LIST
    | typeof HOT_ARTICLE_LIST
    | ReturnType<typeof createResourceByCategory>
  )[];
};

const Community: PetbookPage = () => {
  return (
    <Main>
      <CommunityBanner />
      <CommunitySection
        title="지금 당신의 답변을 기다리고 있어요"
        sideElement={
          <Link href={getHrefWithCategory(QNA_CATEGORY)} passHref>
            <button type="button">더보기</button>
          </Link>
        }
      >
        <QnaArticleList />
      </CommunitySection>
      <CommunitySection title="이번주 hot 인기글">
        <HotArticleList />
      </CommunitySection>
      <CommunitySection title="실시간 live talk" sideElement={<SearchBar />}>
        <CategoryNav />
        <ArticlePreviewList />
      </CommunitySection>
      <WriteButton />
    </Main>
  );
};

Community.getInitialProps = async () => {
  const { data } = await CATEGORY_LIST.fetcher();
  const resources = data
    .concat([{ id: 0, name: "전체" }])
    .map((category) => createResourceByCategory(category));
  Community.requiredResources = [...resources, CATEGORY_LIST, HOT_ARTICLE_LIST];
};

export default Community;
