import { registerFormState } from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import {
  IconBox,
  InputBox,
  RegisterInfoText,
} from "./styled/styledRegisterForm";

interface LoginProps {
  current: string;
  axiosValue: string;
  IconType: string;
}

interface InfoProps {
  type: string;
}
const RegisterInputInfo = ({ type }: InfoProps) => {
  let infoText = "";
  switch (type) {
    case "email": {
      infoText = "인증이 완료되었습니다.";
      break;
    }
    case "nickname": {
      infoText = "사용 가능한 닉네임 입니다";
      break;
    }
    case "password": {
      infoText = "비밀번호가 일치합니다";
      break;
    }
    default: {
      infoText = "안내문구가 출력됩니다";
    }
  }
  return <RegisterInfoText>{infoText}</RegisterInfoText>;
};

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
        <RegisterInputInfo type={`${axiosValue}`} />
        {axiosValue === "nickname" ? (
          <button type="button" className="emphasis">
            중복확인
          </button>
        ) : (
          <></>
        )}
      </InputBox>
    </div>
  );
};
export default RegisterInput;
