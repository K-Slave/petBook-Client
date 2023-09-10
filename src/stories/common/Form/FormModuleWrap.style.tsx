import styled from "styled-components";

export const FormModuleWrapDiv = styled.div<{ width: string }>`
  display: grid;
  grid-auto-flow: row;
  row-gap: 0.5rem;
  align-content: center;

  width: ${({ width }) => width};

  padding: 2rem 1.6875rem;

  background-color: var(--bg_white_02);
  border-radius: 16px;

  @media screen and (max-width: 768px) {
    margin-top: 4.375rem;
  }
`;
