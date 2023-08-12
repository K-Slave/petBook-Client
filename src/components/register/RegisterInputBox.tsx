import React, { FunctionComponent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  registerFormState,
  CheckNicknameState,
} from "@atoms/pageAtoms/login/userState";
import { useSetResource } from "@lib/hooks/common/useResource";
import { IconBox, InputBox } from "./styled/styledRegisterForm";

interface RegisterProps {
  current: string;
  axiosValue: string;
  IconType: string;
  onKeyPress: (e: any) => void;
}

const RegisterInput: FunctionComponent<RegisterProps> = ({
  current,
  axiosValue,
  IconType,
  onKeyPress,
}) => {
  return (
    <article>
      <InputBox>
        <IconBox>
          <div className={`${IconType}`} />
        </IconBox>
        <label htmlFor={`${current}`}>
          <input
            type={`${
              axiosValue === "password_check" ? "password" : axiosValue
            }`}
            id={`${axiosValue} `}
            placeholder={`${current}`}
            onKeyUp={onKeyPress}
          />
        </label>
        {axiosValue === "nickname" && (
          <RegisterNicnameCheckButton axiosValue={axiosValue} />
        )}
      </InputBox>
    </article>
  );
};

interface buttonValue {
  axiosValue: string;
}
const RegisterNicnameCheckButton = ({ axiosValue }: buttonValue) => {
  const checkNicknameFrom = useSetRecoilState(CheckNicknameState);
  const registerForm = useRecoilValue(registerFormState);

  let buttonName = "";
  switch (axiosValue) {
    case "email": {
      buttonName = "인증하기";
      break;
    }
    case "nickname": {
      buttonName = "중복확인";
      break;
    }
    default: {
      buttonName = "";
      break;
    }
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (registerForm.nickname === "") {
      alert("닉네임을 입력해주세요");
      return;
    }
    if (registerForm.nickname.length < 3) {
      alert("닉네임은 세글자 이상 입력해주세요");
      return;
    }
    checkNicknameFrom(() => ({
      nickname: registerForm.nickname,
    }));
  };

  return (
    <button type="button" onClick={onClick} className="emphasis">
      {buttonName}
    </button>
  );
};
export default RegisterInput;
