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
    content: "";
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

export { QnaItemBubble, QnaItemDiv, NormalItemDiv };
