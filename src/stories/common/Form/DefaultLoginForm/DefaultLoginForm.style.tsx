import styled from "styled-components";
import { TextH4Bold18 } from "../../Text/Text.style";

export const LoginWrapForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 3rem 3rem auto auto auto;
  justify-content: center;
  row-gap: 0.5rem;
`;

export const LoginMiddleWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr auto;
`;

export const LoginSubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;

  margin-top: 0.8125rem;
  padding: 0.875rem 0;

  border-radius: 8px;
  background-color: var(--primary);

  ${TextH4Bold18};
  color: #fff;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
