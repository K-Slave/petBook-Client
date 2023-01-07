import { useEffect, useState } from "react";
import RegisterInputBox from "@components/register/RegisterInputBox";
import { useRecoilValue } from "recoil";
import useResource from "@lib/hooks/common/useResource";
import { REGISTER_CHECK_NICKNAME } from "@components/register/RegisterForm";

import { CheckNicknameState } from "@atoms/pageAtoms/login/userState";
import { RegisterInfoText } from "./styled/styledRegisterForm";

const PasswordInput = () => {
  const [success, setSuccess] = useState(false);
  const modalValue = useRecoilValue(CheckNicknameState);
  const cc = () => {
    const { dd }: any = useResource({
      key: `REGISTER_CHECK_EMAIL`,
      fetcher: () =>
        REGISTER_CHECK_NICKNAME.fetcher({
          nickname: modalValue.nickname,
        }),
    });
    return dd;
  };
  useEffect(() => {
    console.log(cc);
  }, [modalValue]);

  return (
    <>
      <RegisterInputBox IconType="Name" axiosValue="name" current="이름" />
      <RegisterInputBox
        IconType="Nicname"
        axiosValue="nickname"
        current="닉네임"
      />
      <RegisterInfoText state={success}>
        <p>사용 가능한 닉네임 입니다</p>
      </RegisterInfoText>
    </>
  );
};

export default PasswordInput;
