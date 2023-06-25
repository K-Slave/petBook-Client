import styled from "styled-components";
import CommonLabel from "../../Label";
import { TextBodyMedium14 } from "../../Text/Text.style";
import {
  BackgroundImageInput,
  BackgroundImageProps,
} from "../../Image/BackgroundImage/BackgroundImage.style";

export const CommonCheckBoxLabel = styled(CommonLabel)<{
  check: boolean;
  width?: string;
  height?: string;
}>`
  /* justify-self: flex-end; */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 0.875rem auto;
  align-items: center;
  gap: 0.4375rem;

  width: ${({ width }) => width || "fit-content"};
  height: (${({ height }) => height || "auto"});
  padding: 0.25rem 0;

  color: ${({ check }) => (check ? "var(--black_01)" : "var(--black_04)")};
  ${TextBodyMedium14};

  cursor: pointer;
`;

type CheckBoxInputProps = BackgroundImageProps;

export const CommonCheckBoxInput = styled(
  BackgroundImageInput
)<CheckBoxInputProps>`
  -webkit-appearance: ${({ url }) => (url ? "none" : "auto")};
  -moz-appearance: ${({ url }) => (url ? "none" : "auto")};
  appearance: ${({ url }) => (url ? "none" : "auto")};
`;
