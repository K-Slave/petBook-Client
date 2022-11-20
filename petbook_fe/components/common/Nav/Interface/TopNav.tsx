import React from "react";
import PageButton from "../Design/Desktop/TopNav/PageButton";
import SearchButton from "../Design/Desktop/TopNav/SearchButton";
import TopNavWrap from "../Design/Desktop/TopNav/TopNavWrap";
import NavMenu from "../DOMStructure/NavMenu";

type Props = {
  path: string;
};

const TopNav = ({ path }: Props) => {
  const topNavObj = {
    pages: ["/", "/community", "/findHospital", "/chat"],
    pageNames: ["홈", "커뮤니티", "병원정보", "채팅"],
    rightSidePages: "/search",
    rightSidePageNames: "",
  };

  return (
    <NavMenu
      InputWrap={<TopNavWrap />}
      InputMenu={<div style={{ display: "flex", height: "100%" }} />}
      InputButton={<PageButton />}
      InputRightSide={<SearchButton />}
      to={topNavObj.pages}
      name={topNavObj.pageNames}
      currentPath={path}
      rightSideTo={topNavObj.rightSidePages}
      rightSideName={topNavObj.rightSidePageNames}
      rightSideCurrentPath={path}
    />
  );
};

export default React.memo(TopNav);
