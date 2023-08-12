import Cookies from "js-cookie";
import { atom } from "recoil";
import { cookieKeyName } from "@lib/globalConst";
import hospitalOptions from "@lib/globalConst/hospitalOptions";
import { UserLocationData } from "@lib/types/CacheData";

interface RegionDataType {
  latitude?: number;
  longitude?: number;
  petBookRegionName?: string;
  boundary?: string;
  region_type: string;
  code: string;
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_4depth_name: string;
  x: number;
  y: number;
}
const locationCookie = Cookies.get(cookieKeyName.location);

const initData = {
  ...hospitalOptions.kakaoRegionData_강남역,
  latitude: hospitalOptions.latitude,
  longitude: hospitalOptions.longitude,
  boundary: hospitalOptions.boundary,
};

initData.petBookRegionName =
  initData.region_2depth_name + " " + initData.region_3depth_name;

const defaultData = locationCookie
  ? (JSON.parse(locationCookie) as UserLocationData)
  : initData;

const regionDataState = atom<RegionDataType>({
  key: "regionDataState",
  default: defaultData,
});

export default regionDataState;
