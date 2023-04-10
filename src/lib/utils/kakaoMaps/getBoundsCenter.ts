import { Coordinates } from "./getRectBounds";

const getBoundsCenter = (southWest: Coordinates, northEast: Coordinates) => {
  const centerLat = (southWest.lat + northEast.lat) / 2;
  const centerLng = (southWest.lng + northEast.lng) / 2;

  return {
    lat: centerLat,
    lng: centerLng,
  };
};

export default getBoundsCenter;
