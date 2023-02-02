/* global kakao */
import { HospitalList } from "@lib/API/petBookAPI/types/hospitalRequest";
import useDidMountEffect from "@lib/hooks/common/useDidMountEffect";
import useResource from "@lib/hooks/common/useResource";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import React, { PropsWithChildren, useEffect } from "react";
import { MapMarker, useMap } from "react-kakao-maps-sdk";
import { KakaoMapDiv } from "./KakaoMap.style";

const KakaoMap = () => {
  const hospital = useResource({ ...HOSPITAL_LIST, key: ["HOSPITAL_LIST"] });

  if (hospital.status === "success") {
    localConsole?.log(hospital.data.data, "hospital");

    return (
      <KakaoMap.Wrap poiData={hospital.data.data[0]}>
        <KakaoMap.List poiDataList={hospital.data.data} />
      </KakaoMap.Wrap>
    );
  }

  return <></>;
};

const Wrap = ({ children, poiData }: PropsWithChildren<any>) => {
  return (
    <KakaoMapDiv center={{ lat: poiData.longitude, lng: poiData.latitude }}>
      {children}
    </KakaoMapDiv>
  );
};

interface MarkerListProps {
  poiDataList: HospitalList[];
}

const List = ({ poiDataList }: MarkerListProps) => {
  const dd = useMap();

  const bounds = new kakao.maps.LatLngBounds();

  const latLngList = poiDataList.map((poiData) => {
    return new kakao.maps.LatLng(poiData.longitude, poiData.latitude);
  });

  latLngList.forEach((latLng) => {
    bounds.extend(latLng);
  });

  useEffect(() => {
    dd.setBounds(bounds);
  }, []);

  return (
    <>
      {poiDataList.map((poiData, idx) => {
        return (
          <MapMarker
            key={poiData.name}
            position={{ lat: poiData.longitude, lng: poiData.latitude }}
          >
            <div style={{ color: "#000" }}>{poiData.name}</div>
          </MapMarker>
        );
      })}
    </>
  );
};

KakaoMap.Wrap = React.memo(Wrap);
KakaoMap.List = List;

export default KakaoMap;
