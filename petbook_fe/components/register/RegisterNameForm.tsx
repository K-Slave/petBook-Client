import { ChangeEventHandler, useEffect, useState } from "react";
import { useSetResource } from "@lib/hooks/common/useResource";
import { REGISTER_CHECK_NICKNAME } from "@components/register/RegisterForm";
import { UserCheckNickname } from "@lib/API/petBookAPI/types/userRequest";
import { registerFormState } from "@atoms/pageAtoms/login/userState";
import useSelectorState from "@lib/hooks/common/useSelectorState";

import {
  IconBox,
  InputBox,
  RegisterInfoText,
  SpaceTopWrap,
} from "./styled/styledRegisterForm";

const RegisterNameForm = () => {
  return (
    <SpaceTopWrap>
      <RegisterNameForm.RegisterSetName />
      <RegisterNameForm.RegisterSetNickname />
    </SpaceTopWrap>
  );
};

interface nicknameState {
  active: boolean;
  infoText: string;
}

const RegisterSetName = () => {
  const [registerForm, setRegisterForm] = useSelectorState(registerFormState, {
    name: "",
  });
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterForm((el) => ({ ...el, name: e.target.value }));
  };
  return (
    <InputBox>
      <IconBox>
        <div className="Name" />
      </IconBox>
      <input
        type="name"
        value={registerForm.name}
        placeholder="가입자 이름을 입력해주세요."
        onChange={onChange}
      />
    </InputBox>
  );
};

const RegisterSetNickname = () => {
  const [nickNameState, setNicknameState] = useState<nicknameState>({
    active: false,
    infoText: "",
  });
  const [registerForm, setRegisterForm] = useSelectorState(registerFormState, {
    nickname: "",
  });
  const { data, mutate } = useSetResource(REGISTER_CHECK_NICKNAME);

  const SetButton = (value: boolean) => {
    setNicknameState({
      active: value,
      infoText: value === true ? "사용 가능한 닉네임 입니다." : "",
    });
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    SetButton(false);
    setRegisterForm((el) => ({
      ...el,
      nickname: e.target.value,
    }));
  };

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
    mutate({ nickname: registerForm.nickname });
  };

  useEffect(() => {
    const nicknameData = data?.data as UserCheckNickname; // 호출
    if (nicknameData?.nicknameExist || nicknameData === undefined) {
      SetButton(false);
    } else {
      SetButton(true);
    }
  }, [data]);

  return (
    <>
      <InputBox>
        <IconBox>
          <div className="Nicname" />
        </IconBox>
        <input
          type="nickname"
          value={registerForm.nickname}
          placeholder="닉네임을 입력해주세요."
          onChange={onChange}
        />
        <button type="button" onClick={onClick} className="emphasis">
          중복확인
        </button>
      </InputBox>
      <RegisterInfoText state={nickNameState.active}>
        <p>{nickNameState.infoText}</p>
      </RegisterInfoText>
    </>
  );
};
RegisterNameForm.RegisterSetName = RegisterSetName;
RegisterNameForm.RegisterSetNickname = RegisterSetNickname;

export default RegisterNameForm;
