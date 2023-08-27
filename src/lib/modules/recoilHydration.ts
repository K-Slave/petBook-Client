import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { MutableSnapshot, ResetRecoilState, SetRecoilState } from "recoil";
import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import regionDataState from "@atoms/pageAtoms/hospitalmap/regionData";
import { cookieKeyName } from "@lib/globalConst";
import { UserLocationData } from "@lib/types/CacheData";
import { convBoundaryToRectBounds } from "@lib/utils/kakaoMaps/getRectBounds";

const recoilHydration = (
  setState: {
    set: SetRecoilState;
    reset: ResetRecoilState;
  },
  pathName: string,
  cookieList: Partial<{
    [key: string]: string;
  }> | null
) => {
  switch (pathName) {
    case "/hospitalmap": {
      const locationCookie = cookieList && cookieList[cookieKeyName.location];

      if (locationCookie) {
        const cachedData = JSON.parse(locationCookie) as UserLocationData;

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
