import styled from "styled-components";

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-top: 53px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin: 0 10px;
    }
  }
`;

export const PaginationButton = styled.button<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 16px;
  font-weight: normal;
  color: ${({ selected }) =>
    selected ? "var(--black_01)" : "var(--black_05)"} !important;
  &:first-child {
    margin-left: 1.3rem;
  }
  &:last-child {
    margin-right: 1.3rem;
  }
`;
