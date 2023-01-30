import React, { PropsWithChildren } from "react";
import Header from "../Header/Header";
import { TopNavBox, TopNavDiv } from "./TopNav.style";

interface Props {
  currentPath: string;
}

const TopNav = ({ currentPath }: Props) => {
  return (
    <TopNav.Wrap>
      <TopNav.Menu currentPath={currentPath} />
    </TopNav.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return (
    <TopNavBox>
      <TopNavDiv>{children}</TopNavDiv>
    </TopNavBox>
  );
};

TopNav.Wrap = Wrap;
TopNav.Menu = Header.MenuNav;

export default TopNav;
