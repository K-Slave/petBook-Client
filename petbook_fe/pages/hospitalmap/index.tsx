import KakaoMap from "@components/map/KakaoMap";
import type { NextPage } from "next";
import Script from "next/script";
import { createGlobalStyle } from "styled-components";

const HospitalMapGlobalStyle = createGlobalStyle`
  #__next {
    display: grid;
    grid-template-rows: 164px auto;
    grid-template-columns: auto 370px;

    min-width: 100%;
    min-height: 100vh;
  }

  .Top__Nav__Wrap {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const HospitalMapPage: NextPage = (pageProps: any) => {
  return (
    <>
      <HospitalMapGlobalStyle />
      {/* <Script
        type="text/javascript"
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=d5c682ad42a1b2dc53379222a3b46761&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      /> */}
      <KakaoMap />
      <div />
    </>
  );
};

export default HospitalMapPage;
