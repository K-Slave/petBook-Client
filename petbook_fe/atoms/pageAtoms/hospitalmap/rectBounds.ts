import { atom } from "recoil";

const rectBoundsState = atom({
  key: "rectBoundsState",
  default: {
    NW_11: { lat: 37.48459126977702, lng: 127.00963325656245 },
    SW_7: { lat: 37.48459126977702, lng: 127.05668520469185 },
    SE_5: { lat: 37.50620222560144, lng: 127.00963325656245 },
    NE_1: { lat: 37.50620222560144, lng: 127.05668520469185 },
  },
});

export default rectBoundsState;
