import React, { FormEventHandler, PropsWithChildren } from "react";
import { LoginSubmitButton, LoginWrapForm } from "./DefaultLoginForm.style";
import inputImg from "@/image/inputImg";
import useLoginForm from "@lib/hooks/login/useLoginForm";
import usePWShowHide from "@lib/hooks/input/usePWShowHide";
import FocusBasedInputBox from "../../Input/FocusBasedInputBox";
import PWShowHideButton from "../../PWShowHideButton";
import LoginSaveButton from "../../LoginSaveButton/LoginSaveButton";
import { AuthLoginError } from "@lib/API/petBookAPI/types/authRequest";
import localConsole from "@lib/utils/localConsole";
import HelperText from "../../Text/HelperText/HelperText";

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
      <DefaultLoginForm.Save
        check={loginStore.check}
        onClick={evenvtHandler.onSaveClick}
        text="로그인 상태 유지"
      />
      <DefaultLoginForm.Submit />
      <DefaultLoginForm.Helper
        status={loginRequest.status}
        message={loginRequest.errorHelperText}
      />
    </DefaultLoginForm.Wrap>
  );
};

interface WrapProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Wrap = ({ children, onSubmit }: PropsWithChildren<WrapProps>) => {
  return (
    <LoginWrapForm onSubmit={onSubmit} noValidate>
      {children}
    </LoginWrapForm>
  );
};

const Submit = () => {
  return <LoginSubmitButton type="submit">로그인</LoginSubmitButton>;
};

DefaultLoginForm.Wrap = Wrap;
DefaultLoginForm.Email = FocusBasedInputBox;
DefaultLoginForm.Password = FocusBasedInputBox;
DefaultLoginForm.Save = LoginSaveButton;
DefaultLoginForm.Submit = Submit;
DefaultLoginForm.Helper = HelperText;

export default DefaultLoginForm;
