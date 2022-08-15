import type { NextPage } from "next";
import { Box } from "../components/common/Box";
import HtmlHeader from "../components/common/HtmlHeader";
import Keyvisual from "../components/Keyvisual";
import MapComponent from "../components/common/MapComponent";
import FriendProfileCard from "../components/common/CardUI/ProfileCard";
import TopNav from "../components/TopNav";
import styled from "styled-components";
import FriendCardContainer from "../containers/card/FriendCardContainer";
import { createResource } from "../hooks/useResource";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

export const data1Resource = createResource({
  key: "data-1",
  fetcher: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const body = await res.json();

    return body;
  },
});

export const data2Resource = createResource({
  key: "data-2",
  fetcher: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const body = await res.json();

    return body;
  },
});

const FriendProfileList = styled(Box)`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 15rem;
`;

const FindFriend: NextPage = (initProps: any) => {
  return (
    <>
      <HtmlHeader />
      {/* 상단영역 */}
      <TopNav />
      <Keyvisual />
      {/* 본문영역 */}
      <FriendCardContainer />
      <MapComponent />
    </>
  );
};

// 2. 페이지에서 사용할 리소스 명시하기

const page: any = FindFriend;
page.requiredResources = [data1Resource, data2Resource];

export default FindFriend;

// const dd = (FindHome.getInitialProps = async (ctx) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const body = await res.json();

//   return { tests: body.title };
// });
