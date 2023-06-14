import styled from "styled-components";
import { BackgroundImageDiv } from "../common/Image/BackgroundImage/BackgroundImage.style";
import {
  TextBodyMedium14,
  TextBodySmall14,
  TextH3Bold22,
  TextH4Bold18,
} from "../common/Text/Text.style";
import Link from "next/link";

export const LoginFormBox = styled.form`
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;
  align-content: center;

  width: 29rem;
  height: 28.0206rem;

  padding: 2rem 1.6875rem;

  background-color: var(--bg_white_02);
  border-radius: 1rem;
`;

export const LoginFormTitleH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 5.7081rem;

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

  height: 8.5rem;
`;

export const LoginFormCookieButton = styled.button<{ check: boolean }>`
  justify-self: flex-end;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 0.875rem auto;
  gap: 0.4375rem;

  width: fit-content;
  height: 1.5rem;
  padding: 0.25rem 0 0.1875rem;

  ${TextBodyMedium14};
  color: ${({ check }) => (check ? "var(--black_01)" : "var(--black_04)")};
`;

export const LoginSubmitBoxDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 1.5rem;

  height: 5.8125rem;
`;

export const LoginFormSubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem 0;

  border-radius: 8px;
  background-color: var(--primary);

  ${TextH4Bold18};
  color: #fff;
`;

export const LoginFormGuideDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
`;

export const LoginFormLink = styled(Link)<{ em?: boolean }>`
  position: relative;
  top: 0.0625rem;

  ${({ em }) => (em ? TextBodyMedium14 : TextBodySmall14)};

  color: ${({ em }) => (em ? "var(--primary)" : "var(--black_03)")};
`;

// TODO: 공용 구분선 컴포넌트 만들어서 붙이기
// export const LoginFormGuide
