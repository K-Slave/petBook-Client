import styled from "styled-components";
import {
  TextH3Bold16,
  TextH4Bold14,
  TextH4Bold18,
} from "@/stories/common/Typography/style";

export const ResetModuleTitleH4 = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 0.75rem;

  ${TextH4Bold18};
  color: var(--black_01);
`;

export const ResetModuleSubTitleH3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${TextH3Bold16};
  color: var(--black_01);
`;

export const ResetModuleHintH4 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${TextH4Bold14};
  color: var(--black_05);
`;
