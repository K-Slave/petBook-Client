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
      <meta
        name="description"
        content={`강아지와 고양이의 인기에 밀려 소외된 이색 반려동물과 함께하는 집사님 들을 위한 정보 제공 포털 및 커뮤니티 서비스를 목표로 하고 있어요! 주변에서 우리 아이와 같은 반려동물 친구를 찾거나, 찾기 힘들었던 전문, 종합 동물 병원을 찾아보실 수 있어요. 선배 집사님들의 노하우를 공유 받을 수 있는 커뮤니티 게시판도 있고요, 집사님 들 끼리 친해지고 싶을 때, DM을 주고받을 수 있는 채팅 기능도 고려하고 있어요!`}
      />
      <link
        className="Kakao__Pre"
        rel={`${currentPath.includes("hospitalmap") ? "preload" : "prefetch"}`}
        as="text/javascript"
        href="https://dapi.kakao.com/v2/maps/sdk.js?appkey=d5c682ad42a1b2dc53379222a3b46761&libraries=services,clusterer&autoload=false"
      />

      <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
