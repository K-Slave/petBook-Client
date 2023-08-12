/* global kakao */
import { atom, selector } from "recoil";
import { Coordinates } from "@lib/utils/kakaoMaps/getRectBounds";

export interface MapStateType {
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
}

const mapState = atom<{
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
}>({
  key: "mapState",
  default: {
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

export default mapState;
