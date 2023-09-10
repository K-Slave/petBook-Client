import styled, { css } from "styled-components";

export const DividerStyle = css``;

export const VerticalDividerStyle = css`
  background-color: var(--black_06);
`;

export const VerticalDividerSpan = styled.span<{
  width: string;
  height: string;
}>`
  ${VerticalDividerStyle};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
