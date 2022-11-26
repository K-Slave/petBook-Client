import styled, { css } from "styled-components";

const notChildStyle = css`
  background-color: #fff;
`;

const childStyle = css`
  background-color: #fcf9f4;
`;

const ItemDiv = styled.div<{ isChild: string }>`
  ${({ isChild }) => (isChild ? childStyle : notChildStyle)};
  width: 100%;
  padding: 32px 42px 32px 40px;
  display: flex;
  gap: 14px;
  border-bottom: 1px solid #eeeeee;
  & > div {
    width: 100%;
  }
  .Item_Content {
    margin-bottom: 10px;
    padding-right: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #747474;
  }
  .Item_Row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .Item_Button_Box {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: flex-end;
    button {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #7c7c7c;
    }
  }
  & > svg {
    flex-shrink: 0;
    color: #d5c8b3;
    margin-top: 10px;
  }
`;

const CommentListDiv = styled.div`
  border-radius: 16px;
  border: 1px solid #f5edde;
  & > ${ItemDiv}:first-child {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  & > ${ItemDiv}:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export { CommentListDiv, ItemDiv };
