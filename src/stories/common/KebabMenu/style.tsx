import styled from "styled-components";

export const KebabMenuBox = styled.div<{ width?: string; height?: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: var(--black_04);
`;

export const KebabMenuButton = styled.button`
  width: 100%;
  height: 100%;
  color: inherit;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MenuListDiv = styled.div<{ top?: string }>`
  position: absolute;
  top: ${({ top }) => top};
  right: 0;
  width: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
  background-color: white;
  border: 1px solid var(--bg_white_01);
  box-shadow: 0px 8px 12px rgba(50, 26, 9, 0.1);
  border-radius: 12px;
  color: var(--black_02);
  .menu-item-button {
    width: 100%;
    text-align: left;
    padding: 0.5rem 0 0.5rem 1.25rem;
  }
`;