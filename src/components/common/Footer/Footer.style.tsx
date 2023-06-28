import Link from "next/link";
import styled from "styled-components";

export const Container = styled.footer`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 1.6875rem 0 2.25rem 0;

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

  font-weight: 700;
  font-size: 1rem;
  color: var(--black_01);
`;

export const EmailAddress = styled.span`
  display: fixed;
  justify-content: center;
  align-items: center;

  margin: 1rem;

  font-weight: 25rem;
  font-size: 0.875rem;
  color: var(--black_04);
`;
