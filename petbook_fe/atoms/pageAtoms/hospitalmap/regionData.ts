import { atom } from "recoil";

const regionDataState = atom({
  key: "regionDataState",
  default: {
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
});

export default regionDataState;
