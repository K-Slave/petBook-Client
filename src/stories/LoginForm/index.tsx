import React, {
  ChangeEventHandler,
  FormEventHandler,
  PropsWithChildren,
} from "react";
import {
  LoginFormInputBoxDiv,
  LoginFormBox,
  LoginFormTitleH1,
  LoginFormLogoDiv,
  LoginFormCookieButton,
  LoginSubmitBoxDiv,
  LoginFormSubmitButton,
  LoginFormGuideDiv,
  LoginFormLink,
} from "./style";
import inputImg from "@/image/inputImg";
import authOptions from "@lib/globalConst/authOptions";
import FocusBasedInputBox from "../common/Input/FocusBasedInputBox";
import headerImg from "@/image/headerImg";
import { BackgroundImageSpan } from "../common/Image/BackgroundImage/BackgroundImage.style";
import useLoginForm from "@lib/hooks/login/useLoginForm";
import { VerticalDividerSpan } from "../common/Divider/Divider.style";
import dynamic from "next/dynamic";
import { commonReg } from "../../lib/globalConst";
import PWShowHide from "../common/PWShowHideButton";
import usePWShowHide from "@lib/hooks/input/usePWShowHide";
import localConsole from "@lib/utils/localConsole";

// TODO : 외부에서 받아온 props를 Zustand에 저장하고, Zustand를 통해 상태 관리
// TODO : 로그인 되있을시 Redirection 또는 라우팅 처리하기
// TODO : 로그인 액션후 이동할 페이지 로직 작성하기

const LoginForm = () => {
  const { isPWHide, onClickPW } = usePWShowHide();
  const {
    emailRegister,
    passwordRegister,
    isSubmitting,
    formSubState,
    setFormSubState,
    onSubmit,
  } = useLoginForm();

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= 1) {
      setFormSubState({
        type: "email",
        value: e.target.value,
      });
    }
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= 1) {
      setFormSubState({
        type: "pw",
        value: e.target.value,
      });
    }
  };

  const emailBgUrl =
    formSubState.email.value.length > 0
      ? inputImg.face_wink_on
      : inputImg.face_wink_off;

  const pwBgUrl =
    formSubState.password.value.length > 0
      ? inputImg.keyhole_on
      : inputImg.keyhole_off;

  const isEmailTyping = !!formSubState.email.value.length;
  const isPWTyping = !!formSubState.password.value.length;

  return (
    <LoginForm.Wrap onSubmit={onSubmit}>
      <LoginForm.Title />
      <LoginForm.InputField>
        <LoginForm.Email
          type="email"
          placeholder="이메일"
          autoComplete="email"
          maxLength={authOptions.email.max}
          pattern={commonReg.email}
          disabled={isSubmitting}
          required
          isTyping={isEmailTyping}
          width="25rem"
          height="3rem"
          bgUrl={emailBgUrl}
          bgWidth="1rem"
          bgHeight="1rem"
          register={emailRegister}
          onChange={onEmailChange}
        />
        <LoginForm.Password
          type={isPWHide ? "password" : "text"}
          placeholder="비밀번호"
          autoComplete="current-password"
          minLength={authOptions.password.min}
          maxLength={authOptions.password.max}
          pattern={commonReg.password}
          disabled={isSubmitting}
          isTyping={isPWTyping}
          required
          width="25rem"
          height="3rem"
          bgUrl={pwBgUrl}
          bgWidth="1rem"
          bgHeight="1rem"
          register={passwordRegister}
          onChange={onPasswordChange}
        >
          <PWShowHide
            isTyping={isPWTyping}
            isPWHide={isPWHide}
            onClick={onClickPW}
          />
        </LoginForm.Password>
        <LoginForm.CookieBtn
          check={formSubState.check}
          setFormSubState={setFormSubState}
        />
      </LoginForm.InputField>
      <LoginForm.BottomWrap>
        <LoginForm.Submit />
        <LoginForm.Guide />
      </LoginForm.BottomWrap>
    </LoginForm.Wrap>
  );
};

interface SubmitProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Wrap = ({ children, onSubmit }: PropsWithChildren<SubmitProps>) => {
  return <LoginFormBox onSubmit={onSubmit}>{children}</LoginFormBox>;
};

const Title = () => {
  return (
    <LoginFormTitleH1>
      <LoginFormLogoDiv
        url={headerImg.petbook_logo}
        width="147.35px"
        height="26.65px"
      />
      로그인 후 다양한 콘텐츠를 즐겨보세요
    </LoginFormTitleH1>
  );
};

const InputField = ({ children }: PropsWithChildren<any>) => {
  return <LoginFormInputBoxDiv>{children}</LoginFormInputBoxDiv>;
};

interface CookieBtnProps {
  check: boolean;
  setFormSubState: React.Dispatch<{
    type: "email" | "pw" | "cookie";
    value: string;
  }>;
}

const CookieBtn = ({ check, setFormSubState }: CookieBtnProps) => {
  return (
    <LoginFormCookieButton
      type="button"
      check={check}
      onClick={() => {
        setFormSubState({
          type: "cookie",
          value: "",
        });
      }}
    >
      <BackgroundImageSpan
        url={check ? inputImg.check_true : inputImg.check_false}
        width="0.875rem"
        height="0.875rem"
      />
      로그인 상태 유지
    </LoginFormCookieButton>
  );
};

const BottomWrap = ({ children }: PropsWithChildren<any>) => {
  return <LoginSubmitBoxDiv>{children}</LoginSubmitBoxDiv>;
};

const Submit = () => {
  return <LoginFormSubmitButton type="submit">로그인</LoginFormSubmitButton>;
};

const Guide = () => {
  return (
    <LoginFormGuideDiv>
      <LoginFormLink href="#" target="_blank">
        로그인에 문제가 있나요?
      </LoginFormLink>
      <VerticalDividerSpan width="0.0625rem" height="0.75rem" />
      <LoginFormLink href="/register" em={true}>
        회원가입
      </LoginFormLink>
    </LoginFormGuideDiv>
  );
};

LoginForm.Wrap = Wrap;
LoginForm.Title = Title;
LoginForm.InputField = InputField;
LoginForm.Email = FocusBasedInputBox;
LoginForm.Password = FocusBasedInputBox;
LoginForm.CookieBtn = CookieBtn;
LoginForm.BottomWrap = BottomWrap;
LoginForm.Submit = Submit;
LoginForm.Guide = Guide;

export default dynamic(() => Promise.resolve(LoginForm), {
  ssr: false,
});
