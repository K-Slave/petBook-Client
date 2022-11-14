import styled, { css } from "styled-components";

const ArticleListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemArticle = styled.article`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #ffffff;
  cursor: pointer;
  .Item_Column {
    padding: 32px 35px 28px 37px;
  }
  .Item_UserInfo {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 6px;
    font-weight: 500;
    .Item_Nickname {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
    .Item_Date {
      margin-top: 1px;
      font-size: 12px;
      color: #777777;
    }
  }
`;

const ItemAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
`;

const ItemImg = styled.img`
  flex-shrink: 0;
  width: 385px;
  height: 207px;
  background-color: #fff6e6;
`;

const ItemDiv = styled.div`
  padding-left: 37px;
  h3 {
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 20px;
  }
  .Item_Content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #747474;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Item_Stats {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 34px;
    font-weight: 500;
    font-size: 12px;
    color: #777777;
  }
`;

const PageButtonBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-top: 53px;
`;

const selectedStyle = css`
  border-radius: 50%;
  background-color: #000;
  font-weight: 700;
  color: #fff;
`;

const PageButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => selected && selectedStyle};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 22px;
  height: 22px;

  font-size: 16px;
`;

export {
  ArticleListDiv,
  ItemAvatar,
  ItemDiv,
  ItemImg,
  ItemArticle,
  PageButtonBoxDiv,
  PageButton
};
