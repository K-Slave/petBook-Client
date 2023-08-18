import Link from "next/link";
import styled from "styled-components";

export const HeaderBox = styled.header<{
  maxWidth?: string;
  position?: "fixed" | "absolute" | "relative";
}>`
  position: ${(props) => (props.position ? props.position : "fixed")};
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100vw;
  /* max-width: ${(props) => (props.maxWidth ? props.maxWidth : "120rem")}; */

  margin: 0 auto;

  border-bottom: 1px solid #e0dfd9;
  background-color: var(--bg_white_02);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr auto;
  grid-column-gap: 1.8047vw;
  align-items: flex-end;

  width: 100%;
  max-width: 67.5vw;
  min-width: 22.2188rem;

  padding-top: 34px;
`;

export const HeaderLogoLink = styled(Link)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 1.0417vw;

  padding: 15px 1.0417vw;

  @media screen and (max-width: 768px) {
    column-gap: 4.1667vw;
  }
`;

export const HeaderPersonalDiv = styled.div<{ isLoggedUser: boolean }>`
  ${(props) => {
    if (props.isLoggedUser) {
      return `
        align-self: center;
        display: grid;
        grid-auto-flow: column;
        column-gap: 10px;
    `;
    }

    return "";
  }}

  padding: 15px 1.0417vw;

  white-space: nowrap;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #383835;
`;

export const HeaderUserInfoA = styled.a``;

export const HeaderLogoutButton = styled.button``;

export const HeaderOwnerAuthButton = styled.button`
  /* padding: 1.25rem; */
  margin-bottom: 0.75rem;

  font-size: 0.875rem;

  color: #383835;
`;
