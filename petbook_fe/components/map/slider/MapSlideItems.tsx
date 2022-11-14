import styled from "styled-components";
import { useEffect, useState } from "react";

const ItemBox = styled.ul`
  margin-top: 12px;
  li {
    width: 100%;
    overflow: auto;
    figure {
      width: 100%;
      height: 180px;
      background-color: var(--figureBg);
      position: relative;
      margin-bottom: 18px;
      figcaption {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 0 0 16px 0;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--primary-map);
        color: white;
      }
    }
  }
`;
const ItemInfo = styled.article`
  width: 100%;
  height: 5rem;
  background-color: #cccccc80;
  margin-bottom: 20px;
`;
const ItemTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
`;

// TODO : any 사용으로 인한 ESLint 에러제거

interface Props {
  text: string;
  value: number;
  mapDetailList: Array<{ addrName: string; phoneNum: string }> | [];
}
const MapSlideItems = () => {
  const [searchItems, setSearchItems] = useState<Props[]>([]);
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
        mapDetailList: [],
      },
      {
        text: "5",
        value: 3,
        mapDetailList: [],
      },
    ];
    setSearchItems(mapData);
  }, []);
  return (
    <>
      {/* 구조에 따라 다르게 진행될 예정 - 임시  */}
      <ItemTitle>01. 주변병원 추천</ItemTitle>
      <ItemBox>
        {searchItems &&
          searchItems.map((item) => {
            const detailItem = item.mapDetailList;
            return (
              <li key={item.value}>
                <figure>
                  <figcaption>{item.text}</figcaption>
                </figure>
                {detailItem ? (
                  <ItemInfo>
                    {/* {detailItem &&
                      detailItem.map((list, index) => {
                        <li key={index}>
                          <div>{list.addrName}</div>
                          <div>{list.phoneNum}</div>
                        </li>;
                      })} */}
                  </ItemInfo>
                ) : (
                  <div>정보없음</div>
                )}
              </li>
            );
          })}
      </ItemBox>
    </>
  );
};
export default MapSlideItems;
