import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import About from "../../components/community/about/About";
import WriteButton from "../../components/community/WriteButton";
import SectionContainer from "../../containers/SectionContainer";
import { createResource } from "../../hooks/useResource";
import { boardRequest, categoryRequest } from "../api/petBook_API";
import { board_list_defaults } from "../api/petBook_API/boardRequest";
import { category_list_defaults } from "../api/petBook_API/categoryRequest";

export const board_list = createResource(
  {
    key: "board_list_1",
    fetcher: boardRequest.board_list,
  },
  board_list_defaults
);

export const category_list = createResource(
  {
    key: "category_list",
    fetcher: categoryRequest.category_list,
  },
  category_list_defaults
);

const Community: NextPage = () => {
  return (
    <>
      <Container>
        <About />
        <Sections>
          <SectionContainer />
        </Sections>
        <WriteButton />
      </Container>
    </>
  );
};

const Container = styled.main`
  background-color: #fffbf4;
`;

const Sections = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
`;

type PetbookPages = NextPage & {
  requiredResources?: [typeof board_list];
};

const Community_Index: PetbookPages = Community;
Community_Index.requiredResources = [board_list]; //category_list

export default Community_Index;
