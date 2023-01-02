import styled, { css } from "styled-components";

const allButtonStyle = css`
  background-color: var(--black_01);
  color: var(--bg_white_02) !important;
  font-weight: bold;
`;

const otherButtonStyle = css`
  background-color: white;
  color: var(--black_01);
`;

export const CategoryNavButton = styled.button<{ active: string }>`
  ${({ active }) => (active ? allButtonStyle : otherButtonStyle)}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 132px;
  height: 52px;
  font-size: 16px !important;
  border-radius: 8px;
`;

export const CategoryNavDiv = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 31px;
`;
