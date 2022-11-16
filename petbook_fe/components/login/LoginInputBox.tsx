import { loginFormState } from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";

interface LoginProps {
  current: string;
  axiosValue: string;
  submitType: string;
}

const LoginInput = ({ current, axiosValue, submitType }: LoginProps) => {
  const setLoginForm = useSetRecoilState(loginFormState);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginForm((user) => ({
      ...user,
      [`${axiosValue}`]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="box">
        <label htmlFor={`${current}`}>{current}</label>
        <input
          type={`${axiosValue}`}
          id={`${current}`}
          placeholder={`${current}를 입력해주세요 `}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default LoginInput;
