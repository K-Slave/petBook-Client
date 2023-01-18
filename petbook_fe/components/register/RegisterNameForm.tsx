import { useEffect, useState } from "react";
import RegisterInputBox from "@components/register/RegisterInputBox";
import { useRecoilValue } from "recoil";
import { useSetResource } from "@lib/hooks/common/useResource";
import { REGISTER_CHECK_NICKNAME } from "@components/register/RegisterForm";
import { UserCheckNickname } from "@lib/API/petBookAPI/types/userRequest";
import { CheckNicknameState } from "@atoms/pageAtoms/login/userState";
import { RegisterInfoText } from "./styled/styledRegisterForm";

const PasswordInput = () => {
  const [success, setSuccess] = useState(false);
  const [nicknameInfo, setNicknameInfo] = useState("");
  const checkNickname = useRecoilValue(CheckNicknameState);

  const { data, mutate } = useSetResource(REGISTER_CHECK_NICKNAME);

  useEffect(() => {
    if (checkNickname.nickname !== "") {
      mutate(checkNickname);
    }
  }, [checkNickname]);

  useEffect(() => {
    const nicknameData = data?.data as UserCheckNickname;

    if (nicknameData) {
      if (nicknameData?.nicknameExist) {
        setSuccess(false);
        setNicknameInfo("");
      } else {
        setSuccess(true);
        setNicknameInfo("사용 가능한 닉네임 입니다");
      }
    }
  }, [data]);

  return (
    <>
      <RegisterInputBox IconType="Name" axiosValue="name" current="이름" />
      <RegisterInputBox
        IconType="Nicname"
        axiosValue="nickname"
        current="닉네임"
      />
      <RegisterInfoText state={success}>
        <p>{nicknameInfo}</p>
      </RegisterInfoText>
    </>
  );
};

export default PasswordInput;
