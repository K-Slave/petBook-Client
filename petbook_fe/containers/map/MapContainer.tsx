// import KakaoMap from "@components/map/KakaoMap";
import Skeleton from "@components/common/Skeleton/Skeleton";
import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

const KakaoMap = dynamic(() => import("@components/map/KakaoMap"), {
  loading: () => <Skeleton borderRadius="0px" />,
});

const MapContainer = () => {
  return (
    <>
      <Script
        async
        type="text/javascript"
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=d5c682ad42a1b2dc53379222a3b46761&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <KakaoMap />
    </>
  );
};

export default MapContainer;
