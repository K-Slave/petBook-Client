import styled from "styled-components";

export const MenuListDiv = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${({ width }) => width};
  padding: 0.5rem 0;

  color: var(--black_02);
  background-color: white;

  border-radius: 12px;
  border: 1px solid var(--bg_white_01);
  box-shadow: 0px 8px 12px rgba(50, 26, 9, 0.1);

  .menu-item-button {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    color: inherit;
    padding: 0.5rem 0 0.5rem 1.25rem;
  }
`;
