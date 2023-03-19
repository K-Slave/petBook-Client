import { useState } from "react";
import styled from "styled-components";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import MyPageSection from "../../components/MyPageSection";
import SideNav from "../../components/MyPageNav";
import Keyvisual from "../../components/Keyvisual";

const MyPageMain = styled.main`
  position: relative;
  display: flex;
  width: 90vw;
  max-width: 1000px;
  margin: 2rem auto 0;
  padding-bottom: 2rem;
  stroke-width: 1px;
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
  const temp222 = "";

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
      <Keyvisual />
      <MyPageMain>
        {showNav ? (
          <HiChevronDoubleLeft
            className="MyPage__navIcon"
            onClick={handleCloseNav}
          />
        ) : (
          <HiChevronDoubleRight
            className="MyPage__navIcon"
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
