import { registerFormState } from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  InputWrap,
  IconBox,
  InputBox,
  RegisterInfoText,
} from "./styled/styledRegisterForm";

interface LoginProps {
  current: string;
  axiosValue: string;
  IconType: string;
  registerInfoText: string;
}

interface InfoProps {
  type: string;
}

interface buttonValue {
  axiosValue: string;
}

/**
 *
 * @param param0 props 인증 메세지
 * @returns
 */
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

/**
 *
 * @param param0 인증 / 중복확인 버튼
 * @returns
 */
const RegisterModalButton = ({ axiosValue }: buttonValue) => {
  let buttonName = "";
  switch (axiosValue) {
    case "email": {
      buttonName = "인증하기";
      break;
    }
    case "password": {
      buttonName = "";
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

  const modalValue = useRecoilValue(registerFormState);

  const onClick = () => {
    console.log(axiosValue, modalValue, "상태값 확인");
  };

  return (
    <button type="button" onClick={onClick} className="emphasis">
      {buttonName}
    </button>
  );
};

/**
 *
 * @param param0 input box 설정 영역입니다
 * @returns
 */
const RegisterInput = ({
  current,
  axiosValue,
  IconType,
  registerInfoText,
}: LoginProps) => {
  const setLoginForm = useSetRecoilState(registerFormState);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginForm((user) => ({
      ...user,
      [`${axiosValue}`]: e.target.value,
    }));
  };

  return (
    <InputWrap>
      {/* 인증관련 */}
      <InputBox>
        <IconBox>
          <div className={`${IconType}`} />
        </IconBox>
        <label htmlFor={`${current}`}>
          <input
            type={`${axiosValue}`}
            id={`${axiosValue}`}
            placeholder={`${current} `}
            onChange={onChange}
          />
        </label>
        <RegisterModalButton axiosValue={axiosValue} />
      </InputBox>

      {/* 확인관련 */}
      <InputBox>
        <IconBox>
          <div className={`${IconType}`} />
        </IconBox>
        <label htmlFor={`${current}`}>
          <input
            type="text"
            id={`${axiosValue}`}
            placeholder={`${registerInfoText}`}
            onChange={onChange}
          />
        </label>
        <RegisterInputInfo type={`${axiosValue}`} />
      </InputBox>
    </InputWrap>
  );
};
export default RegisterInput;
