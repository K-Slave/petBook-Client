/* global kakao */
import { HospitalList } from "@lib/API/petBookAPI/types/hospitalRequest";
import useResource from "@lib/hooks/common/useResource";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import React, { PropsWithChildren, useEffect } from "react";
import { CustomOverlayMap, useMap } from "react-kakao-maps-sdk";
import { KakaoMapDiv, KakaoMapMarker, OverLayDiv } from "./KakaoMap.style";

const KakaoMap = () => {
  const hospital = useResource({ ...HOSPITAL_LIST, key: ["HOSPITAL_LIST"] });

  if (hospital.status === "success") {
    localConsole?.log(hospital.data.data, "hospital");

    return (
      <KakaoMap.Wrap poiData={hospital.data.data.hospitals[0]}>
        <KakaoMap.List poiDataList={hospital.data.data.hospitals} />
      </KakaoMap.Wrap>
    );
  }

  return <></>;
};

interface WrapProps {
  poiData?: HospitalList;
}

const Wrap = ({ children, poiData }: PropsWithChildren<WrapProps>) => {
  return (
    <>
      <KakaoMapDiv
        center={{
          lat: poiData ? poiData.latitude : 37.5,
          lng: poiData ? poiData.longitude : 127.5,
        }}
      >
        {children}
      </KakaoMapDiv>
    </>
  );
};

Wrap.defaultProps = {
  poiData: {
    id: 0,
    name: "",
    address: "",
    latitude: 37.5,
    longitude: 127.5,
    n_id: 0,
  },
};

interface MarkerListProps {
  poiDataList: HospitalList[];
}

const List = ({ poiDataList }: MarkerListProps) => {
  const map = useMap();

  const bounds = new kakao.maps.LatLngBounds();

  const latLngList = poiDataList.map((poiData) => {
    return new kakao.maps.LatLng(poiData.latitude, poiData.longitude);
  });

  latLngList.forEach((latLng) => {
    bounds.extend(latLng);
  });

  useEffect(() => {
    map.setBounds(bounds);
  }, []);

  return (
    <>
      {poiDataList.map((poiData, idx) => {
        return (
          <>
            <KakaoMapMarker
              key={poiData.name}
              position={{ lat: poiData.latitude, lng: poiData.longitude }}
              image={{
                src: "",
                size: {
                  width: 0,
                  height: 0,
                },
              }}
            />
            <CustomOverlayMap
              position={{ lat: poiData.latitude, lng: poiData.longitude }}
              yAnchor={1}
            >
              <OverLayDiv>
                <div className="OverLay__Mark" />
                <button type="button" className="OverLay__Button">
                  <span className="title">{poiData.name}</span>
                </button>
                <div className="OverLay__Point" />
              </OverLayDiv>
            </CustomOverlayMap>
          </>
        );
      })}
    </>
  );
};

KakaoMap.Wrap = React.memo(Wrap);
KakaoMap.List = List;

export default KakaoMap;
