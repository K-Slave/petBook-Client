import mapState from "@atoms/pageAtoms/hospitalmap/mapState";
import { HospitalInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import navigator from "@lib/modules/navigator";
import getRandomIdx from "@lib/utils/getRandomIdx";
import React from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

// const dd = {
//   latitude: 37.2820626,
//   longitude: 126.8295785,
//   petBookRegionName: "안산시 상록구 해양동",
//   region_type: "H",
//   code: "4127153700",
//   address_name: "경기도 안산시 상록구 해양동",
//   region_1depth_name: "경기도",
//   region_2depth_name: "안산시 상록구",
//   region_3depth_name: "해양동",
//   region_4depth_name: "",
//   x: 126.82007738608132,
//   y: 37.294699470442765,
// };
interface OverLayButtonProps {
  isMatched: boolean;
}

const OverLayDiv = styled.div`
  position: relative;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 0;
  height: 0;

  .OverLay__Mark {
    position: absolute;
    bottom: 3.1875rem;
    z-index: 10;

    padding: 0.625rem 0.875rem 0.4375rem;

    background: #ffffff;

    border: 0.0938rem solid
      ${(props: OverLayButtonProps) =>
        props.isMatched === true ? "#FF6847" : "#383835"};
    border-radius: 31px;

    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.02em;
  }

  .OverLay__Button {
    position: absolute;
    bottom: 0.6687rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.875rem 1.5625rem 0.625rem;

    background-color: ${(props: OverLayButtonProps) =>
      props.isMatched === true ? "#FF6847" : "#383835"};
    border-radius: 31px;

    color: #fff;

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;
  }

  .OverLay__Point {
    position: absolute;
    bottom: -1.625rem;
    z-index: -1;

    border-radius: 4px;
    border-top: 1.625rem solid transparent;
    border-right: 1.625rem solid
      ${(props) => (props.isMatched === true ? "#FF6847" : "#383835")};
    border-bottom: 1.625rem solid transparent;
    border-left: 1.625rem solid transparent;

    transform: rotate(-90deg);
  }
`;

const randomBox = [
  "🐹",
  "🐰",
  "🐹🐹",
  "🐰🐰",
  "🐹🐰",
  "🐹🐹🐹",
  "🐰🐰🐰",
  "🐰🐹🐰",
  "🐹🐰🐹",
  "🐹🐹🐹🐹",
  "🐰🐰🐰🐰",
  "🐹🐰🐹🐰",
  "🐰🐹🐰🐹",
  "🐰🐹🐹🐰",
  "🐹🐰🐰🐹",
  "🐹🐹🐹🐹 +",
  "🐰🐰🐰🐰 +",
  "🐹🐰🐹🐰 +",
  "🐰🐹🐰🐹 +",
  "🐰🐹🐹🐰 +",
  "🐹🐰🐰🐹 +",
];

interface KaKaoOverlayProps {
  poiData: HospitalInfo;
  isMatched: boolean;
}

const KaKaoOverlay = ({ poiData, isMatched }: KaKaoOverlayProps) => {
  const setMapState = useSetRecoilState(mapState);

  return (
    <CustomOverlayMap
      position={{ lat: poiData.latitude, lng: poiData.longitude }}
      yAnchor={1}
      zIndex={isMatched ? 200 : 1}
    >
      <OverLayDiv isMatched={isMatched}>
        <div className="OverLay__Mark">
          {randomBox[getRandomIdx(randomBox)]}
        </div>
        <button
          type="button"
          className="OverLay__Button"
          onClick={() => {
            navigator({
              url: `?id=${poiData.id}`,
              options: {
                shallow: true,
              },
            });
            setMapState((state) => ({
              ...state,
              currentPoidata: {
                ...poiData,
              },
            }));
          }}
        >
          <span className="title">{poiData.name}</span>
        </button>
        <div className="OverLay__Point" />
      </OverLayDiv>
    </CustomOverlayMap>
  );
};

export default KaKaoOverlay;
