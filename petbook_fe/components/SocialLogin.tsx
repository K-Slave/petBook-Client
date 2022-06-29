import styled from "styled-components";

const BACKEND_BASE_URL = "https://shrouded-falls-39042.herokuapp.com";

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 55px;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const SocialLogin = () => {
  return (
    <ButtonBox>
      <a href={`${BACKEND_BASE_URL}/kakao/login`}>
        <Icon src="./img/kakao-icon.png" alt="kakao icon" />
      </a>
      <a href={`${BACKEND_BASE_URL}/naver/login`}>
        <Icon src="./img/naver-icon.png" alt="naver icon" />
      </a>
      <a href={`${BACKEND_BASE_URL}/google/login`}>
        <Icon src="./img/google-icon.png" alt="google icon" />
      </a>
    </ButtonBox>
  );
};

export default SocialLogin;
