import { useState } from "react";
import MyPageSection from "../components/MyPageSection";
import SideNav from "../components/MyPageNav";
import styled from "styled-components";
import Keyvisual from "../components/Keyvisual";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";

const MyPageMain = styled.main`
  position: relative;
  display: flex;
  width: 90vw;
  max-width: 1000px;
  margin: 2rem auto 0;
  padding-bottom: 2rem;
  .MyPage__navIcon {
    display: none;
    font-size: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    .MyPage__navIcon {
      display: block;
    }
  }
`;

const MyPage = () => {
  const [current, setCurrent] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(true);
  };
  const handleCloseNav = () => {
    setShowNav(false);
  };
  return (
    <>
      {/* <HtmlHeader /> */}
      {/* <TopNav /> */}
      <Keyvisual />
      <MyPageMain>
        {showNav ? (
          <HiChevronDoubleLeft
            className='MyPage__navIcon'
            onClick={handleCloseNav}
          />
        ) : (
          <HiChevronDoubleRight
            className='MyPage__navIcon'
            onClick={handleShowNav}
          />
        )}
        <SideNav
          setCurrent={setCurrent}
          current={current}
          showNav={showNav}
          handleCloseNav={handleCloseNav}
        />
        <MyPageSection current={current} />
      </MyPageMain>
    </>
  );
};

export default MyPage;
