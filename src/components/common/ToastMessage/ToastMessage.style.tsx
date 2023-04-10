import styled from "styled-components";
import { MsgBoxProps, StartPointProps } from "./ToastMessage";

export const ToastMessageStartPointDiv = styled.div<StartPointProps>`
  position: relative;
  z-index: 9999;

  display: flex;
  align-items: center;

  width: 0;
  height: 0;

  margin-left: ${(props) => props.marginLeft}px;
`;

export const ToastMessageBoxDiv = styled.div<MsgBoxProps>`
  position: absolute;
  left: 0;
  overflow: hidden;

  display: flex;
  align-items: center;

  max-height: ${(props) => props.height}px;

  .Toast__EndPoint__Arrow {
    // TODO: 레이아웃 변경에 따른 left 등을 계산할수 있게 해야함
    position: relative;
    left: -26px;
    z-index: -1;

    width: 0;
    height: 0;

    max-height: ${(props) => props.height}px;

    // TODO: 화살표의 방향을 바꿀수 있게 해야함
    border-top: 26px solid transparent;
    border-right: 26px solid ${(props) => props.bgColor};
    border-bottom: 26px solid transparent;
    border-left: 26px solid transparent;
  }

  .Toast__Content__Box {
    // TODO: 레이아웃 변경에 따른 left 등을 계산할수 있게 해야함
    position: relative;
    left: calc((-26px * 2) + 8px);

    padding: 4px 10px;

    width: 280px;
    height: ${(props) => props.height}px;

    // TODO : 최소크기값 수정되야할수도 있음
    min-width: 100px;
    min-height: 20px;

    background-color: ${(props) => props.bgColor};
    border-radius: 6px;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;

    color: ${(props) => props.color};
  }
`;
