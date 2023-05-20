import React, { PropsWithChildren } from "react";
import Menu from "./Menu";
import { TopNavBox, TopNavDiv } from "./TopNav.style";

interface Props {
  maxWidth?: string;
}

const TopNav = ({ maxWidth }: Props) => {
  return (
    <TopNav.Wrap maxWidth={maxWidth}>
      <TopNav.Menu />
    </TopNav.Wrap>
  );
};

const Wrap = ({
  children,
  maxWidth,
}: PropsWithChildren<{ maxWidth?: string }>) => {
  return (
    <TopNavBox className="Top__Nav__Wrap" maxWidth={maxWidth}>
      <TopNavDiv>{children}</TopNavDiv>
    </TopNavBox>
  );
};

TopNav.Wrap = Wrap;
TopNav.Menu = React.memo(Menu);

export default TopNav;
