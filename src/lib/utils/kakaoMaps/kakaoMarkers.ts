/* global kakao */

import localConsole from "../localConsole";

interface SetMarkerProps {
  map: kakao.maps.Map;
  kakaoLatLng: kakao.maps.LatLng;
}

export const setMarker = ({ map, kakaoLatLng }: SetMarkerProps) => {
  const marker = new kakao.maps.Marker({
    position: kakaoLatLng,
  });

  marker.setMap(map);

  return marker;
};

interface SetInfoWindowProps extends SetMarkerProps {
  template?: HTMLDivElement | null;
}

export const setInfoWindow = ({
  map,
  kakaoLatLng,
  template,
}: SetInfoWindowProps) => {
  if (template) {
    const templateDOM = template.cloneNode(true) as HTMLDivElement;
    templateDOM.style.removeProperty("opacity");
    const iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    const infoWindow = new kakao.maps.InfoWindow({
      map, // 인포윈도우가 표시될 지도
      position: kakaoLatLng,
      content: templateDOM,
      // removable: iwRemoveable,
    });

    return infoWindow;
  }
};

export const setCustomOverlay = ({
  map,
  kakaoLatLng,
  template,
}: SetInfoWindowProps) => {
  if (template) {
    const templateDOM = template.cloneNode(true) as HTMLDivElement;
    templateDOM.style.removeProperty("opacity");

    const customOverlay = new kakao.maps.CustomOverlay({
      map,
      position: kakaoLatLng,
      content: templateDOM,
      yAnchor: 1,
    });
  }
};
