import styled from "styled-components";
import RegisterFrom from "@components/register/RegisterFrom";

const Container = styled.main`
  overflow: auto;
  height: calc(100vh - 61px);
  background-color: var(--bg);
`;

const Register = () => {
  return (
    <Container>
      <RegisterFrom />
    </Container>
  );
};
export default Register;
