import {
  registerFormState,
  CheckNicknameState,
  validationRegisterState,
} from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style
import { IconBox, InputBox } from "./styled/styledRegisterForm";

interface LoginProps {
  current: string;
  axiosValue: string;
  IconType: string;
}

interface buttonValue {
  axiosValue: string;
}

/**
 *
 * @param param0 인증 / 중복확인 버튼
 * @returns
 */
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
const RegisterInput = ({ current, axiosValue, IconType }: LoginProps) => {
  const registerForm = useSetRecoilState(registerFormState); // form 저장
  // form 버튼상태 저장 (이메일) => 유효성 들어가면서 삭제해야함
  const validationRegister = useSetRecoilState(validationRegisterState);

  const [valueCheck, setValueCheck] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    registerForm((user) => ({
      ...user,
      [`${axiosValue}`]: e.target.value,
    }));

    let checkVal = e.target.value;

    if (checkVal === "") {
      setValueCheck(false);
    } else if (axiosValue !== "nickname") {
      setValueCheck(true);
    }
  };

  useEffect(() => {
    validationRegister((val) => ({
      ...val,
      [`${axiosValue}`]: valueCheck,
    }));
  }, [valueCheck]);

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
            onChange={onChange}
          />
        </label>
        {axiosValue === "nickname" && (
          <RegisterNicnameCheckButton axiosValue={axiosValue} />
        )}
      </InputBox>
    </article>
  );
};

export default RegisterInput;
