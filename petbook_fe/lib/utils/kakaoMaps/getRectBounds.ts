import localConsole from "../localConsole";

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

export const convStringCoordinates = (rectBounds: {
  NW_11: Coordinates;
  SW_7: Coordinates;
  SE_5: Coordinates;
  NE_1: Coordinates;
}) => {
  const boundsValues = Object.values(rectBounds);
  const valuesDoubleArrayJoin = boundsValues
    .map((value) => {
      return Object.values(value);
    })
    .join();

  const result = "(" + valuesDoubleArrayJoin + ")";

  return result;
};

export default getRectBounds;
