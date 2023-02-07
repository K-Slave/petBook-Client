import { Map, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

export const KakaoMapDiv = styled(Map)`
  width: 100%;
  height: 100%;
`;

export const KakaoMapMarker = styled(MapMarker)``;

export const MarkerInfoWindowStyle: React.CSSProperties = {};

export const MarkerInfoWindowDiv = styled(MapInfoWindow)`
  .text {
    color: #ccc;
  }
`;
