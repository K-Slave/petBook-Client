import styled from "styled-components";

const ButtonBox = styled.div`
  margin-top: 42px;
`;
const Container = styled.div`
  padding: 41px 35px;
  margin-top: 32px;
  border-radius: 20px;
  box-sizing: border-box;
  color: white;
  background-color: var(--main);
  cursor: pointer;
  p {
    opacity: 0.7;
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 400;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export { ButtonBox, Container };
