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

export const SearchForm = styled.form<Pick<SearchFieldProps, "focusColor">>`
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
  }
  .search-input {
    ${TextBodySmallMedium};
  }
  ${({ focusColor }) => css`
    .search-input:focus {
      border-color: ${focusColor} !important;
    }

    .search-input:focus + .search-input-icon {
      color: ${focusColor};
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
