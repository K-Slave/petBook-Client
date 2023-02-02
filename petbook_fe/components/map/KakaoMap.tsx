import React from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import { KakaoMapDiv } from "./KakaoMap.style";

const KakaoMap = () => {
  return (
    <KakaoMapDiv center={{ lat: 33.5563, lng: 126.79581 }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello petBook!</div>
      </MapMarker>
    </KakaoMapDiv>
  );
};

export default KakaoMap;
