import React, { useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

//
import { Box } from "./common/Box";

const TopNev = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 20px 0 10px;
  justify-content: right;
  color: #3a575c;
`;

const TopNav = () => {
  const [isActive, setActive] = useState(false);

  function activeMenu() {
    isActive === true ? setActive(false) : setActive(true);
  }

  return (
    <div>
      <TopNev>
        <div className="inner_container">
          <div className="logo_box">
            <div className="main_logo"></div>
          </div>
        </div>
      </TopNev>
    </div>
  );
};

export default TopNav;
