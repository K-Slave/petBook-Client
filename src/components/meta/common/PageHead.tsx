import Head from "next/head";
import React from "react";

const PageHead = ({ currentPath }: { currentPath: string }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>특별한 동물을 위한 특별한 전자책 - 펫북</title>
      <meta name="description" content="펫북 페이지 입니다." />
      <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
      />
      <link
        className="Kakao__Pre"
        rel={`${currentPath.includes("hospitalmap") ? "preload" : "prefetch"}`}
        as="text/javascript"
        href="https://dapi.kakao.com/v2/maps/sdk.js?appkey=d5c682ad42a1b2dc53379222a3b46761&libraries=services,clusterer&autoload=false"
      />
    </Head>
  );
};

export default PageHead;
