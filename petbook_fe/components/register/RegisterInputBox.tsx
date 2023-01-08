import {
  registerFormState,
  CheckNicknameState,
} from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useResource, { useSetResource } from "@lib/hooks/common/useResource";

import {
  REGISTER_CHECK_EMAIL,
  REGISTER_CHECK_NICKNAME,
} from "@components/register/RegisterForm";

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

  const registerForm = useRecoilValue(registerFormState);

  const { data, isSuccess, isError, error, mutate } =
    useSetResource(REGISTER_CHECK_EMAIL);

  const onClick = () => {
    if (axiosValue === "email") {
      mutate({ userId: registerForm.email });
    }
  };

  return (
    <button type="button" onClick={onClick} className="emphasis">
      {buttonName}
    </button>
  );
};
/**
 *
 * @param param0 인증 / 중복확인 버튼
 * @returns
 */
const RegisterNicnameCheckButton = ({ axiosValue }: buttonValue) => {
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
  const checkNicknameFrom = useSetRecoilState(CheckNicknameState);
  const registerForm = useRecoilValue(registerFormState);
  // const modalValue = useRecoilValue(CheckNicknameState);
  // const { data } = useResource({
  //   key: `REGISTER_CHECK_EMAIL`,
  //   fetcher: () =>
  //     REGISTER_CHECK_NICKNAME.fetcher({
  //       nickname: modalValue.nickname,
  //     }),
  // });
  const onClick = () => {
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
/**
 *
 * @param param0 input box 설정 영역입니다
 * @returns
 */
const RegisterInput = ({ current, axiosValue, IconType }: LoginProps) => {
  const setLoginForm = useSetRecoilState(registerFormState);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginForm((user) => ({
      ...user,
      [`${axiosValue}`]: e.target.value,
    }));
  };

  return (
    <article>
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
        {axiosValue === "nickname" ? (
          <RegisterNicnameCheckButton axiosValue={axiosValue} />
        ) : (
          <RegisterModalButton axiosValue={axiosValue} />
        )}
      </InputBox>
    </article>
  );
};
export default RegisterInput;
