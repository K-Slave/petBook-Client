import useNavController from "@lib/hooks/header/useNavController";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

import headerImg from "resource/headerImg";
import Menu from "../Nav/Menu";
import ResponsiveImage from "../ResponsiveImage";
import {
  HeaderBox,
  HeaderDiv,
  HeaderLogoLink,
  HeaderPersonalDiv,
} from "./Header.style";

interface Props {
  currentPath: string;
}

const Header = ({ currentPath }: Props) => {
  return (
    <Header.Wrap>
      <Header.Logo />
      <Header.MenuNav currentPath={currentPath} />
      <Header.Personal />
    </Header.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return (
    <HeaderBox className="Header__Wrap">
      <HeaderDiv>{children}</HeaderDiv>
    </HeaderBox>
  );
};

const Logo = () => {
  return (
    <HeaderLogoLink href="/">
      <ResponsiveImage
        src={headerImg.illust_img_placeholder}
        alt="일러스트 플레이스 홀더"
        boxWidth="40px"
        boxHeight="40px"
        fill
      />
      <ResponsiveImage
        src={headerImg.petbook_logo}
        alt="펫북 로고 타이틀"
        boxWidth="147.35px"
        boxHeight="26.65px"
        fill
      />
    </HeaderLogoLink>
  );
};

const MenuNav = ({ currentPath }: { currentPath: string }) => {
  const { isNeedNav } = useNavController();

  return (
    <>{isNeedNav ? <Menu currentPath={currentPath} isHeaderMenu /> : <div />}</>
  );
};

const Personal = () => {
  return (
    <HeaderPersonalDiv>
      <Link href="/login">로그인</Link>
      &nbsp;&middot;&nbsp;
      <Link href="/register">회원가입</Link>
    </HeaderPersonalDiv>
  );
};

Header.Wrap = React.memo(Wrap);
Header.Logo = Logo;
Header.MenuNav = MenuNav;
Header.Personal = Personal;

export default Header;
