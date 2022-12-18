/* global kakao */
import { useEffect } from "react";
import styled from "styled-components";

// data
import hospitalData from "@data/all_hospital.json";

const MapBox = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MapComponent = () => {
  useEffect(() => {
    const { kakao } = window;

    kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.514454, 127.0528269),
        level: 3,
      };
      if (!container) return;
      const map = new kakao.maps.Map(container, options);

      hospitalData.forEach((el) => {
        const markerPosition = new kakao.maps.LatLng(
          Number(el.lng),
          Number(el.lat)
        );
        new kakao.maps.Marker({ map, position: markerPosition }).setMap(map);
      });

      function setCenter() {
        // 이동할 위도 경도 위치를 생성합니다
        const moveLatLon = new kakao.maps.LatLng(37.514454, 127.0528269);

        // 지도 중심을 이동 시킵니다
        map.setCenter(moveLatLon);
      }

      function panTo() {
        // 이동할 위도 경도 위치를 생성합니다
        const moveLatLon = new kakao.maps.LatLng(37.514454, 127.0528269);

        // 지도 중심을 부드럽게 이동시킵니다
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
        map.panTo(moveLatLon);
      }
    });
  }, []);
  return <MapBox id="map" />;
};

export default MapComponent;
