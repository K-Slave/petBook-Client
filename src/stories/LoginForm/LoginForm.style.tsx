import styled from "styled-components";
import {
  BackgroundImageDiv,
  BackgroundImageSpan,
} from "../common/Image/BackgroundImage/BackgroundImage.style";
import { TextBodyMedium14, TextH3Bold22 } from "../common/Text/Text.style";

export const LoginFormBox = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 5.7088rem auto auto;
  row-gap: 2rem;

  width: 29rem;
  height: 27.875rem;

  background-color: var(--bg_white_02);
`;

export const LoginFormTitleH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${TextH3Bold22};
  color: var(--black_01);
`;

export const LoginFormLogoDiv = styled(BackgroundImageDiv)`
  box-sizing: content-box;
  width: 100%;
  padding: 1.0219rem 0;
`;

export const LoginFormInputBoxDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 3rem 3rem auto;
  justify-content: center;
  row-gap: 0.5rem;

  height: fit-content;
`;

export const LoginFormCookieButton = styled.button<{ check: boolean }>`
  justify-self: flex-end;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 0.875rem auto;
  gap: 0.4375rem;

  width: fit-content;
  padding: 0.25rem 0 0.1875rem;

  ${TextBodyMedium14};
  color: ${({ check }) => (check ? "var(--black_01)" : "var(--black_04)")};
`;

export const LoginSubmitBoxDiv = styled.div``;
