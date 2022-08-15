import type { NextPage } from "next";
import HtmlHeader from "../components/common/HtmlHeader";
import Keyvisual from "../components/Keyvisual";
import TopNav from "../components/TopNav";
import { createResource } from "../hooks/useResource";
import MapContainer from "../containers/MapContainer";

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

const FindHospital: NextPage = (initProps: any) => {
  return (
    <>
      <HtmlHeader />
      {/* 상단영역 */}
      <TopNav />
      <Keyvisual />
      {/* 본문영역 */}
      <MapContainer />
    </>
  );
};

// 2. 페이지에서 사용할 리소스 명시하기

const page: any = FindHospital;
page.requiredResources = [data1Resource, data2Resource];

export default FindHospital;

// const dd = (FindHome.getInitialProps = async (ctx) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const body = await res.json();

//   return { tests: body.title };
// });
