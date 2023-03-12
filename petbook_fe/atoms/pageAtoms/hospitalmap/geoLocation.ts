import Cookies from "js-cookie";
import { atom } from "recoil";

const locationCookie = Cookies.get("USER_LOCATION_DATA");

const initData = {
  latitude: 37.49542431,
  longitude: 127.03320108,
};

const defaultData = {
  latitude: locationCookie
    ? JSON.parse(locationCookie).latitude
    : initData.latitude,
  longitude: locationCookie
    ? JSON.parse(locationCookie).longitude
    : initData.longitude,
};

// TODO : 캐시된 위치정보가 없을때만 강남역 잡히게 처리해야함

const geoLocationState = atom({
  key: "geoLocationState",
  default: defaultData,
});

export default geoLocationState;
