import React, { ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import { loginFormState } from "@atoms/pageAtoms/login/userState";
import { IconBox, InputBox } from "./style";

interface LoginProps {
  current: string;
  axiosValue: string;
  IconType: string;
}

const LoginInput = ({ current, axiosValue, IconType }: LoginProps) => {
  const setLoginForm = useSetRecoilState(loginFormState);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginForm((user) => ({
      ...user,
      [`${axiosValue}`]: e.target.value,
    }));
  };

  return (
    <div>
      <InputBox>
        <IconBox>
          <div className={`${IconType}`} />
        </IconBox>
        <label htmlFor={`${current}`}>
          <input
            type={`${axiosValue}`}
            id={`${current}`}
            placeholder={`${current} `}
            onChange={onChange}
          />
        </label>
      </InputBox>
    </div>
  );
};
export default LoginInput;
