import localConsole from "../localConsole";
import replaceAll from "../replaceAll";

export interface Coordinates {
  lat: number;
  lng: number;
}

const getRectBounds = (southWest: Coordinates, northEast: Coordinates) => {
  const southWestLat = southWest.lat;
  const northEastLat = northEast.lat;

  const southWestLng = southWest.lng;
  const northEastLng = northEast.lng;

  const southEast: Coordinates = {
    // 남서쪽 위도 + 북동쪽 경도
    lat: southWestLat,
    lng: northEastLng,
  };

  const northWest: Coordinates = {
    // 북동쪽 위도 + 남서쪽 경도
    lat: northEastLat,
    lng: southWestLng,
  };

  return {
    NW_11: northWest,
    SW_7: southWest,
    SE_5: southEast,
    NE_1: northEast,
  };
};

export default getRectBounds;

export const convRectBoundsToBoundary = (rectBounds: {
  NW_11: Coordinates;
  SW_7: Coordinates;
  SE_5: Coordinates;
  NE_1: Coordinates;
}) => {
  const boundsValues = Object.values(rectBounds);
  const valuesDoubleArrayJoin = boundsValues
    .map((value) => {
      return Object.values(value).reverse();
    })
    .join();

  const result = "(" + valuesDoubleArrayJoin + ")";

  return result;
};

export const convBoundaryToRectBounds = (boundary: string) => {
  const replaceValue = boundary.replace("(", "").replace(")", "");
  const splitValue = replaceValue.split(",");
  const coordValue = {
    NW_11: {
      lat: Number(splitValue[1]),
      lng: Number(splitValue[0]),
    },
    SW_7: {
      lat: Number(splitValue[3]),
      lng: Number(splitValue[2]),
    },
    SE_5: {
      lat: Number(splitValue[5]),
      lng: Number(splitValue[4]),
    },
    NE_1: {
      lat: Number(splitValue[7]),
      lng: Number(splitValue[6]),
    },
  };

  return coordValue;
};
