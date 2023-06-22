import styled from "styled-components";
import { TextBodyMedium14 } from "../../Text/Text.style";
import { BackgroundImageSpan } from "../../Image/BackgroundImage/BackgroundImage.style";

export const HelperTextP = styled.p`
  justify-self: flex-start;
  position: relative;

  display: inline-flex;
  align-items: center;
  white-space: pre-line;

  padding-left: 1.3125rem;

  ${TextBodyMedium14};
  color: var(--error);
`;

export const HelperTextIconSpan = styled(BackgroundImageSpan)`
  position: absolute;
  left: 0;
`;
