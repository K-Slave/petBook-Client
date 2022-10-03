import { NextPage } from "next";
import styled from "styled-components";
import WriteCategory from "../../components/write/WriteCategory";
import { createRequest, createResource } from "../../hooks/useResource";
import "../../styles/WritePage.module.scss";
import { boardRequest } from "../api/petBook_API";
import { board_list } from ".";
import WriteContainer from "../../containers/WriteContainer";
import board_axios from "../api/petBook_API/boardReq";
import { board_list_defaults } from "../api/petBook_API/boardRequest";

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

const board_list_axios = createResource(
  {
    key: "board_list_axios_1",
    fetcher: board_axios.board_listreq,
  },
  board_list_defaults
);

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
      <MainContainer className="Content">
        <WriteCategory />
        <WriteContainer />
      </MainContainer>
    </>
  );
};

type WritePageType = NextPage & {
  requiredResources?: [typeof board_list_axios];
};

const WritePage: WritePageType = Write;
WritePage.requiredResources = [board_list_axios];

export default WritePage;
