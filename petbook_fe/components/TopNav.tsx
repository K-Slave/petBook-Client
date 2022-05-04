import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

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
    <div className="container">
      <TopNev>
        <h3>user님 안녕하세요!</h3>
        <FaUserCircle />
      </TopNev>
    </div>
  );
};

export default TopNav;
