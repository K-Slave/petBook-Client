import ChevronDown from "@components/common/icon/ChevronDown";
import ChevronUp from "@components/common/icon/ChevronUp";
import ClockBlankIcon from "@components/common/icon/Clock";
import MarkerPin from "@components/common/icon/MarkerPin";
import type { HospitalInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import { useState } from "react";
import Badge from "../Badge";
import { HospitalInfoUL, LI } from "./styled";

const HospitalBasicInfo = ({
  phoneNumber,
  address,
}: Pick<HospitalInfo, "address"> & {
  phoneNumber?: string;
}) => {
  return (
    <HospitalInfoUL>
      <LI>
        <span>
          <MarkerPin />
          위치
        </span>
        <span>{address}</span>
      </LI>
      <LI>
        <span>
          <ClockBlankIcon />
          시간
        </span>
        <span>화요일 9:00~12:00</span>
        <HospitalBasicInfo.TimeBox />
        <Badge textColor="#00DD6D" bgColor="rgba(0, 221, 109, 0.12)">
          현재 진료 가능
        </Badge>
      </LI>
      {phoneNumber && (
        <LI>
          <span>
            <ClockBlankIcon />
            전화
          </span>
          <span>{phoneNumber}</span>
        </LI>
      )}
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
      {show ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
};

HospitalBasicInfo.TimeBox = TimeBox;
HospitalBasicInfo.defaultProps = {
  phoneNumber: "",
};

export default HospitalBasicInfo;
