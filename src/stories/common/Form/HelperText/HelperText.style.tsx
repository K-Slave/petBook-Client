import styled from "styled-components";
import { TextBodyMedium14 } from "../../Text/Text.style";
import { BackgroundImageSpan } from "../../Image/BackgroundImage/BackgroundImage.style";

export const HelperTextP = styled.p<{
  status: "idle" | "loading" | "success" | "error";
}>`
  justify-self: flex-start;
  position: relative;

  display: inline-flex;
  align-items: center;
  white-space: pre-line;

  padding-left: 1.3125rem;

  ${TextBodyMedium14};
  ${(props) => props.status === "error" && `color: var(--error);`}
  ${(props) => props.status === "success" && `color: var(--success);`}
  ${(props) => props.status === "loading" && `color: var(--primary);`}
`;

export const HelperTextIconSpan = styled(BackgroundImageSpan)`
  position: absolute;
  left: 0;
`;
