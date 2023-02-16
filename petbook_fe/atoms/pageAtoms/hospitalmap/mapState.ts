import { HospitalInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
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

export default mapState;
