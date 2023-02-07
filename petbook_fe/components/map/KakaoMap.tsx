/* global kakao */
import { HospitalList } from "@lib/API/petBookAPI/types/hospitalRequest";
import useResource from "@lib/hooks/common/useResource";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import React, { PropsWithChildren, useEffect } from "react";
import { MapInfoWindow, MapMarker, useMap } from "react-kakao-maps-sdk";
import {
  KakaoMapDiv,
  KakaoMapMarker,
  MarkerInfoWindowDiv,
  MarkerInfoWindowStyle,
} from "./KakaoMap.style";

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
    <KakaoMapDiv
      center={{
        lat: poiData ? poiData.latitude : 127.5,
        lng: poiData ? poiData.longitude : 37.5,
      }}
    >
      {children}
    </KakaoMapDiv>
  );
};

Wrap.defaultProps = {
  poiData: {
    id: 0,
    name: "",
    address: "",
    latitude: 127.5,
    longitude: 37.5,
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
    return new kakao.maps.LatLng(poiData.longitude, poiData.latitude);
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
          // <KakaoMapMarker
          //   key={poiData.name}
          //   position={{ lat: poiData.longitude, lng: poiData.latitude }}
          //   image={{
          //     src: "",
          //     size: {
          //       width: 0,
          //       height: 0,
          //     },
          //   }}
          // >

          // </KakaoMapMarker>
          <MapInfoWindow
            className="Marker__Info__Window"
            position={{ lat: poiData.longitude, lng: poiData.latitude }}
            style={{ top: "5px !important" }}
          >
            <span className="text">{poiData.name}</span>
          </MapInfoWindow>
        );
      })}
    </>
  );
};

KakaoMap.Wrap = React.memo(Wrap);
KakaoMap.List = List;

export default KakaoMap;
