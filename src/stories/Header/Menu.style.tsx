import Link from "next/link";
import styled, { css } from "styled-components";

const MenuListStyle = css`
  overflow-x: scroll;

  display: flex;

  width: 100%;

  background-color: var(--bg_white_02);

  white-space: nowrap;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #92928e;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuListDiv = styled.div`
  ${MenuListStyle}
`;

export const MenuListNav = styled.nav`
  ${MenuListStyle}
`;

export const MenuItemLink = styled(Link)<{ iscurrentpath: boolean }>`
  box-sizing: content-box;

  padding: 15px 1.0417vw;

  font-weight: ${({ iscurrentpath }) => (iscurrentpath ? "700" : "inherit")};
  color: ${({ iscurrentpath }) => (iscurrentpath ? "#FF6847" : "inherit")};
  border-bottom: ${({ iscurrentpath }) =>
    iscurrentpath ? "4px solid #FF6847" : ""};

  &:hover {
    transition: all 0.15s ease-in-out;
    font-weight: bold;
  }
`;
