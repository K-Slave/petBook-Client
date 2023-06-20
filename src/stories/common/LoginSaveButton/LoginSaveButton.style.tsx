import styled from "styled-components";
import { TextBodyMedium14 } from "../Text/Text.style";

export const LoginSaveCheckutton = styled.button<{
  check: boolean;
  height?: string;
}>`
  justify-self: flex-end;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 0.875rem auto;
  gap: 0.4375rem;

  width: fit-content;
  height: (${({ height }) => height || "auto"});
  padding: 0.25rem 0;

  ${TextBodyMedium14};
  color: ${({ check }) => (check ? "var(--black_01)" : "var(--black_04)")};
`;
