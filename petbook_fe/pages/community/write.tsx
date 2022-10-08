import { NextPage } from "next";
import styled from "styled-components";
import WriteCategory from "../../components/write/WriteCategory";
import { createRequest, createResource } from "../../hooks/useResource";
import { boardRequest } from "../api/petBook_API";
import WriteContainer from "../../containers/WriteContainer";
import "../../styles/WritePage.module.scss";

export const board_create = createRequest({
  key: "board_create",
  requester: boardRequest.board_create,
});

export const board_list = createResource({
  key: "board_list_1",
  fetcher: boardRequest.board_list,
});

const WriteMain = styled.main`
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
      <WriteMain className='Content'>
        <WriteCategory />
        <WriteContainer />
      </WriteMain>
    </>
  );
};

type WritePageType = NextPage & {
  requiredResources?: [typeof board_list];
};

const WritePage: WritePageType = Write;
WritePage.requiredResources = [board_list];

export default WritePage;
