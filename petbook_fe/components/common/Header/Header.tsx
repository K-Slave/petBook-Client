import loadingState from "@atoms/common/loadingState";
import { authRequest } from "@lib/API/petBookAPI";
import keyName from "@lib/commonValue/keyName";
import useUserInfo from "@lib/hooks/common/useUserInfo";
import useNavController from "@lib/hooks/header/useNavController";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import localConsole from "@lib/utils/localConsole";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { useSetRecoilState } from "recoil";

import headerImg from "resource/headerImg";
import Menu from "../Nav/Menu";
import ResponsiveImage from "../ResponsiveImage";
import {
  HeaderBox,
  HeaderDiv,
  HeaderLogoLink,
  HeaderLogoutButton,
  HeaderPersonalDiv,
  HeaderUserInfoA,
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
  const client = useQueryClient();
  const setLoading = useSetRecoilState(loadingState);

  const onClick = async () => {
    setLoading(true);
    if (window.confirm("로그아웃 하실건가요?")) {
      const res = await authRequest.logout();

      if (res.data) {
        client.setQueryData([keyName.userInfo], "");
      }

      if (!res.data) {
        alert(
          "로그아웃 시도에 실패했습니다. 인터넷이 연결되지 않았거나 서버 응답에 문제가 있을수 있습니다. 새로고침후 다시 시도해주시기 바랍니다."
        );
      }

      setLoading(false);
    }
  };

  return (
    <>
      <HeaderUserInfoA
        className="Header__Username"
        href={`/mypage/${userData.id}`}
      >
        {userData.iss} 님
      </HeaderUserInfoA>
      <HeaderLogoutButton className="Header__Logout" onClick={onClick}>
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
