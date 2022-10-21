import { NextPage } from "next";
import styled from "styled-components";
import WriteCategory from "../../components/write/WriteCategory";
import { createRequest, createResource } from "../../lib/hooks/useResource";
import { boardRequest } from "../API/petBookAPI";
import WriteContainer from "../../containers/WriteContainer";
import "../../styles/WritePage.module.scss";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

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
      <WriteMain className="Content">
        <WriteCategory />
        <WriteContainer />
      </WriteMain>
    </>
  );
};

// 2. 페이지에서 사용할 리소스 명시하기

type WritePageType = NextPage & {
  requiredResources?: [typeof board_list];
};

const WritePage: WritePageType = Write;
WritePage.requiredResources = [board_list];

export default WritePage;
