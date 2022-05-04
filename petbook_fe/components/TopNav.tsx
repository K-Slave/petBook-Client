import React, { useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

//
import { Box } from "../components/ui/Box";

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
  div.userInfo {
    display: flex;
    cursor: pointer;
    svg {
      width: 25px;
      height: 25px;
      margin-left: 8px;
    }
  }
`;

const TopNav = () => {
  const [isActive, setActive] = useState(false);

  function activeMenu() {
    isActive === true ? setActive(false) : setActive(true);
  }

  return (
    <div className="container">
      <TopNev>
        <Box boxType="list" active={isActive} />
        <div className="userInfo" onClick={activeMenu}>
          <h3>user님 안녕하세요!</h3>
          <FaUserCircle />
        </div>
      </TopNev>
    </div>
  );
};

export default TopNav;
