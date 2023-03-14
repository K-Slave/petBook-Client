import {
  convBoundaryToRectBounds,
  Coordinates,
} from "@lib/utils/kakaoMaps/getRectBounds";
import Cookies from "js-cookie";
import { atom } from "recoil";

export interface RectBoundary {
  NW_11: Coordinates;
  SW_7: Coordinates;
  SE_5: Coordinates;
  NE_1: Coordinates;
}

const locationCookie = Cookies.get("USER_LOCATION_DATA");

const initData = {
  NW_11: { lat: 37.48459126977702, lng: 127.00963325656245 },
  SW_7: { lat: 37.48459126977702, lng: 127.05668520469185 },
  SE_5: { lat: 37.50620222560144, lng: 127.00963325656245 },
  NE_1: { lat: 37.50620222560144, lng: 127.05668520469185 },
};

const defaultData = locationCookie
  ? (convBoundaryToRectBounds(
      JSON.parse(locationCookie).boundary
    ) as RectBoundary)
  : initData;

const rectBoundsState = atom({
  key: "rectBoundsState",
  default: defaultData,
});

// const rectBounds = convBoundaryToRectBounds(
//   regionData && regionData.boundary
// );

export default rectBoundsState;
