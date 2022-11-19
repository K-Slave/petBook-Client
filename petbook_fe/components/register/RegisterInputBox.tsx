import { registerFormState } from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import { IconBox, InputBox } from "./styled/styledRegisterForm";

interface LoginProps {
  current: string;
  axiosValue: string;
  IconType: string;
}

const RegisterInput = ({ current, axiosValue, IconType }: LoginProps) => {
  const setLoginForm = useSetRecoilState(registerFormState);
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
            placeholder={`${current}를 입력해주세요 `}
            onChange={onChange}
          />
        </label>
        {axiosValue === "nickname" ? (
          <button type="button" className="emphasis">
            중복하기
          </button>
        ) : (
          <></>
        )}
      </InputBox>
    </div>
  );
};
export default RegisterInput;
