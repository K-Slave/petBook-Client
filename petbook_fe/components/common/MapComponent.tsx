import { useEffect } from "react";
import styled from "styled-components";

const MapBox = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MapComponent = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    if (!container) return;

    const map = new kakao.maps.Map(container, options);

    function setCenter() {
      // 이동할 위도 경도 위치를 생성합니다
      var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);

      // 지도 중심을 이동 시킵니다
      map.setCenter(moveLatLon);
    }

    function panTo() {
      // 이동할 위도 경도 위치를 생성합니다
      var moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);

      // 지도 중심을 부드럽게 이동시킵니다
      // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
      map.panTo(moveLatLon);
    }
  }, []);
  return <MapBox id="map"></MapBox>;
};

export default MapComponent;
