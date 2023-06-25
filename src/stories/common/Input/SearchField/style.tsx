import styled, { css } from "styled-components";
import { TextBodySmallMedium } from "../../Typography/style";
import type { SearchFieldProps } from ".";

export const SearchFieldDiv = styled.div<{ width?: string; height?: string }>`
  position: relative;
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`;

export const SearchForm = styled.form<
  Pick<SearchFieldProps, "focusColor" | "activeColor">
>`
  width: 100%;
  height: 100%;
  .search-input-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black_01);
  }
  .search-input {
    ${TextBodySmallMedium};
    color: var(--black_01);
  }
  ${({ focusColor }) => css`
    .search-input:focus {
      border-color: ${focusColor} !important;
    }

    .search-input:focus + .search-input-icon {
      color: ${focusColor};
    }
  `}
  ${({ activeColor }) =>
    activeColor &&
    css`
      .search-input {
        border-color: ${activeColor} !important;
      }

      .search-input + .search-input-icon {
        color: ${activeColor};
      }
    `}
  .search-input::placeholder {
    ${TextBodySmallMedium};
  }
`;

export const KeywordListBoxWrapper = styled.div<{ top: string; show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: ${({ top }) => top};
  left: 0;
  right: 0;
`;
