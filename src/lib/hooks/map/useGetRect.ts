import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import { cookieRequest } from "@lib/API/petBookAPI";
import getRectBounds, {
  convRectBoundsToBoundary,
  Coordinates,
} from "@lib/utils/kakaoMaps/getRectBounds";
import { useMap } from "react-kakao-maps-sdk";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useDidMountEffect from "../common/useDidMountEffect";
import { cookieKeyName } from "@lib/globalConst";

const useGetRect = () => {
  const map = useMap();
  const geoLocation = useRecoilValue(geoLocationState);
  const setRectBounds = useSetRecoilState(rectBoundsState);

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
    const boundary = convRectBoundsToBoundary(rectBounds);

    const patchCookie = async () => {
      await cookieRequest.patchCookie({
        body: {
          key: cookieKeyName.location,
          value: {
            boundary,
          },
        },
      });
    };

    patchCookie();
    setRectBounds(rectBounds);
  }, [geoLocation]);
};

export default useGetRect;
