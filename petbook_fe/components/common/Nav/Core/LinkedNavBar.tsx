import Link from "next/link";
import React, { PropsWithChildren } from "react";
import setNextjsElement from "../../../../lib/utils/setNextjsElement";

const LinkedNavBar = ({ children }: PropsWithChildren<any>) => {
  return children;
};

type WrapProps = {
  as: JSX.Element;
};

const Wrap = ({ children, as }: PropsWithChildren<WrapProps>) => {
  const InputWrap = setNextjsElement({ as });

  return <InputWrap>{children}</InputWrap>;
};

type LeftSideProps = {
  as?: JSX.Element;
};

const LeftSide = ({ children, as }: PropsWithChildren<LeftSideProps>) => {
  if (!as) return <></>;

  const InputLeftSide = setNextjsElement({ as, to: "/" });

  return (
    <Link href="/" passHref>
      <InputLeftSide>{children}</InputLeftSide>
    </Link>
  );
};

LeftSide.defaultProps = {
  as: <></>,
};

type MenuProps = {
  as: JSX.Element;
};

const Menu = ({ as, children }: PropsWithChildren<MenuProps>) => {
  const InputMenu = setNextjsElement({ as });

  return <InputMenu>{children}</InputMenu>;
};

type ButtonProps = {
  as: JSX.Element;
  value: string;
  to: string;
  currentPath?: string;
};

const Button = ({ as, value, to, currentPath }: ButtonProps) => {
  const embedProps = { isCurrentPage: currentPath === to };
  const InputButton = setNextjsElement({ as, to, embedProps });

  return (
    <Link href={`/${to}`} passHref>
      <InputButton>{value}</InputButton>
    </Link>
  );
};

Button.defaultProps = {
  currentPath: "",
};

type RightSideProps = {
  as?: JSX.Element;
  value?: string | string[];
  to?: string | string[];
  currentPath?: string;
};

const RightSide = ({
  as,
  value,
  to,
  currentPath,
}: PropsWithChildren<RightSideProps>) => {
  if (!as) return <></>;

  if (to && Array.isArray(to)) {
    return <></>;
  }

  if (to && typeof to === "string") {
    const embedProps = { isCurrentPage: currentPath === to };
    const InputRightSide = setNextjsElement({ as, to, embedProps });

    return (
      <Link href={`/${to}`} passHref>
        <InputRightSide>{value}</InputRightSide>
      </Link>
    );
  }

  const InputRightSide = setNextjsElement({ as, to: "/search" });

  return (
    <Link href="/search" passHref>
      <InputRightSide />
    </Link>
  );
};

RightSide.defaultProps = {
  as: <></>,
  value: "",
  to: "",
  currentPath: "",
};

LinkedNavBar.Wrap = Wrap;
LinkedNavBar.LeftSide = LeftSide;
LinkedNavBar.Menu = Menu;
LinkedNavBar.Button = Button;
LinkedNavBar.RightSide = RightSide;

export default LinkedNavBar;
