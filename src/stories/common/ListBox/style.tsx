import styled, { css } from "styled-components";
import type { ListBoxStyleProps } from ".";

export const ListDiv = styled.div<ListBoxStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  padding: 0.5rem 0;

  ${({ width, color, bgColor, border, maxHeight, boxShadow }) => css`
    width: ${width};
    max-height: ${maxHeight};
    color: ${color};
    background-color: ${bgColor};
    border: 1px solid ${border?.color};
    box-shadow: ${boxShadow};
    border-radius: ${border?.radius};
  `}

  &::-webkit-scrollbar {
    display: none;
  }
`;
