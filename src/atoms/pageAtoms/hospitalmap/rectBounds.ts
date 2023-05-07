import { cookieKeyName } from "@lib/globalConst";
import hospitalOptions from "@lib/globalConst/hospitalOptions";
import {
  convBoundaryToRectBounds,
  Coordinates,
} from "@lib/utils/kakaoMaps/getRectBounds";
import localConsole from "@lib/utils/localConsole";
import Cookies from "js-cookie";
import { atom } from "recoil";

export interface RectBoundary {
  NW_11: Coordinates;
  SW_7: Coordinates;
  SE_5: Coordinates;
  NE_1: Coordinates;
}

const locationCookie = Cookies.get(cookieKeyName.location);

const defaultData = locationCookie
  ? (convBoundaryToRectBounds(
      JSON.parse(locationCookie).boundary
    ) as RectBoundary)
  : hospitalOptions.rectBounds;

const rectBoundsState = atom({
  key: "rectBoundsState",
  default: defaultData,
});

// const rectBounds = convBoundaryToRectBounds(
//   regionData && regionData.boundary
// );

export default rectBoundsState;
