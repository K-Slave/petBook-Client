import { NextPage } from "next";
import styled from "styled-components";
import WriteEditor from "../../components/write/WriteEditor";
import WriteCategory from "../../components/write/WriteCategory";
import WriteForm from "../../components/write/WriteForm";
import WriteHashTags from "../../components/write/WriteHashTags";
import WriteImgSubmit from "../../components/write/WriteImgSubmit";
import WriteSubmit from "../../components/write/WriteSubmit";
import localConsole from "../../lib/localConsole";
import { createRequest } from "../../hooks/useResource";
import "../../styles/WritePage.module.scss";
import { boardRequest } from "../api/petBook_API";

// (reqBody: {
//   title: string;
//   content: string;
//   category_id: number;
//   reg_user: string;
//   visible_status: string;
// })

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

export default Write;
