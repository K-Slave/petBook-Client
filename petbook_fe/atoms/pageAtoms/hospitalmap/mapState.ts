import { Coordinates } from "@lib/utils/kakaoMaps/getRectBounds";
import { atom, selector } from "recoil";

export interface MapStateType {
  isMapLoad: boolean;
  isBounded: boolean;
  currentPoidata: {
    id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    n_id: number;
  };
  currentZoomLevel: number;
  currentRectBounds: {
    NW_11: Coordinates;
    SW_7: Coordinates;
    SE_5: Coordinates;
    NE_1: Coordinates;
  };
}

const mapState = atom<{
  isMapLoad: boolean;
  isBounded: boolean;
  currentPoidata: {
    id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    n_id: number;
  };
  currentZoomLevel: number;
  currentRectBounds: {
    NW_11: Coordinates;
    SW_7: Coordinates;
    SE_5: Coordinates;
    NE_1: Coordinates;
  };
}>({
  key: "mapState",
  default: {
    isMapLoad: false,
    isBounded: false,
    currentPoidata: {
      id: 0,
      name: "",
      address: "",
      latitude: 0,
      longitude: 0,
      n_id: 0,
    },
    currentZoomLevel: 0,
    currentRectBounds: {
      NW_11: { lat: 0, lng: 0 },
      SW_7: { lat: 0, lng: 0 },
      SE_5: { lat: 0, lng: 0 },
      NE_1: { lat: 0, lng: 0 },
    },
  },
});

export const boundState = selector({
  key: "boundState",
  get: ({ get }) => {
    const originState = get(mapState);

    return originState.isBounded;
  },
});

export const currentPoiState = selector({
  key: "currentPoiState",
  get: ({ get }) => {
    const originState = get(mapState);

    return originState.currentPoidata;
  },
});

export const currentZoomLevelState = selector({
  key: "currentZoomLevelState",
  get: ({ get }) => {
    const originState = get(mapState);

    return originState.currentZoomLevel;
  },
});

export const currentRectBoundsState = selector({
  key: "currentRectBoundsState",
  get: ({ get }) => {
    const originState = get(mapState);

    return originState.currentRectBounds;
  },
});

export default mapState;
