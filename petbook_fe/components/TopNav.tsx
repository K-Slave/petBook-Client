import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const Container = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const TopNev = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: right;
  color: white;
  display: flex;
  svg {
    width: 25px;
    height: 25px;
    margin-left: 8px;
  }
`;

const TopNav = () => {
  return (
    <Container>
      <TopNev>
        <h3>user님 안녕하세요!</h3>
        <FaUserCircle />
      </TopNev>
    </Container>
  );
};

export default TopNav;
