import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

import { REGISTER_CHECK_EMAIL } from "@components/register/RegisterForm";
import useSelectorState from "@lib/hooks/common/useSelectorState";
import { registerFormState } from "@atoms/pageAtoms/login/userState";
import { useSetResource } from "@lib/hooks/common/useResource";
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
  const [code, setCode] = useState("");
  const { data, mutate, status } = useSetResource(REGISTER_CHECK_EMAIL);

  // input change
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterForm((el) => ({ ...el, email: e.target.value }));
  };
  const onChangeCode: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCode(e.target.value);
  };

  // api
  const onCertification: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    mutate({ email: registerForm.email });
  };
  const onCertificationConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log(code);
  };

  // data
  useEffect(() => {
    if (status === "success") {
      alert("이메일을 확인해주세요"); // toast
    }
  }, [data]);

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
          placeholder="인증번호 4자리"
          onChange={onChangeCode}
        />
        <button type="submit" onClick={onCertificationConfirm}>
          코드확인
        </button>
      </InputBox>
      <RegisterInfoText state={success}>
        <p>{passInfoMsg}</p>
      </RegisterInfoText>
    </>
  );
};
export default RegisterEmail;
