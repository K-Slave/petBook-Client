import useUserInfo from "@lib/hooks/common/useUserInfo";
import useNavController from "@lib/hooks/header/useNavController";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import localConsole from "@lib/utils/localConsole";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

import headerImg from "resource/headerImg";
import Menu from "../Nav/Menu";
import ResponsiveImage from "../ResponsiveImage";
import {
  HeaderBox,
  HeaderDiv,
  HeaderLogoLink,
  HeaderLogoutButton,
  HeaderPersonalDiv,
  HeaderUserInfoSpan,
} from "./Header.style";

interface Props {
  currentPath: string;
}

const Header = ({ currentPath }: Props) => {
  const { userData } = useUserInfo();

  return (
    <Header.Wrap>
      <Header.Logo />
      <Header.MenuNav currentPath={currentPath} />
      <Header.Personal isLoggedUser={!!userData}>
        {userData ? <Header.UserInfo userData={userData} /> : <Header.Auth />}
      </Header.Personal>
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
        boxwidth="40px"
        boxheight="40px"
        fill
      />
      <ResponsiveImage
        src={headerImg.petbook_logo}
        alt="펫북 로고 타이틀"
        boxwidth="147.35px"
        boxheight="26.65px"
        fill
      />
    </HeaderLogoLink>
  );
};

const MenuNav = ({ currentPath }: { currentPath: string }) => {
  const [isNeedNav] = useNavController();

  return (
    <>{isNeedNav ? <Menu currentPath={currentPath} isHeaderMenu /> : <div />}</>
  );
};

interface PersonalProps {
  isLoggedUser: boolean;
}

const Personal = ({
  children,
  isLoggedUser,
}: PropsWithChildren<PersonalProps>) => {
  localConsole?.log(isLoggedUser, "isLoggedUser");

  return (
    <HeaderPersonalDiv isLoggedUser={isLoggedUser}>
      {children}
    </HeaderPersonalDiv>
  );
};

const UserInfo = ({ userData }: { userData: DecodedUserInfo }) => {
  return (
    <>
      <HeaderUserInfoSpan className="Header__Username">
        {userData.iss} 님
      </HeaderUserInfoSpan>
      <HeaderLogoutButton className="Header__Logout">
        로그아웃
      </HeaderLogoutButton>
    </>
  );
};

const Auth = () => {
  return (
    <>
      <Link className="Header__Login" href="/login">
        로그인
      </Link>
      &nbsp;&middot;&nbsp;
      <Link className="Header__Register" href="/register">
        회원가입
      </Link>
    </>
  );
};

Header.Wrap = React.memo(Wrap);
Header.Logo = Logo;
Header.MenuNav = React.memo(MenuNav);
Header.Personal = Personal;
Header.UserInfo = UserInfo;
Header.Auth = Auth;

export default Header;
