import Cookies from "js-cookie";
import { atom } from "recoil";
import { cookieKeyName } from "@lib/globalConst";
import hospitalOptions from "@lib/globalConst/hospitalOptions";

const locationCookie = Cookies.get(cookieKeyName.location);

const defaultData = {
  latitude: locationCookie
    ? JSON.parse(locationCookie).latitude
    : hospitalOptions.latitude,
  longitude: locationCookie
    ? JSON.parse(locationCookie).longitude
    : hospitalOptions.longitude,
};

// TODO : 캐시된 위치정보가 없을때만 강남역 잡히게 처리해야함

const geoLocationState = atom({
  key: "geoLocationState",
  default: defaultData,
});

export default geoLocationState;
