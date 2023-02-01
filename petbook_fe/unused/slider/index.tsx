import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

import SearchBar from "@components/common/Searchbar";
import MapSlideItems from "unused/slider/MapSlideItems";
import PositionInfo from "./positionInfo";

const SlideBox = styled.div`
  width: 30rem;
  height: 100%;
  background-color: #fff;
  position: fixed;

  top: 120px;
  z-index: 9;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
`;
const Handler = styled.div`
  width: 54px;
  height: 100px;
  position: absolute;
  background-color: var(--primary);
  color: white;
  z-index: 8;
  left: -54px;
  top: 43%;
  border-radius: 10px 0 0 10px;
  transform: translateY(-50%);
  padding: 30px 5px;
  box-sizing: border-box;
  text-align: center;
  svg {
    width: 24px;
    height: 24px;
  }
  h3 {
    font-size: 12px;
  }
`;

const SlideContainer = styled.div`
  overflow: auto;
  height: calc(100% - 59px);
  padding: 41px 55px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MapFilterSlider = () => {
  const [filterActive, setFilterActive] = useState(false);

  const handleSlide = () =>
    filterActive === false ? setFilterActive(true) : setFilterActive(false);

  return (
    <SlideBox style={{ right: filterActive === true ? "0rem" : "-30rem" }}>
      <Handler onClick={handleSlide}>
        <IoIosArrowBack />
        <h3>펼쳐보기</h3>
      </Handler>
      <SlideContainer>
        <SearchBar type="map" />
        <PositionInfo />
        <MapSlideItems />
      </SlideContainer>
    </SlideBox>
  );
};

export default MapFilterSlider;
