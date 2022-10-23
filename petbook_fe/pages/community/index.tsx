import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { boardRequest, categoryRequest } from "../../lib/API/petBookAPI";
import About from "../../components/community/about/About";
import WriteButton from "../../components/community/WriteButton";
import SectionContainer from "../../containers/SectionContainer";
import { createResource } from "../../lib/hooks/useResource";

export const BOARD_LIST = createResource({
  key: "board_list_1",
  fetcher: boardRequest.board_list,
});

export const CATEGORY_LIST = createResource({
  key: "category_list",
  fetcher: categoryRequest.category_list,
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
        <SectionContainer />
      </Sections>
      <WriteButton />
    </Container>
  );
};

type PetbookPages = NextPage & {
  requiredResources?: [typeof BOARD_LIST];
};

const CommunityIndex: PetbookPages = Community;
CommunityIndex.requiredResources = [BOARD_LIST]; // category_list

export default CommunityIndex;
