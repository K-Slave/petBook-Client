import { UserLocationData } from "@lib/types/CacheData";
import Cookies from "js-cookie";
import { atom } from "recoil";

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
const locationCookie = Cookies.get("USER_LOCATION_DATA");

const initData = {
  latitude: 127.03320108,
  longitude: 37.49542431,
  address_name: "서울특별시 강남구 역삼1동",
  code: "1168064000",
  region_1depth_name: "서울특별시",
  region_2depth_name: "강남구",
  region_3depth_name: "역삼1동",
  region_4depth_name: "",
  region_type: "H",
  petBookRegionName: "강남구 역삼1동",
  x: 127.03320108651666,
  y: 37.49542431718493,
  boundary:
    "(127.00963325656245,37.48459126977702,127.05668520469185,37.48459126977702,127.00963325656245,37.50620222560144,127.05668520469185,37.50620222560144)",
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
