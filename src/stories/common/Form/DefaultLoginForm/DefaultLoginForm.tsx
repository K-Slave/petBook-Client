import React, { FormEventHandler, PropsWithChildren } from "react";
import {
  LoginMiddleWrap,
  LoginSubmitButton,
  LoginWrapForm,
} from "./DefaultLoginForm.style";
import inputImg from "@image/inputImg";
import useLoginForm from "@lib/hooks/login/useLoginForm";
import usePWShowHide from "@lib/hooks/input/usePWShowHide";
import FocusBasedInputBox from "../../Input/FocusBasedInputBox";
import PWShowHideButton from "../../PWShowHideButton";
import LoginSaveButton from "../../LoginSaveButton/LoginSaveButton";
import HelperText from "../HelperText/HelperText";
import dynamic from "next/dynamic";

const DefaultLoginForm = () => {
  const { isPWHide, onClickPW } = usePWShowHide();
  const {
    loginStore,
    loginRequest,
    emailRegister,
    passwordRegister,
    evenvtHandler,
  } = useLoginForm();

  const emailBgUrl =
    loginStore.email.length > 0
      ? inputImg.face_wink_on
      : inputImg.face_wink_off;

  const pwBgUrl =
    loginStore.password.length > 0 ? inputImg.keyhole_on : inputImg.keyhole_off;

  const isEmailTyping = !!loginStore.email.length;
  const isPWTyping = !!loginStore.password.length;

  return (
    <DefaultLoginForm.Wrap onSubmit={evenvtHandler.onSubmit}>
      <DefaultLoginForm.Email
        id="Email__Input"
        type="email"
        name="email"
        placeholder="이메일"
        autoComplete="email"
        defaultValue={loginStore.email}
        isTyping={isEmailTyping}
        width="25rem"
        height="3rem"
        bgUrl={emailBgUrl}
        bgWidth="1rem"
        bgHeight="1rem"
        register={emailRegister}
      />
      <DefaultLoginForm.Password
        id="PW__Input"
        type={isPWHide ? "password" : "text"}
        name="password"
        placeholder="비밀번호"
        autoComplete="current-password"
        defaultValue={loginStore.password}
        isTyping={isPWTyping}
        width="25rem"
        height="3rem"
        bgUrl={pwBgUrl}
        bgWidth="1rem"
        bgHeight="1rem"
        register={passwordRegister}
      >
        <PWShowHideButton
          isTyping={isPWTyping}
          isPWHide={isPWHide}
          onClick={onClickPW}
        />
      </DefaultLoginForm.Password>

      <DefaultLoginForm.MiddleWrap>
        <DefaultLoginForm.Helper
          status={loginRequest.status}
          message={loginRequest.errorHelperText}
        />
        <DefaultLoginForm.Save
          check={loginStore.check}
          onClick={evenvtHandler.onSaveClick}
          text="로그인 상태 유지"
        />
      </DefaultLoginForm.MiddleWrap>
      <DefaultLoginForm.Submit isLoading={loginRequest.status === "loading"} />
    </DefaultLoginForm.Wrap>
  );
};

interface WrapProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Wrap = ({ children, onSubmit }: PropsWithChildren<WrapProps>) => {
  return (
    <LoginWrapForm onSubmit={onSubmit} autoComplete="on">
      {children}
    </LoginWrapForm>
  );
};

const MiddleWrap = ({ children }: PropsWithChildren<any>) => {
  return <LoginMiddleWrap>{children}</LoginMiddleWrap>;
};

interface SubmitProps {
  isLoading: boolean;
}

const Submit = ({ isLoading }: SubmitProps) => {
  return (
    <LoginSubmitButton type="submit" disabled={isLoading}>
      로그인
    </LoginSubmitButton>
  );
};

DefaultLoginForm.Wrap = Wrap;
DefaultLoginForm.Email = FocusBasedInputBox;
DefaultLoginForm.Password = FocusBasedInputBox;
DefaultLoginForm.MiddleWrap = MiddleWrap;
DefaultLoginForm.Save = LoginSaveButton;
DefaultLoginForm.Submit = Submit;
DefaultLoginForm.Helper = HelperText;

// export default dynamic(() => Promise.resolve(DefaultLoginForm), {
//   ssr: false,
// });

export default DefaultLoginForm;
