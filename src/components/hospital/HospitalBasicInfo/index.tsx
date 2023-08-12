import { useState } from "react";
import { ChevronDownRounded } from "@/stories/Icon/ChevronDown";
import { ChevronUpRounded } from "@/stories/Icon/ChevronUp";
import Clock from "@/stories/Icon/Clock";
import MapMarker from "@/stories/Icon/MapMarker";
import type { HospitalInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import Badge from "../Badge";
import { HospitalInfoUL, LI } from "./styled";

const HospitalBasicInfo = ({ address }: Pick<HospitalInfo, "address">) => {
  return (
    <HospitalInfoUL>
      <LI>
        <span>
          <MapMarker />
          주소
        </span>
        <span>{address}</span>
      </LI>
      {/* <LI>
        <span>
          <Clock />
          시간
        </span>
        <span>화요일 9:00~12:00</span>
        <HospitalBasicInfo.TimeBox />
        <Badge textColor="#00DD6D" bgColor="rgba(0, 221, 109, 0.12)">
          현재 진료 가능
        </Badge>
      </LI> */}
    </HospitalInfoUL>
  );
};

const TimeBox = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((value) => !value);
  };
  return (
    <button type="button" className="up-down-button" onClick={toggle}>
      {show ? <ChevronUpRounded /> : <ChevronDownRounded />}
    </button>
  );
};

HospitalBasicInfo.TimeBox = TimeBox;

export default HospitalBasicInfo;
