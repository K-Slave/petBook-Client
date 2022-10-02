import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  padding: 41px 35px;
  border-radius: 20px;
  box-sizing: border-box;
  color: white;
  background-color: var(--main);
  margin-top: 32px;
  cursor: pointer;
  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 6px;
    opacity: 0.7;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const InduceSign = () => {
  const router = useRouter();
  return (
    <>
      <Container onClick={() => router.push("/login/register")}>
        <p>아직 Petbook 계정이 없으신가요?</p>
        <h3>
          회원가입을 통해 Petbook 유저들과 <br /> 소통할 수 있어요!
        </h3>
      </Container>
    </>
  );
};
export default InduceSign;
