import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

export const KakaoMapDiv = styled(Map)`
  width: 100%;
  height: 100%;
`;

export const KakaoMapMarker = styled(MapMarker)``;

export const OverLayDiv = styled.div`
  position: relative;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 0;
  height: 0;

  .OverLay__Mark {
    position: absolute;
    bottom: 51px;
    z-index: 10;

    padding: 10px 14px 7px;

    background: #ffffff;

    border: 1.5px solid #383835;
    border-radius: 31px;
  }

  .OverLay__Button {
    position: absolute;
    bottom: 10.7px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 14px 25px 10px;

    background-color: #383835;
    border-radius: 31px;

    color: #fff;

    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  .OverLay__Point {
    position: absolute;
    bottom: -26px;
    z-index: -1;

    border-radius: 4px;
    border-top: 26px solid transparent;
    border-right: 26px solid #383835;
    border-bottom: 26px solid transparent;
    border-left: 26px solid transparent;

    transform: rotate(-90deg);
  }
`;
