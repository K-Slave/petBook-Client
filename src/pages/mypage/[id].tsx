import AuthSelfMask from "@components/common/AuthSelfMask";
import MypageBanner from "@components/mypage/MypageBanner";
import MypageContainer from "@containers/mypage/MyPageContainer";

import { NextPage } from "next";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

type NextPageWithResource = NextPage & {
  requiredResources?: [];
};

const MypageGlobalStyle = createGlobalStyle`
  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MypageMain = styled.main`
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 65vw;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;

  width: 100vw;

  & > h1 {
    width: 100%;
    max-width: 78rem;
  }

  & > section {
    width: 100%;
    max-width: 78rem;
  }
`;

const MyPage: NextPageWithResource = () => {
  return (
    <>
      <MypageGlobalStyle />
      <MypageBanner />
      <MypageMain className="Mypage__Main__Wrap">
        <MypageContainer />
      </MypageMain>
    </>
  );
};

export default MyPage;
