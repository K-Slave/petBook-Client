import Link from "next/link";
import styled from "styled-components";

export const Container = styled.footer`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 27px 0 36px 0;

  background-color: var(--black_07);
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
`;

export const ContentWap = styled.p`
  display: fixed;
  justify-content: center;
  align-items: center;

  font-weight: 700px;
  font-size: "16px";
  color: var(--black_01);
`;

export const EmailAddress = styled.span`
  display: fixed;
  justify-content: center;
  align-items: center;

  margin: 16px;

  font-weight: 400px;
  font-size: "14px";
  color: var(--black_04);
`;
