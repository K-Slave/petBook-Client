import React, { PropsWithChildren } from "react";
import Menu from "./Menu";
import { TopNavBox, TopNavDiv } from "./TopNav.style";
import useNavController, {
  NavControllerProps,
} from "@lib/hooks/header/useNavController";
import localConsole from "@lib/utils/localConsole";

interface Props extends NavControllerProps {
  maxWidth?: string;
}

const TopNav = ({ maxWidth, isScrollUse, navView }: Props) => {
  const [isNeedNav] = useNavController({ isScrollUse, navView });

  localConsole?.log(isScrollUse, "isScrollUse");
  localConsole?.log(navView, "navView");

  return (
    <TopNav.Wrap maxWidth={maxWidth}>
      {isNeedNav ? <div style={{ height: "3.625rem" }} /> : <TopNav.Menu />}
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
