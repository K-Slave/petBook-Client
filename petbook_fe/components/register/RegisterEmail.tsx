import React, { ChangeEventHandler } from "react";
import useSelectorState from "@lib/hooks/common/useSelectorState";
import { registerFormState } from "@atoms/pageAtoms/login/userState";

import { IconBox, InputBox } from "./styled/styledRegisterForm";

const RegisterEmail = () => {
  const [registerForm, setRegisterForm] = useSelectorState(registerFormState, {
    email: "",
  });
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterForm((el) => ({ ...el, email: e.target.value }));
  };
  return (
    <InputBox>
      <IconBox>
        <div className="Login" />
      </IconBox>
      <input
        type="email"
        placeholder="이메일을 입력해주세요"
        onChange={onChange}
      />
    </InputBox>
  );
};
export default RegisterEmail;
