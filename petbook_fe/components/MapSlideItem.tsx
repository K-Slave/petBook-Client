import styled from "styled-components";

const ItemBox = styled.ul`
  margin-top: 30px;
  li {
    width: 100%;
    overflow: auto;
    .main {
      width: 100%;
      height: 15rem;
      background-color: #80808080;
      margin-bottom: 10px;
      position: relative;
      .title {
        position: absolute;
        bottom: 16px;
        left: 16px;
        color: white;
      }
    }
    .main_list {
      width: 100%;
      height: 5rem;
      background-color: #cccccc80;
      margin-bottom: 20px;
    }
  }
`;

const MapSlideItems = ({ searchItems }: any) => {
  return (
    <>
      <ItemBox>
        {searchItems &&
          searchItems[0].map((item: any, index: number) => {
            const detailItem = item.mapDetailList;
            return (
              <li key={index}>
                <div className="main">
                  <div className="title">{item.text}</div>
                </div>
                {detailItem ? (
                  <ul className="main_list">
                    {detailItem &&
                      detailItem.map((list: any, index: number) => {
                        <li key={index}>
                          <div>{list.addrName}</div>
                          <div>{list.phoneNum}</div>
                        </li>;
                      })}
                  </ul>
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
