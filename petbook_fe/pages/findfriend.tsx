import type { NextPage } from "next";
import { Box } from "../components/common/Box";
import HtmlHeader from "../components/common/HtmlHeader";
import Keyvisual from "../components/Keyvisual";
import MapComponent from "../components/common/MapComponent";
import FriendProfileCard from "../components/common/FriendProfileCard";
import TopNav from "../components/TopNav";

const FindHome: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      {/* 상단영역 */}
      <TopNav />
      <Keyvisual />
      {/* 본문영역 */}
      <Box
        boxType='content'
        active={true}
        content={
          <>
            <FriendProfileCard />
            <MapComponent />
          </>
        }
      />
    </>
  );
};

export default FindHome;
