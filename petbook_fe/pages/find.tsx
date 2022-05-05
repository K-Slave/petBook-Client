import type { NextPage } from "next";
import HtmlHeader from "../components/common/HtmlHeader";
import Keyvisual from "../components/Keyvisual";
import TopNav from "../components/TopNav";

const FindHome: NextPage = () => {
  return (
    <div>
      <HtmlHeader />
      {/* 상단영역 */}

      <TopNav />
      <Keyvisual />

      {/* 본문영역 */}
    </div>
  );
};

export default FindHome;
