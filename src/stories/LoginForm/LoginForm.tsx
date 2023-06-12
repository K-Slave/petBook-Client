import React, {
  FormEventHandler,
  PropsWithChildren,
  useReducer,
  useState,
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
} from "./LoginForm.style";
import inputImg from "@/image/inputImg";
import authOptions from "@lib/globalConst/authOptions";
import FocusBasedInput from "../common/Input/FocusBasedInput/FocusBasedInput";
import headerImg from "@/image/headerImg";
import { BackgroundImageSpan } from "../common/Image/BackgroundImage/BackgroundImage.style";

const LoginForm = () => {
  // TODO : 전역 상태 관리 라이브러리 사용하도록 수정하기
  const [formState, setFormState] = useReducer(
    (
      prev: { email: string; password: string; check: boolean },
      next: { type: "email" | "pw" | "cookie"; value: string }
    ) => {
      if (next.type === "email") {
        return {
          ...prev,
          email: next.value,
        };
      }

      if (next.type === "pw") {
        return {
          ...prev,
          password: next.value,
        };
      }

      if (next.type === "cookie") {
        return {
          ...prev,
          check: !prev.check,
        };
      }

      return { ...prev };
    },
    { email: "", password: "", check: false }
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      type: "email",
      value: e.target.value,
    });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      type: "pw",
      value: e.target.value,
    });
  };

  const onSubmit: FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  const emailBgUrl =
    formState.email.length > 0 ? inputImg.face_wink_on : inputImg.face_wink_off;

  const pwBgUrl =
    formState.password.length > 0 ? inputImg.keyhole_on : inputImg.keyhole_off;

  return (
    <LoginFormBox>
      <LoginForm.Title />
      {/* TODO : Input Box 쪼개기 */}
      <LoginFormInputBoxDiv>
        <LoginForm.Email
          type="email"
          value={formState.email}
          onChange={onInputChange}
          placeholder="이메일"
          autoComplete="email"
          maxLength={authOptions.email.max}
          pattern={process.env.NEXT_PUBLIC_EMAIL_REG}
          required
          width="25rem"
          height="3rem"
          bgUrl={emailBgUrl}
          bgWidth="1rem"
          bgHeight="1rem"
        />
        <LoginForm.Password
          type="password"
          value={formState.password}
          onChange={onPasswordChange}
          placeholder="비밀번호"
          autoComplete="current-password"
          minLength={authOptions.password.min}
          maxLength={authOptions.password.max}
          // pattern={process.env.NEXT_PUBLIC_PASSWORD_REG}
          required
          width="25rem"
          height="3rem"
          bgUrl={pwBgUrl}
          bgWidth="1rem"
          bgHeight="1rem"
        />
        <LoginForm.CookieBtn
          check={formState.check}
          setFormState={setFormState}
        />
      </LoginFormInputBoxDiv>
      {/* TODO: Submit Box 쪼개기 */}
      <LoginSubmitBoxDiv>
        <LoginForm.Submit onSubmit={onSubmit} />
      </LoginSubmitBoxDiv>
    </LoginFormBox>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <LoginFormBox>{children}</LoginFormBox>;
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

interface CookieBtnProps {
  check: boolean;
  setFormState: React.Dispatch<{
    type: "email" | "pw" | "cookie";
    value: string;
  }>;
}

// TODO : Cookie API 연동 해야함
const CookieBtn = ({ check, setFormState }: CookieBtnProps) => {
  return (
    <LoginFormCookieButton
      type="button"
      check={check}
      onClick={() => {
        setFormState({
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

// TODO : Login API 연동 해야함
interface SubmitProps {
  onSubmit: FormEventHandler<HTMLButtonElement>;
}

const Submit = ({ onSubmit }: SubmitProps) => {
  return (
    <LoginFormSubmitButton type="submit" onSubmit={onSubmit}>
      로그인
    </LoginFormSubmitButton>
  );
};

const Guide = () => {
  return <LoginFormGuideDiv></LoginFormGuideDiv>;
};

LoginForm.Wrap = Wrap;
LoginForm.Title = Title;
LoginForm.Email = FocusBasedInput;
LoginForm.Password = FocusBasedInput;
LoginForm.CookieBtn = CookieBtn;
LoginForm.Submit = Submit;
LoginForm.Guide = Guide;

export default LoginForm;
