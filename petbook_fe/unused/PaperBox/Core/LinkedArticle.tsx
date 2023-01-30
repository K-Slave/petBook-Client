import Link from "next/link";
import React, { PropsWithChildren } from "react";
import setNextjsElement from "../../../lib/utils/setNextjsElement";

const LinkedArticle = ({ children }: PropsWithChildren<any>) => {
  return children;
};

type WrapProps = {
  as: JSX.Element;
  to: string;
};

const Wrap = ({ children, as, to }: PropsWithChildren<WrapProps>) => {
  const InputWrap = setNextjsElement({ as, to });

  return (
    // warning
    // to 가 클라이언트 상에서 결정되서 undefined 발생
    // ssr 처리 되면 문제가 없어질것으로 보임
    <Link href={to || "/knowhow"} passHref>
      <InputWrap>{children}</InputWrap>
    </Link>
  );
};

type TopProps = {
  as: JSX.Element;
  value: string;
};

const Top = ({ as, value }: TopProps) => {
  const InputTop = setNextjsElement({ as });

  return <InputTop>{value}</InputTop>;
};

type MainProps = {
  as: JSX.Element;
  value: string;
};

const Main = ({ as, value }: PropsWithChildren<MainProps>) => {
  const InputMain = setNextjsElement({ as });

  return <InputMain>{value}</InputMain>;
};

type PaperBottom = {
  as: JSX.Element;
  value: string;
};

const Bottom = ({ as, value }: PropsWithChildren<PaperBottom>) => {
  const InputBottom = setNextjsElement({ as });

  return <InputBottom>{value}</InputBottom>;
};

LinkedArticle.Wrap = Wrap;
LinkedArticle.Top = Top;
LinkedArticle.Main = Main;
LinkedArticle.Bottom = Bottom;

export default LinkedArticle;
