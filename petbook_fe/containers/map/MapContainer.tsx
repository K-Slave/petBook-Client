import Skeleton from "@components/common/Skeleton/Skeleton";
import KakaoMap from "@components/map/KakaoMap";
import { MapDiv } from "@components/map/Maptest.style";
import dynamic from "next/dynamic";
import Script from "next/script";
import React, { useRef, useState } from "react";

const Maptest = dynamic(() => import("@components/map/Maptest"), {
  ssr: false,
});

const MapContainer = () => {
  const [isMapLoad, setIsMapLoad] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Script
        defer
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d5c682ad42a1b2dc53379222a3b46761&libraries=services,clusterer&autoload=false"
        strategy="afterInteractive"
        onLoad={(e) => {
          setIsMapLoad(true);
        }}
      />
      {/* {isMapLoad ? <KakaoMap /> : <Skeleton borderRadius="0px" />} */}
      <MapDiv id="map" ref={mapRef} />
      {isMapLoad && <Maptest mapRef={mapRef} />}
    </>
  );
};

export default MapContainer;
