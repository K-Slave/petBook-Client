import Link from "next/link";
import styled from "styled-components";
import { BackgroundImageSpan } from "../common/Image/BackgroundImage/BackgroundImage.style";
import {
  TextBodyMedium14,
  TextBodySmall14,
  TextH4Bold18,
} from "../common/Typography/style";

export const LoginModuleWrapDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 1.25rem;
  align-content: center;

  width: 29rem;

  padding: 2rem 1.6875rem;

  background-color: var(--bg_white_02);
  border-radius: 16px;
`;

export const LoginModuleTitleH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1.5rem;

  ${TextH4Bold18};
  color: var(--black_01);
`;

export const LoginModuleLogoSpan = styled(BackgroundImageSpan)`
  box-sizing: content-box;

  padding: 1.0219rem 0;
`;

export const LoginModuleGuideDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
`;

export const LoginModuleLink = styled(Link)<{ emText?: boolean }>`
  position: relative;
  top: 0.0625rem;

  ${({ emText }) => (emText ? TextBodyMedium14 : TextBodySmall14)};

  font-weight: ${({ emText }) => (emText ? "bold" : "normal")};
  color: ${({ emText }) => (emText ? "#000000" : "var(--black_03)")};
`;

// TODO: 공용 구분선 컴포넌트 만들어서 붙이기
// export const LoginModuleGuide
