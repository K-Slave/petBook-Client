import Link from "next/link";
import React, { PropsWithChildren } from "react";
import setNextjsElement, {
  setNextjsForwardRef,
} from "../../../../lib/utils/setNextjsElement";

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

const LeftSide = (props: PropsWithChildren<LeftSideProps>) => {
  const { children, as } = props;
  if (!as) return <></>;

  const InputLeftSide = setNextjsForwardRef({ as, to: "/", ...props });

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
  const embedProps = {
    isCurrentPage: to === "/" ? currentPath === to : currentPath?.includes(to),
  };
  const InputButton = setNextjsForwardRef({ as, to, embedProps });

  return (
    <Link href={`${to}`} passHref>
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
  children,
  value,
  to,
  currentPath,
}: PropsWithChildren<RightSideProps>) => {
  if (!as) return <></>;

  if (to && Array.isArray(to)) {
    return <></>;
  }

  if (to && typeof to === "string") {
    const embedProps = {
      isCurrentPage:
        to === "/" ? currentPath === to : currentPath?.includes(to),
    };

    const InputRightSide = setNextjsForwardRef({
      as,
      to,
      embedProps,
    });

    // if (to === "/login") {
    //   console.log(InputRightSide, "login props");
    // }

    return (
      <Link href={`${to}`} passHref>
        <InputRightSide>{value}</InputRightSide>
      </Link>
    );
  }

  const InputRightSide = setNextjsForwardRef({ as, to: "/search" });

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
