import { NextPage } from "next";
import styled from "styled-components";
import WriteCategory from "../../components/write/WriteCategory";
import { createRequest, createResource } from "../../lib/hooks/useResource";
import WriteContainer from "../../containers/WriteContainer";
import { boardRequest } from "../../lib/API/petBookAPI";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

export const BOARD_CREATE = createRequest({
  key: "BOARD_CREATE",
  requester: boardRequest.board_create,
});

export const BOARD_LIST = createResource({
  key: "BOARD_LIST_1",
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
    <WriteMain className="Content">
      <WriteCategory />
      <WriteContainer />
    </WriteMain>
  );
};

// 2. 페이지에서 사용할 리소스 명시하기

type WritePageType = NextPage & {
  requiredResources?: [typeof BOARD_LIST];
};

const WritePage: WritePageType = Write;
WritePage.requiredResources = [BOARD_LIST];

export default WritePage;
