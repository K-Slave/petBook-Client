import { Button } from "@components/common/Button/Button";
import styled from "styled-components";

const WriteSubmitSection = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: 40px;
  margin-bottom: 40px;
`;

const WriteSubmitButton = styled(Button)`
  width: 320px;
  height: 64px;

  background-color: #ff6e4e;

  border-radius: 8px;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  color: #fff;
`;

export { WriteSubmitSection, WriteSubmitButton };
