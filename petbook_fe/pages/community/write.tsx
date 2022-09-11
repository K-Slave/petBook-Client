import { NextPage } from "next";
import styled from "styled-components";
import WriteEditor from "../../components/write/WriteEditor";
import WriteCategory from "../../components/write/WriteCategory";
import WriteForm from "../../components/write/WriteForm";
import WriteHashTags from "../../components/write/WriteHashTags";
import WriteImgSubmit from "../../components/write/WriteImgSubmit";
import WriteSubmit from "../../components/write/WriteSubmit";
import localConsole from "../../lib/localConsole";
import "../../styles/WritePage.module.scss";
import { createResource } from "../../hooks/useResource";
import fetchClient from "../api/fetch/fetchClient";

type board_create_dataType = {
  title: string;
  content: string;
  category_id: number;
  reg_user: string;
  visible_status: string;
};

export const board_create = (data?: board_create_dataType) => {
  return createResource({
    key: "board_create",
    fetcher: async () => {
      const response = await fetchClient.post("/board", data);

      const body = await response.json();

      return body;
    },
  });
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1064px;
  height: auto;

  margin: 0 auto;
`;

const Write: NextPage = (initProps) => {
  return (
    <>
      <MainContainer className='Content'>
        <WriteCategory />
        <WriteForm />
        <WriteImgSubmit />
        <WriteHashTags />
        <WriteSubmit />
      </MainContainer>
    </>
  );
};

type PetbookPages = NextPage & {
  requiredResources?: {
    key: string;
    fetcher: () => Promise<Response>;
  }[];
};

// const Community_Write: PetbookPages = Write;
// Community_Write.requiredResources = [board_create];

export default Write;
