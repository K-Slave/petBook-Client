/* global kakao */

import useResource from "@lib/hooks/common/useResource";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import React, { useRef } from "react";
import { MapDiv } from "./Maptest.style";

const Maptest = ({ mapRef }: { mapRef: React.RefObject<HTMLDivElement> }) => {
  const hospital = useResource({ ...HOSPITAL_LIST, key: ["HOSPITAL_LIST"] });
  const kakaoMapDom = mapRef.current as HTMLDivElement;

  localConsole?.log(kakao);

  const options = {
    // 지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
    level: 3, // 지도의 레벨(확대, 축소 정도)
  };

  const map = new kakao.maps.Map(kakaoMapDom, options);

  return <></>;
};

export default Maptest;
