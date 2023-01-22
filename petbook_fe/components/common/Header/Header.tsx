import Link from "next/link";
import React, { PropsWithChildren } from "react";
import {
  HeaderBox,
  HeaderDiv,
  HeaderLogoLink,
  HeaderLogoIllustImg,
  HeaderLogoTitleImg,
  HeaderMenuItemLink,
  HeaderMenuNav,
  HeaderPersonalDiv,
} from "./Header.style";

interface Props {
  pathname: string;
}

const Header = ({ pathname }: Props) => {
  return (
    <Header.Wrap>
      <Header.Logo />
      <Header.MenuNav />
      <Header.Personal />
    </Header.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return (
    <HeaderBox>
      <HeaderDiv>{children}</HeaderDiv>
    </HeaderBox>
  );
};

const Logo = () => {
  return (
    <HeaderLogoLink href="/">
      <HeaderLogoIllustImg
        src="https://objectstorage.ap-seoul-1.oraclecloud.com/n/cnkpahvshifr/b/petbook-image/o/assets%2Fillust_img_placeholder.png"
        alt="일러스트 플레이스 홀더"
        width={33.07}
        height={13.85}
      />
      <HeaderLogoTitleImg
        src="https://objectstorage.ap-seoul-1.oraclecloud.com/n/cnkpahvshifr/b/petbook-image/o/assets%2Fpetbook_logo.png"
        alt="펫북 로고 타이틀"
        width={147.35}
        height={26.65}
      />
    </HeaderLogoLink>
  );
};

const MenuNav = () => {
  const menuList = [
    {
      path: "/",
      name: "홈",
    },
    {
      path: "/findhospital",
      name: "병원정보",
    },
    {
      path: "/community",
      name: "커뮤니티",
    },
    {
      path: "/feed",
      name: "피드",
    },
  ];

  return (
    <HeaderMenuNav>
      {menuList.map((menu) => {
        return <MenuItem menu={menu} />;
      })}
    </HeaderMenuNav>
  );
};

interface MenuItemProps {
  menu: {
    path: string;
    name: string;
  };
}

const MenuItem = ({ menu }: MenuItemProps) => {
  return <HeaderMenuItemLink href={menu.path}>{menu.name}</HeaderMenuItemLink>;
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

Header.Wrap = Wrap;
Header.Logo = Logo;
Header.MenuNav = MenuNav;
Header.Personal = Personal;

export default Header;
