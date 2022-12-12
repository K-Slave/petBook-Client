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
  width: 400px;
  height: 60px;

  background-color: #ff6847;

  border-radius: 8px;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #f8f7f2;
`;

export { WriteSubmitSection, WriteSubmitButton };
