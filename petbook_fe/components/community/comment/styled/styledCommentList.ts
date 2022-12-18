import styled, { css } from "styled-components";

const QnaItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;

const QnaItemBubble = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
  padding: 28px 32px;
  background-color: #fff;
  border-radius: 16px;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-color: transparent #fff;
    border-width: 20px 20px 20px 0;
    top: 50%;
    left: -20px;
    margin-top: -20px;
  }
  div {
    margin: 0 !important;
  }
`;

const notChildStyle = css`
  background-color: #fff;
`;

const childStyle = css`
  background-color: #fcf9f4;
`;

const NormalItemDiv = styled.div<{ isChild: string }>`
  width: 100%;
  padding: 28px 32px;
  display: flex;
  gap: 14px;
  background-color: white;
  border-radius: 16px;
  & > div {
    width: 100%;
  }
`;

const CommentListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .Item_Content {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--black_01);
  }
  .Item_Button_Box {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-end;
    margin-top: 32px;
    color: var(--black_03);
    & > div {
      display: flex;
      align-items: center;
    }
  }
  .Item_Row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

const LikeButton = styled.button`
  width: 24px;
  height: 24px;
  background: url("/img/common/heart.svg") no-repeat center center;
`;

const ScrapButton = styled.button`
  width: 24px;
  height: 24px;
  background: url("/img/common/scrap.svg") no-repeat center center;
`;
export { CommentListDiv, NormalItemDiv, QnaItemDiv, QnaItemBubble, LikeButton, ScrapButton };
