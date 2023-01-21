import { useEffect, useState } from "react";
import RegisterInputBox from "@components/register/RegisterInputBox";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSetResource } from "@lib/hooks/common/useResource";
import { REGISTER_CHECK_NICKNAME } from "@components/register/RegisterForm";
import { UserCheckNickname } from "@lib/API/petBookAPI/types/userRequest";
import {
  CheckNicknameState,
  registerFormState,
  validationRegisterState,
} from "@atoms/pageAtoms/login/userState";
import { RegisterInfoText } from "./styled/styledRegisterForm";

const RegisterNameForm = () => {
  const [nickNameState, setNicknameState] = useState<{
    active: boolean;
    infoText: string;
  }>({
    active: false,
    infoText: "",
  });

  const checkNickname = useRecoilValue(CheckNicknameState);
  const registerForm = useRecoilValue(registerFormState);
  const validationRegister = useSetRecoilState(validationRegisterState);

  const { data, mutate } = useSetResource(REGISTER_CHECK_NICKNAME);

  // FIX 전체코드 검사.. 수정 필요 test 중
  useEffect(() => {
    SetButton(false);
  }, [registerForm]);

  // 닉네임 체크 버튼 누른경우 감지 api 호출 > 검사
  useEffect(() => {
    console.log("검사 test");
    if (checkNickname.nickname !== "") {
      mutate(checkNickname);
    }
  }, [checkNickname]);

  // 상태로 받은 data 성공여부 전달 > 유효성 텍스트 출력
  useEffect(() => {
    const nicknameData = data?.data as UserCheckNickname;

    if (nicknameData?.nicknameExist) {
      SetButton(false);
    } else {
      SetButton(true);
    }
  }, [data]);

  // UI 핸들링..
  const SetButton = (value: boolean) => {
    console.log(value);
    validationRegister((val) => ({
      ...val,
      nickname: value,
    }));
    setNicknameState({
      active: value,
      infoText: value === true ? "사용 가능한 닉네임 입니다." : "",
    });
  };

  return (
    <>
      <RegisterInputBox
        IconType="Name"
        axiosValue="name"
        current="가입자 이름을 입력해주세요."
      />
      <RegisterInputBox
        IconType="Nicname"
        axiosValue="nickname"
        current="닉네임을 입력해주세요."
      />
      <RegisterInfoText state={nickNameState.active}>
        <p>{nickNameState.infoText}</p>
      </RegisterInfoText>
    </>
  );
};

export default RegisterNameForm;
