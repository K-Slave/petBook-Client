import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import useSelectorState from "@lib/hooks/common/useSelectorState";
import { registerFormState } from "@atoms/pageAtoms/login/userState";

import {
  IconBox,
  InputBox,
  RegisterInfoText,
} from "./styled/styledRegisterForm";

const RegisterEmail = () => {
  const [success, setSuccess] = useState(false);
  const [passInfoMsg, setPassInfoMsg] = useState("");
  const [registerForm, setRegisterForm] = useSelectorState(registerFormState, {
    email: "",
  });
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterForm((el) => ({ ...el, email: e.target.value }));
  };
  const onCertification: MouseEventHandler<HTMLButtonElement> = (e) => {
    alert("인증절차진행중");
  };
  return (
    <>
      <InputBox>
        <IconBox>
          <div className="Login" />
        </IconBox>
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={onChange}
        />
        <button type="submit" onClick={onCertification}>
          인증하기
        </button>
      </InputBox>
      <InputBox>
        <IconBox>
          <div className="Login_Passcode_Disabled" />
        </IconBox>
        <input
          autoComplete="one-time-code"
          type="number"
          placeholder="인증번호 4자리"
          onChange={onChange}
        />
      </InputBox>
      <RegisterInfoText state={success}>
        <p>{passInfoMsg}</p>
      </RegisterInfoText>
    </>
  );
};
export default RegisterEmail;
