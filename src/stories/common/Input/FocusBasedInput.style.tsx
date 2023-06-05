import styled from "styled-components";
import { BackgroundImageSpan } from "../Image/BackgroundImage/BackgroundImage.style";
import CommonLabel from "../Label/CommonLabel";
import CommonInput from "./CommonInput";

export const FocusBasedAlginCenterLabel = styled(CommonLabel)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FocusBasedBgSpan = styled(BackgroundImageSpan)`
  position: absolute;
  z-index: 1;
  left: 1.25rem;
`;

export const FocusBasedInputElem = styled(CommonInput)<{
  bgWidth?: string;
}>`
  padding-left: ${({ bgWidth }) =>
    bgWidth ? `calc(1.25rem + ${bgWidth} + 0.75rem)` : ""};
`;