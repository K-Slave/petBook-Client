import React, { PropsWithChildren, useReducer } from "react";
import { LoginFormBox } from "./LoginForm.style";
import FocusBasedInput from "../common/Input/FocusBasedInput";
import inputImg from "@/image/inputImg";
import authOptions from "@lib/globalConst/authOptions";

const LoginForm = () => {
  const [formState, setFormState] = useReducer(
    (
      prev: { email: string; password: string },
      next: { type: "email" | "pw"; value: string }
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

      return { ...prev };
    },
    { email: "", password: "" }
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

  const emailBgUrl =
    formState.email.length > 0 ? inputImg.face_wink_on : inputImg.face_wink_off;

  const pwBgUrl =
    formState.password.length > 0 ? inputImg.keyhole_on : inputImg.keyhole_off;

  return (
    <LoginFormBox>
      <LoginForm.Email
        value={formState.email}
        onChange={onInputChange}
        type="email"
        maxLength={authOptions.email.max}
        placeholder="이메일"
        pattern={process.env.NEXT_PUBLIC_EMAIL_REG}
        required
        bgUrl={emailBgUrl}
        bgWidth="1rem"
        bgHeight="1rem"
      />
      <LoginForm.Password
        type="password"
        autoComplete="current-password"
        value={formState.password}
        onChange={onPasswordChange}
        minLength={authOptions.password.min}
        maxLength={authOptions.password.max}
        pattern={process.env.NEXT_PUBLIC_PASSWORD_REG}
        required
        bgUrl={pwBgUrl}
        bgWidth="1rem"
        bgHeight="1rem"
      />
    </LoginFormBox>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <LoginFormBox>{children}</LoginFormBox>;
};

LoginForm.Wrap = Wrap;
LoginForm.Email = FocusBasedInput;
LoginForm.Password = FocusBasedInput;

export default LoginForm;
