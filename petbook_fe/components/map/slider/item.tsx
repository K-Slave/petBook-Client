import styled from "styled-components";

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
        background-color: var(--main-map);
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

const MapSlideItems = ({ searchItems }: any) => {
  return (
    <>
      {/* 구조에 따라 다르게 진행될 예정 - 임시  */}
      <ItemTitle>01. 주변병원 추천</ItemTitle>
      <ItemBox>
        {searchItems &&
          searchItems[0].map((item: any, index: number) => {
            const detailItem = item.mapDetailList;
            return (
              <li key={index}>
                <figure>
                  <figcaption>{item.text}</figcaption>
                </figure>
                {detailItem ? (
                  <ItemInfo>
                    {detailItem &&
                      detailItem.map((list: any, index: number) => {
                        <li key={index}>
                          <div>{list.addrName}</div>
                          <div>{list.phoneNum}</div>
                        </li>;
                      })}
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
