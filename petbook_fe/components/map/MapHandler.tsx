/* global kakao */

import useResource from "@lib/hooks/common/useResource";
import { setMarker, setInfoWindow } from "@lib/utils/kakaoMaps/kakaoMarkers";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import React, { useEffect, useRef } from "react";
import { MapInfoWindowDiv } from "./MapHandler.style";

const MapHandler = ({
  mapRef,
}: {
  mapRef: React.RefObject<HTMLDivElement>;
}) => {
  const infoWindowRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <MapHandler.InfoWindow infoWindowRef={infoWindowRef} />
      <MapHandler.Init mapRef={mapRef} infoWindowRef={infoWindowRef} />
    </>
  );
};

let latLngList: kakao.maps.LatLng[] = [];

const Init = ({
  mapRef,
  infoWindowRef,
}: {
  mapRef: React.RefObject<HTMLDivElement>;
  infoWindowRef: React.RefObject<HTMLDivElement>;
}) => {
  const hospital = useResource({ ...HOSPITAL_LIST, key: ["HOSPITAL_LIST"] });
  const kakaoMapDom = mapRef.current as HTMLDivElement;

  const options = {
    // 지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
    level: 3, // 지도의 레벨(확대, 축소 정도)
  };

  const map = new kakao.maps.Map(kakaoMapDom, options);

  const bounds = new kakao.maps.LatLngBounds();

  if (hospital.status === "success") {
    const poiDataList = hospital.data.data.hospitals;

    if (poiDataList.length > 1) {
      latLngList = poiDataList.map((poiData) => {
        return new kakao.maps.LatLng(poiData.latitude, poiData.longitude);
      });
      const markerList: kakao.maps.Marker[] = [];

      latLngList.forEach((latLng) => {
        // TODO : marker list 를 취급하는 함수 만들어야 함
        const marker = setMarker({ map, kakaoLatLng: latLng });

        markerList.push(marker);

        bounds.extend(latLng);
      });

      // TODO: bounds 를 취급하는 함수 만들어야 함
      map.setBounds(bounds);
    }

    if (poiDataList.length <= 1) {
      options.center = new kakao.maps.LatLng(
        hospital.data.data.hospitals[0].latitude,
        hospital.data.data.hospitals[0].longitude
      );

      setMarker({ map, kakaoLatLng: options.center });

      options.level = 6;
    }
  }

  useEffect(() => {
    if (infoWindowRef.current) {
      const infoWindowTemplateDom = infoWindowRef.current;

      latLngList.forEach((latLng) => {
        const infoWindow = setInfoWindow({
          map,
          kakaoLatLng: latLng,
          template: infoWindowTemplateDom,
        });
      });
    }
  }, [infoWindowRef]);

  return <></>;
};

const InfoWindow = ({
  infoWindowRef,
}: {
  infoWindowRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <MapInfoWindowDiv
      className="TESTSETSET"
      ref={infoWindowRef}
      style={{ opacity: 0 }}
    />
  );
};

MapHandler.InfoWindow = InfoWindow;
MapHandler.Init = Init;

export default MapHandler;
