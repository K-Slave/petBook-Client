import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr auto;
  grid-column-gap: 34.65px;
  align-items: flex-end;

  width: 100%;
  max-width: 67.5vw;

  padding-top: 34px;
`;

export const HeaderLogoLink = styled(Link)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 20px;

  width: fit-content;

  padding: 15px 20px;
`;

export const HeaderLogoIllustImg = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const HeaderLogoTitleImg = styled(Image)`
  width: 147.35px;
  height: 26.65px;
`;

export const HeaderMenuNav = styled.nav`
  display: flex;

  width: 100%;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #92928e;
`;

export const HeaderMenuItemLink = styled(Link)`
  box-sizing: content-box;

  padding: 15px 20px;

  /* border-bottom: 4px solid #000; */
`;

export const HeaderPersonalDiv = styled.div`
  padding: 15px 20px;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #383835;
`;
