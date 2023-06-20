import styled from "styled-components";
import {
  TextBodyMedium14,
  TextBodySmall14,
  TextH3Bold22,
  TextH4Bold18,
} from "./Text.style";

export const TextSheetDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 0.625rem;

  width: 100%;
`;

export const TextSheetH3Bold22Span = styled.span`
  width: fit-content;
  ${TextH3Bold22}
`;

export const TextSheetH4Bold18Span = styled.span`
  width: fit-content;
  ${TextH4Bold18}
`;

export const TextSheetBodyMedium14Span = styled.span`
  width: fit-content;
  ${TextBodyMedium14};
`;

export const TextSheetBodySmall14Span = styled.span`
  width: fit-content;
  ${TextBodySmall14}
`;
