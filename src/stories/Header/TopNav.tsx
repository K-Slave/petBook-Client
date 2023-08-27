import React, { PropsWithChildren } from "react";
import useNavController, {
  NavControllerProps,
} from "@lib/hooks/header/useNavController";
import Menu from "./Menu";
import { TopNavBox, TopNavDiv } from "./TopNav.style";

interface Props extends NavControllerProps {
  maxWidth?: string;
  isDevelopment: boolean;
}

const TopNav = ({
  maxWidth,
  isScrollUse,
  navView,
  pathname,
  isDevelopment,
}: Props) => {
  const [isNeedNav] = useNavController({ isScrollUse, navView });

  return (
    <TopNav.Wrap maxWidth={maxWidth} pathname={pathname}>
      {isNeedNav ? (
        <div style={{ height: "3.625rem" }} />
      ) : (
        isDevelopment && <TopNav.Menu />
      )}
    </TopNav.Wrap>
  );
};

const Wrap = ({
  children,
  maxWidth,
  pathname,
}: PropsWithChildren<{ maxWidth?: string; pathname?: string }>) => {
  return (
    <TopNavBox
      className="Top__Nav__Wrap"
      maxWidth={maxWidth}
      pathname={pathname}
    >
      <TopNavDiv>{children}</TopNavDiv>
    </TopNavBox>
  );
};

TopNav.Wrap = Wrap;
TopNav.Menu = React.memo(Menu);

export default TopNav;
