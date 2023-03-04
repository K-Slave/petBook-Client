/* global kakao */
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
  currentGeoLocation: {
    latitude: number;
    longitude: number;
  };
  currentRegionData: {
    region_type: string;
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_4depth_name: string;
    code: string;
    x: number;
    y: number;
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
  currentGeoLocation: {
    latitude: number;
    longitude: number;
  };
  currentRegionData: {
    region_type: string;
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_4depth_name: string;
    code: string;
    x: number;
    y: number;
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

    // TODO : 캐시된 위치정보가 없을때만 강남역 잡히게 처리해야함
    currentGeoLocation: {
      latitude: 37.495417191,
      longitude: 127.0332010833,

      // latitude: 37.4954171091244,
      // longitude: 127.033201083326,
    },
    currentRegionData: {
      address_name: "서울특별시 강남구 역삼1동",
      code: "1168064000",
      region_1depth_name: "서울특별시",
      region_2depth_name: "강남구",
      region_3depth_name: "역삼1동",
      region_4depth_name: "",
      region_type: "H",
      x: 127.03320108651666,
      y: 37.49542431718493,
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

export const currentGeoLocationState = selector({
  key: "currentGeoLocationState",
  get: ({ get }) => {
    const originState = get(mapState);

    return originState.currentGeoLocation;
  },
});

export const currentRegionDataState = selector({
  key: "currentRegionDataState",
  get: ({ get }) => {
    const originState = get(mapState);

    return originState.currentRegionData;
  },
});

export default mapState;
