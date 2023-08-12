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
        <p>비밀번호 찾기</p>
      </TitleWrap>
    </Container>
  );
};

export const FindPassInputBox = () => {
  return (
    <div>
      <FindInputBox IconType="Name" axiosValue="name" current="이름" />
      <FindInputBox IconType="Login" axiosValue="email" current="이메일" />
      <FindInputBox IconType="Nicname" axiosValue="nickname" current="닉네임" />
    </div>
  );
};

export const FindPassButton = () => {
  return (
    <ButtonWrap>
      <button type="button" className="Primary">
        다음
      </button>
    </ButtonWrap>
  );
};

export const FindPassForm = () => {
  return (
    <div>
      <FindPassForm.FindFormWrap />
      <FindPassForm.FindPassInputBox />
      <FindPassForm.FindPassButton />
    </div>
  );
};

FindPassForm.FindFormWrap = FindFormWrap;
FindPassForm.FindPassInputBox = FindPassInputBox;
FindPassForm.FindPassButton = FindPassButton;

export default FindPassForm;
