import styled, { css } from "styled-components";
import { TextBodySmallMedium } from "../../Typography/style";

export const SearchFieldDiv = styled.div<{ width?: string; height?: string }>`
  position: relative;
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`;

export const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 8px;
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
  .search-input:focus {
    border-color: var(--primary) !important;
  }

  .search-input:focus + .search-input-icon {
    color: var(--primary);
  }

  .search-input::placeholder {
    color: var(--black_05);
    ${TextBodySmallMedium}
  }
`;

export const KeywordListBoxWrapper = styled.div<{ top: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: 0;
  right: 0;
`;
