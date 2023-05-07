import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import regionDataState from "@atoms/pageAtoms/hospitalmap/regionData";
import { cookieKeyName } from "@lib/globalConst";
import { UserLocationData } from "@lib/types/CacheData";
import { convBoundaryToRectBounds } from "@lib/utils/kakaoMaps/getRectBounds";
import { MutableSnapshot, ResetRecoilState, SetRecoilState } from "recoil";

const recoilHydration = (
  setState: {
    set: SetRecoilState;
    reset: ResetRecoilState;
  },
  pathName: string,
  cookieList: {
    key: string;
    value: any;
  }[]
) => {
  switch (pathName) {
    case "/hospitalmap": {
      const locationCookie = cookieList.find(
        (cookie) => cookie.key === cookieKeyName.location
      );

      if (locationCookie && locationCookie.value) {
        const cachedData = locationCookie.value as UserLocationData;

        setState.reset(geoLocationState);
        setState.set(geoLocationState, {
          latitude: cachedData.latitude,
          longitude: cachedData.longitude,
        });

        setState.reset(rectBoundsState);
        setState.set(
          rectBoundsState,
          convBoundaryToRectBounds(cachedData.boundary)
        );

        setState.reset(regionDataState);
        setState.set(regionDataState, cachedData);
      }

      break;
    }
    default: {
      break;
    }
  }
};

export default recoilHydration;
