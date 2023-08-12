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

const TopNav = ({ maxWidth, isScrollUse, navView, isDevelopment }: Props) => {
  const [isNeedNav] = useNavController({ isScrollUse, navView });

  return (
    <TopNav.Wrap maxWidth={maxWidth}>
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
