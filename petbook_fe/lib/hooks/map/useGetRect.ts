import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import getRectBounds, { Coordinates } from "@lib/utils/kakaoMaps/getRectBounds";
import { useMap } from "react-kakao-maps-sdk";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useDidMountEffect from "../common/useDidMountEffect";

const useGetRect = () => {
  const map = useMap();
  const currentGeoLocation = useRecoilValue(geoLocationState);
  const setCurrentRectBounds = useSetRecoilState(rectBoundsState);

  // 현재 좌표 변경에 따른 지도 경계좌표 추출
  useDidMountEffect(() => {
    const NE_Coordinates: Coordinates = {
      lat: map.getBounds().getNorthEast().getLat(),
      lng: map.getBounds().getNorthEast().getLng(),
    };

    const SW_Coordinates: Coordinates = {
      lat: map.getBounds().getSouthWest().getLat(),
      lng: map.getBounds().getSouthWest().getLng(),
    };

    const rectBounds = getRectBounds(SW_Coordinates, NE_Coordinates);

    setCurrentRectBounds(rectBounds);
  }, [currentGeoLocation]);
};

export default useGetRect;
