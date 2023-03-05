import { atom } from "recoil";

// TODO : 캐시된 위치정보가 없을때만 강남역 잡히게 처리해야함

const geoLocationState = atom({
  key: "geoLocationState",
  default: {
    latitude: 37.495417191,
    longitude: 127.0332010833,

    // latitude: 37.4954171091244,
    // longitude: 127.033201083326,
  },
});

export default geoLocationState;
