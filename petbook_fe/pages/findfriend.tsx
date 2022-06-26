import type { NextPage } from "next";
import { Box } from "../components/common/Box";
import HtmlHeader from "../components/common/HtmlHeader";
import Keyvisual from "../components/Keyvisual";
import MapComponent from "../components/common/MapComponent";
import FriendProfileCard from "../components/common/CardUI/ProfileCard";
import TopNav from "../components/TopNav";
import styled from "styled-components";
import FriendCardContainer from "../containers/card/FriendCardContainer";

const FriendProfileList = styled(Box)`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 15rem;
`;

const FindHome: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      {/* 상단영역 */}
      <TopNav />
      <Keyvisual />
      {/* 본문영역 */}
      <FriendCardContainer />
      <MapComponent />
    </>
  );
};

export default FindHome;
