import { NextPage } from "next";
import styled from "styled-components";
import WriteCategory from "../../components/write/WriteCategory";
import WriteForm from "../../components/write/WriteForm";
import WriteHashTags from "../../components/write/WriteHashTags";
import WriteImgSubmit from "../../components/write/WriteImgSubmit";
import WriteSubmit from "../../components/write/WriteSubmit";
import { createRequest } from "../../hooks/useResource";
import "../../styles/WritePage.module.scss";
import { boardRequest } from "../api/petBook_API";
import { board_list } from ".";
import WriteContainer from "../../containers/WriteContainer";

export const board_create = createRequest({
  key: "board_create",
  requester(reqBody: {
    title: string;
    content: string;
    category_id: number;
    reg_user: string;
    visible_status: string;
  }) {
    return () => {
      return boardRequest.board_create(reqBody);
    };
  },
});

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

const Write: NextPage = () => {
  console.log("Write render");

  return (
    <>
      <MainContainer className='Content'>
        <WriteCategory />
        <WriteContainer />
      </MainContainer>
    </>
  );
};

type WritePageType = NextPage & {
  requiredResources?: [typeof board_list];
};

const WritePage: WritePageType = Write;
WritePage.requiredResources = [board_list];

export default WritePage;
