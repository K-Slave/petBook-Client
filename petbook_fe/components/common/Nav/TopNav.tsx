import React, { PropsWithChildren } from "react";
import Menu from "./Menu";
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
    <TopNavBox className="Top__Nav__Wrap">
      <TopNavDiv>{children}</TopNavDiv>
    </TopNavBox>
  );
};

TopNav.Wrap = Wrap;
TopNav.Menu = React.memo(Menu);

export default TopNav;
