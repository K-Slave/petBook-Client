import Link from "next/link";
import React, { PropsWithChildren } from "react";
import setNextjsElement from "../../../../lib/Headless_Patterns/setNextjsElement";

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

type ButtonProps = {
  as: JSX.Element;
  value: string;
  to: string;
  currentPath: string;
};

const Button = ({ as, value, to, currentPath }: ButtonProps) => {
  const embedProps = { isCurrentPage: currentPath === to };
  const InputButton = setNextjsElement({ as, to, embedProps });

  return (
    <Link href={"/" + to} passHref>
      <InputButton>{value}</InputButton>
    </Link>
  );
};

type SearchProps = {
  as: JSX.Element;
};

const Search = ({ as }: PropsWithChildren<SearchProps>) => {
  const InputSearch = setNextjsElement({ as, to: "/search" });

  return (
    <Link href={"/search"} passHref>
      <InputSearch />
    </Link>
  );
};

LinkedNavBar.Wrap = Wrap;
LinkedNavBar.Button = Button;
LinkedNavBar.Search = Search;

export default LinkedNavBar;
