import styled from "styled-components";
import { ToastAnimate } from "./ToastMessage";

interface StartPointDivProps {
  marginLeft?: number;
  animation?: ToastAnimate;
}

export const ToastMessageStartPointDiv = styled.div<StartPointDivProps>`
  position: relative;
  z-index: 9999;

  display: flex;
  align-items: center;

  width: 0;
  height: 0;

  margin-left: ${(props) => props.marginLeft}px;
  /* animation: 3s infinite alternate slidein;
  animation-name: ${(props) => {
    if (props.animation === "fade_in_out") {
      return "500ms fadeIn";
    }

    return "";
  }};
  animation-duration: ${(props) => {
    if (props.animation === "fade_in_out") {
      return "500ms";
    }

    return "";
  }}; */
`;

export const ToastMessageBoxDiv = styled.div`
  position: absolute;
  /* top: calc(-32px / 2); */
  left: 0;
  overflow: hidden;

  display: flex;
  align-items: center;

  max-height: 32px;

  .Toast__EndPoint__Arrow {
    position: relative;
    left: -26px;
    z-index: -1;

    width: 0;
    height: 0;

    max-height: 32px;

    border-top: 26px solid transparent;
    border-right: 26px solid #383835;
    border-bottom: 26px solid transparent;
    border-left: 26px solid transparent;
  }

  .Toast__Content__Box {
    position: relative;
    left: calc((-26px * 2) + 8px);

    padding: 4px 10px;

    width: 280px;
    height: 32px;

    background: #383835;
    border-radius: 6px;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;

export const ToastMessageContent = styled.div``;
