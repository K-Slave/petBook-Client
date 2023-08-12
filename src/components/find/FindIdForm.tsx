import Image from "next/image";
import FindInputBox from "./FindInputBox"; // components
import { ButtonWrap, TitleWrap, Container } from "./style/styledFindSubmit"; // style

export const FindFormWrap = () => {
  return (
    <Container>
      <TitleWrap>
        <Image
          src="/img/common/logo/logo.svg"
          alt="Picture of the author"
          width={160}
          height={27}
        />
        <p>이메일 아이디 찾기</p>
      </TitleWrap>
    </Container>
  );
};

export const FindIdInputBox = () => {
  return (
    <div>
      <FindInputBox IconType="Login" axiosValue="email" current="이메일" />
      <FindInputBox IconType="Nicname" axiosValue="nickname" current="닉네임" />
    </div>
  );
};

export const FindIdButton = () => {
  return (
    <ButtonWrap>
      <button type="button" className="Primary">
        다음
      </button>
    </ButtonWrap>
  );
};

export const FindIdForm = () => {
  return (
    <div>
      <FindIdForm.FindFormWrap />
      <FindIdForm.FindIdInputBox />
      <FindIdForm.FindIdButton />
    </div>
  );
};

FindIdForm.FindFormWrap = FindFormWrap;
FindIdForm.FindIdInputBox = FindIdInputBox;
FindIdForm.FindIdButton = FindIdButton;

export default FindIdForm;
