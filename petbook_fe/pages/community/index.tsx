import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import styled from "styled-components";
import About from "../../components/community/about/About";
import WriteButton from "../../components/community/WriteButton";
import SectionContainer from "../../containers/SectionContainer";
import { createResource } from "../../lib/hooks/useResource";
import { boardRequest, categoryRequest } from "../API/petBookAPI";

export const board_list = createResource({
  key: "board_list_1",
  fetcher: boardRequest.board_list,
});

export const category_list = createResource({
  key: "category_list",
  fetcher: categoryRequest.category_list,
});

const Community: NextPage = ({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.page === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/community?page=1",
      },
      props: {
        page: 1,
      },
    };
  } else {
    return {
      props: {
        page: query.page,
      },
    };
  }
};
