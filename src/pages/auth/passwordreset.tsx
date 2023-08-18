import styled from "styled-components";
import MyActivity from "@components/MyActivity";
import { Stack } from "@lib/utils/stackflowInit";
import "@stackflow/plugin-basic-ui/index.css";

const PasswordResetWrapMain = styled.main`
  padding-top: 110px;

  min-height: 100vh;
`;

const PasswordReset = () => {
  return (
    <PasswordResetWrapMain>
      <Stack />
      <MyActivity />
    </PasswordResetWrapMain>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default PasswordReset;
