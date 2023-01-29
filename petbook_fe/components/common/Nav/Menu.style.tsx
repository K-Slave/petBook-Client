import Link from "next/link";
import styled, { css } from "styled-components";

const MenuListStyle = css`
  overflow-x: scroll;

  display: flex;

  width: 100%;

  white-space: nowrap;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #92928e;
`;

export const MenuListDiv = styled.div`
  ${MenuListStyle}
`;

export const MenuListNav = styled.nav`
  ${MenuListStyle}
`;

export const MenuItemLink = styled(Link)<{ isCurrentPath?: boolean }>`
  box-sizing: content-box;

  padding: 15px 1.0417vw;

  font-weight: ${({ isCurrentPath }) => (isCurrentPath ? "700" : "inherit")};
  color: ${({ isCurrentPath }) => (isCurrentPath ? "#FF6847" : "inherit")};
  border-bottom: ${({ isCurrentPath }) =>
    isCurrentPath ? "4px solid #FF6847" : ""};
`;
