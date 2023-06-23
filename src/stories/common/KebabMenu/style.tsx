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
  show: boolean;
  top?: string;
  left?: string;
  right?: string;
}>`
  position: absolute;
  ${({ top, right, left, show }) => css`
    top: ${top};
    right: ${right};
    left: ${left};
    display: ${show ? "block" : "none"};
  `}
`;
