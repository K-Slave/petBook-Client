import styled from "styled-components";

interface StartPointDivProps {
  marginLeft?: number;
}

export const ToastMessageStartPointDiv = styled.div<StartPointDivProps>`
  position: relative;
  z-index: 9999;

  display: flex;
  align-items: center;

  width: 0;
  height: 0;

  margin-left: ${(props) => props.marginLeft}px;
`;

export const ToastMessageBoxDiv = styled.div`
  position: absolute;
  left: 0;
  overflow: hidden;

  display: flex;
  align-items: center;

  // TODO: 레이아웃 커질때 max-height 를 props 전달 해야함
  max-height: 32px;

  .Toast__EndPoint__Arrow {
    // TODO: 레이아웃 변경에 따른 left 등을 계산할수 있게 해야함
    position: relative;
    left: -26px;
    z-index: -1;

    width: 0;
    height: 0;

    // TODO: 레이아웃 커질때 화살표의 max-height 를 props 전달 해야함
    max-height: 32px;

    // TODO: bgColor props 받아야함
    border-top: 26px solid transparent;
    border-right: 26px solid #383835;
    border-bottom: 26px solid transparent;
    border-left: 26px solid transparent;
  }

  .Toast__Content__Box {
    // TODO: 레이아웃 변경에 따른 left 등을 계산할수 있게 해야함
    position: relative;
    left: calc((-26px * 2) + 8px);

    padding: 4px 10px;

    width: 280px;
    height: 32px;

    // TODO : 최소크기값 수정되야할수도 있음
    min-width: 100px;
    min-height: 20px;

    // TODO: bgColor props 받아야함
    background-color: #383835;
    border-radius: 6px;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;
