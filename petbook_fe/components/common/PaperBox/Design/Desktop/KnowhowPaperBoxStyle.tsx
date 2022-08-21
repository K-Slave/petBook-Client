import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const QALinkedArticleWrapBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  transition: all 0.4s ease-in-out;

  width: 336px;
  height: 336px;

  padding: 64px 36px 34px 30px;

  background-color: #fffbe3;
  border-radius: 10px;

  &:hover {
    width: 375px;
    height: 375px;
  }
`;

export const QALinkedArticleWrap = (props: PropsWithChildren<{}>) => {
  return (
    <QALinkedArticleWrapBox className="QALinked__Article__Wrap" {...props}>
      {props.children}
    </QALinkedArticleWrapBox>
  );
};

const QALinkedAricleTopBox = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

export const QALinkedAricleTop = ({ children }: PropsWithChildren<{}>) => {
  return (
    <QALinkedAricleTopBox className="QALinked__Article__Top">
      {children}
    </QALinkedAricleTopBox>
  );
};

const QALinkedAricleTopMainBox = styled.p`
  height: 100%;

  margin-top: 24px;

  font-size: 20px;
  font-weight: 500;
`;

export const QALinkedAricleTopMain = ({ children }: PropsWithChildren<{}>) => {
  return <QALinkedAricleTopMainBox>{children}</QALinkedAricleTopMainBox>;
};

const UserProfileTagBox = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export const UserProfileTag = ({ children }: PropsWithChildren<{}>) => {
  return <UserProfileTagBox>{children}</UserProfileTagBox>;
};
