import styled from "styled-components";

import { LoginIndex } from "@components/login/LoginIndex";
import { Modal } from "@components/common/Modal/Modal";
import { useState } from "react";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 61px);
  overflow: auto;
  background-color: var(--bg);
  h1 {
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: normal;
  }
`;

const Login = () => {
  // 공통으로 만들어야함
  // const [modal, setModal] = useState(false);

  // const handleCloseModal = () => {
  //   setModal(false);
  // };

  return (
    <Main>
      {/* <Modal state={modal} handleCloseModal={handleCloseModal} /> */}
      <LoginIndex />
    </Main>
  );
};

export default Login;
