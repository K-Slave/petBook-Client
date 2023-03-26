import Image from "next/image";
import styled from "styled-components";

export const UserInfoH1 = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
`;

export const UserInfoContentDiv = styled.div`
  display: inline-flex;
`;

export const UserImageWrapDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 10rem;

  padding: 0 0.75rem;
`;

export const UserImage = styled(Image)`
  position: absolute;
  bottom: 0;
  border-radius: 50%;
`;

export const UserNameSpan = styled.span`
  padding: 0 0.5rem;

  white-space: nowrap;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 3.125rem;
  letter-spacing: -0.03em;
  color: #383835;
`;

export const UserYearSpan = styled.span`
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 3.125rem;
  letter-spacing: -0.03em;
  color: #aaaaa7;
`;

export const UserFollowButton = styled.button`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;

  padding: 0.6875rem;

  background: #ff6847;
  border-radius: 8px;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #f8f7f2;
`;
