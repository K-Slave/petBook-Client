/* global kakao */

import mapState from "@atoms/pageAtoms/hospitalmap/mapState";
import { HospitalInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import { useEffect } from "react";
import { useMap } from "react-kakao-maps-sdk";
import { useSetRecoilState } from "recoil";

interface Props {
  poiDataList: HospitalInfo[];
}

const useBounds = ({ poiDataList }: Props) => {
  const setMapState = useSetRecoilState(mapState);
  const map = useMap();
  const bounds = new kakao.maps.LatLngBounds();
  const latLngList = poiDataList.map((poiData) => {
    return new kakao.maps.LatLng(poiData.latitude, poiData.longitude);
  });

  latLngList.forEach((latLng) => {
    bounds.extend(latLng);
  });

  // TODO : 현위치 재검색 등에서 화면이 이동되지 않게 할수 있는지 시도 해볼것
  useEffect(() => {
    map.setBounds(bounds);
    setMapState((state) => ({ ...state, isBounded: true }));
  }, []);
};

export default useBounds;
