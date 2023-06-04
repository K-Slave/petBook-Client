import loadingState from "@atoms/common/loadingState";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { authRequest } from "@lib/API/petBookAPI";
import useUserInfo from "@lib/hooks/common/useUserInfo";
import useNavController, {
  NavControllerProps,
} from "@lib/hooks/header/useNavController";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { useSetRecoilState } from "recoil";
import {
  HeaderBox,
  HeaderDiv,
  HeaderLogoLink,
  HeaderLogoutButton,
  HeaderOwnerAuthButton,
  HeaderPersonalDiv,
  HeaderUserInfoA,
} from "./Header.style";
import { cookieKeyName } from "@lib/globalConst";
import headerImg from "@/image/headerImg";
import ResponsiveImage from "../common/Image/ResponsiveImage";
import Menu from "./Menu";
import { useRouter } from "next/router";

interface Props extends NavControllerProps {
  maxWidth?: string;
  position?: "fixed" | "absolute" | "relative";
  isDevelopment: boolean;
  isNeedOwnerAuthor?: boolean;
  isOwnerAuthorization?: boolean;
}

const Header = ({
  maxWidth,
  position,
  isScrollUse,
  navView,
  isDevelopment,
  isNeedOwnerAuthor,
  isOwnerAuthorization,
}: Props) => {
  const { userData } = useUserInfo();

  return (
    <Header.Wrap maxWidth={maxWidth} position={position}>
      <Header.Logo defaultLogo={isDevelopment} />
      {(isOwnerAuthorization || isDevelopment === true) && (
        <Header.MenuNav
          isScrollUse={isScrollUse}
          navView={navView}
          isOwnerAuthorization={isOwnerAuthorization}
        />
      )}
      {isDevelopment === true ? (
        <Header.Personal isLoggedUser={!!userData}>
          {userData ? <Header.UserInfo userData={userData} /> : <Header.Auth />}
        </Header.Personal>
      ) : (
        <div />
      )}
      {/* {router.query.owner_author && } */}
      {!isOwnerAuthorization && isNeedOwnerAuthor && (
        <Header.Personal isLoggedUser={!!userData}>
          <Header.OwnerAuth />
        </Header.Personal>
      )}
    </Header.Wrap>
  );
};

const Wrap = ({
  children,
  maxWidth,
  position,
}: PropsWithChildren<{
  maxWidth?: string;
  position?: "fixed" | "absolute" | "relative";
}>) => {
  return (
    <HeaderBox className="Header__Wrap" maxWidth={maxWidth} position={position}>
      <HeaderDiv>{children}</HeaderDiv>
    </HeaderBox>
  );
};

interface LogoProps {
  defaultLogo?: boolean;
}

const Logo = ({ defaultLogo }: LogoProps) => {
  return (
    <HeaderLogoLink href="/">
      <ResponsiveImage
        // src={headerImg.illust_img_placeholder}
        src={
          defaultLogo !== true ? "/LOGO.png" : headerImg.illust_img_placeholder
        }
        alt="일러스트 플레이스 홀더"
        imgFillWidth={defaultLogo !== true ? "50px" : ""}
        imgFillHeight={defaultLogo !== true ? "50px" : ""}
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

interface MenuNavProps extends NavControllerProps {
  isOwnerAuthorization?: boolean;
}

const MenuNav = ({
  isScrollUse,
  navView,
  isOwnerAuthorization,
}: MenuNavProps) => {
  const [isNeedNav] = useNavController({ isScrollUse, navView });
  const router = useRouter();

  return (
    <>
      {router.pathname === "/" ? (
        <></>
      ) : isNeedNav ? (
        <Menu isHeaderMenu />
      ) : (
        <div />
      )}
      {router.pathname === "/" && isOwnerAuthorization && <Menu isHeaderMenu />}
    </>
  );
};

interface PersonalProps {
  isLoggedUser: boolean;
}

const Personal = ({
  children,
  isLoggedUser,
}: PropsWithChildren<PersonalProps>) => {
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

      if (res.response.data) {
        client.setQueryData([cookieKeyName.userInfo], "");
        sprPetBookClient.defaults.headers.common.Authorization = "";
      }

      if (!res.response.data) {
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

const OwnerAuth = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/?owner_author=true");
  };

  return (
    <HeaderOwnerAuthButton onClick={onClick}>
      방문자 인증하기
    </HeaderOwnerAuthButton>
  );
};

Header.Wrap = React.memo(Wrap);
Header.Logo = Logo;
Header.MenuNav = React.memo(MenuNav);
Header.Personal = Personal;
Header.UserInfo = UserInfo;
Header.Auth = Auth;
Header.OwnerAuth = OwnerAuth;

export default Header;
