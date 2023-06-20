import React, { FormEventHandler, PropsWithChildren } from "react";
import {
  LoginModuleInputBoxDiv,
  LoginModuleBox,
  LoginModuleTitleH1,
  LoginModuleLogoDiv,
  LoginModuleCookieButton,
  LoginSubmitBoxDiv,
  LoginModuleSubmitButton,
  LoginModuleGuideDiv,
  LoginModuleLink,
} from "./style";
import inputImg from "@/image/inputImg";
import authOptions from "@lib/globalConst/authOptions";
import FocusBasedInputBox from "../common/Input/FocusBasedInputBox";
import headerImg from "@/image/headerImg";
import { BackgroundImageSpan } from "../common/Image/BackgroundImage/BackgroundImage.style";
import useLoginModule from "@lib/hooks/login/useLoginForm";
import { VerticalDividerSpan } from "../common/Divider/Divider.style";
import dynamic from "next/dynamic";
import { commonReg } from "../../lib/globalConst";
import PWShowHide from "../common/PWShowHideButton";
import usePWShowHide from "@lib/hooks/input/usePWShowHide";

// TODO : 외부에서 받아온 props를 Zustand에 저장하고, Zustand를 통해 상태 관리
// TODO : 로그인 되있을시 Redirection 또는 라우팅 처리하기
// TODO : 로그인 액션후 이동할 페이지 로직 작성하기

const LoginModule = () => {
  const { isPWHide, onClickPW } = usePWShowHide();
  const {
    loginStore,
    emailRegister,
    passwordRegister,
    isSubmitting,
    evenvtHandler,
  } = useLoginModule();

  const emailBgUrl =
    loginStore.email.length > 0
      ? inputImg.face_wink_on
      : inputImg.face_wink_off;

  const pwBgUrl =
    loginStore.password.length > 0 ? inputImg.keyhole_on : inputImg.keyhole_off;

  const isEmailTyping = !!loginStore.email.length;
  const isPWTyping = !!loginStore.password.length;

  return (
    <LoginModule.Wrap onSubmit={evenvtHandler.onSubmit}>
      <LoginModule.Title />

      <LoginModule.BottomWrap>
        <LoginModule.Submit />
        <LoginModule.Guide />
      </LoginModule.BottomWrap>
    </LoginModule.Wrap>
  );
};

interface SubmitProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Wrap = ({ children, onSubmit }: PropsWithChildren<SubmitProps>) => {
  return <LoginModuleBox onSubmit={onSubmit}>{children}</LoginModuleBox>;
};

const Title = () => {
  return (
    <LoginModuleTitleH1>
      <LoginModuleLogoDiv
        url={headerImg.petbook_logo}
        width="147.35px"
        height="26.65px"
      />
      로그인 후 다양한 콘텐츠를 즐겨보세요
    </LoginModuleTitleH1>
  );
};

const InputField = ({ children }: PropsWithChildren<any>) => {
  return <LoginModuleInputBoxDiv>{children}</LoginModuleInputBoxDiv>;
};

interface CookieBtnProps {
  check: boolean;
  onClick: () => void;
}

const CookieBtn = ({ check, onClick }: CookieBtnProps) => {
  return (
    <LoginModuleCookieButton type="button" check={check} onClick={onClick}>
      <BackgroundImageSpan
        url={check ? inputImg.check_true : inputImg.check_false}
        width="0.875rem"
        height="0.875rem"
      />
      로그인 상태 유지
    </LoginModuleCookieButton>
  );
};

const BottomWrap = ({ children }: PropsWithChildren<any>) => {
  return <LoginSubmitBoxDiv>{children}</LoginSubmitBoxDiv>;
};

const Submit = () => {
  return (
    <LoginModuleSubmitButton type="submit">로그인</LoginModuleSubmitButton>
  );
};

const Guide = () => {
  return (
    <LoginModuleGuideDiv>
      <LoginModuleLink href="#" target="_blank">
        로그인에 문제가 있나요?
      </LoginModuleLink>
      <VerticalDividerSpan width="0.0625rem" height="0.75rem" />
      <LoginModuleLink href="/register" em={true}>
        회원가입
      </LoginModuleLink>
    </LoginModuleGuideDiv>
  );
};

LoginModule.Wrap = Wrap;
LoginModule.Title = Title;
LoginModule.InputField = InputField;
LoginModule.Email = FocusBasedInputBox;
LoginModule.Password = FocusBasedInputBox;
LoginModule.CookieBtn = CookieBtn;
LoginModule.BottomWrap = BottomWrap;
LoginModule.Submit = Submit;
LoginModule.Guide = Guide;

export default dynamic(() => Promise.resolve(LoginModule), {
  ssr: false,
});
