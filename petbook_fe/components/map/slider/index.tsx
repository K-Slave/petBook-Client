import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

import SearchBar from "@components/common/Searchbar";
import MapSlideItems from "@components/map/slider/MapSlideItems";
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
  background-color: #f0892f;
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
  const [searchItems, setSearchItems] = useState<any>([]);

  const handleSlide = () =>
    filterActive === false ? setFilterActive(true) : setFilterActive(false);

  useEffect(() => {
    const mapData = [
      {
        text: "1",
        value: 0,
        mapDetailList: [
          {
            addrName: "청담",
            phoneNum: "010-3333-4444",
          },
          {
            addrName: "서초",
            phoneNum: "010-3333-4444",
          },
        ],
      },
      {
        text: "2",
        value: 1,
        mapDetailList: [
          {
            addrName: "강남",
            phoneNum: "010-3333-4444",
          },
          {
            addrName: "구월",
            phoneNum: "010-3333-4444",
          },
        ],
      },
      {
        text: "3",
        value: 2,
        mapDetailList: [
          {
            addrName: "청담",
            phoneNum: "010-3333-4444",
          },
        ],
      },
      {
        text: "4",
        value: 3,
      },
      {
        text: "5",
        value: 3,
      },
    ];
    setSearchItems(mapData);
  }, [filterActive]);

  return (
    <SlideBox style={{ right: filterActive === true ? "0rem" : "-30rem" }}>
      <Handler onClick={handleSlide}>
        <IoIosArrowBack />
        <h3>펼쳐보기</h3>
      </Handler>
      <SlideContainer>
        <SearchBar type="map" />
        <PositionInfo />
        <MapSlideItems searchItems={[searchItems]} />
      </SlideContainer>
    </SlideBox>
  );
};

export default MapFilterSlider;
