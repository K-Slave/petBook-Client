import styled, { css } from "styled-components";

export const KebabMenuBox = styled.div<{
  width?: string;
  height?: string;
  color?: string;
}>`
  position: relative;
  ${({ width, height, color }) => css`
    width: ${width};
    height: ${height};
    color: ${color};
  `}
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

export const KebabMenuListWrapper = styled.div<{
  top?: string;
  left?: string;
  right?: string;
}>`
  position: absolute;
  ${({ top, right, left }) => css`
    top: ${top};
    right: ${right};
    left: ${left};
  `}
`;

export const DefaultMenuListDiv = styled.div`
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
