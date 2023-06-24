import styled, { css } from "styled-components";

export const SearchFieldDiv = styled.div<{ width?: string; height?: string }>`
  position: relative;
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`;

export const SearchFieldInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 2.5rem 0 0.5rem;
  border: 1px solid var(--black_04);
  background-color: white;
  border-radius: 8px;
  &:focus {
    border-color: var(--primary);
  }
  &:focus + svg {
    color: var(--primary);
  }
`;

export const SearchFieldForm = styled.form`
  width: 100%;
  height: 100%;
  box-shadow: 0px 20px 16px -20px #d6d3c5;
  border-radius: 8px;
  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    font-size: 1.5rem;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const KeywordListBoxWrapper = styled.div<{ top: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: 0;
  right: 0;
`;
