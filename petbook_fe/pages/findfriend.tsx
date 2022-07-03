import type { NextPage } from "next";
import { Box } from "../components/common/Box";
import HtmlHeader from "../components/common/HtmlHeader";
import Keyvisual from "../components/Keyvisual";
import MapComponent from "../components/common/MapComponent";
import FriendProfileCard from "../components/common/CardUI/ProfileCard";
import TopNav from "../components/TopNav";
import styled from "styled-components";
import FriendCardContainer from "../containers/card/FriendCardContainer";
import localConsole from "../lib/localConsole";

const FriendProfileList = styled(Box)`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 15rem;
`;

const FindHome: NextPage = ({ tests }: any) => {
  localConsole.log(tests);

  return (
    <>
      <HtmlHeader />
      {/* 상단영역 */}
      <TopNav />
      <Keyvisual />
      {/* 본문영역 */}
      <FriendCardContainer />
      <MapComponent />
      test data : {tests}
    </>
  );
};

FindHome.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await res.json();

  return { tests: json.title };
};

// 1. 서버 사이드에서 가져올 리소스 정의하기

// const data1Resource = createResource({
//   key: 'data-1',
//   fetcher: async () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1')
//   }
// })

// function Page() {
//   return <ComponentA />
// }

// Page.requiredResources = [data1Resource];

export default FindHome;
