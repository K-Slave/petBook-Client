import React from "react";
import PageButton from "../Design/Desktop/TopNav/PageButton";
import SearchButton from "../Design/Desktop/TopNav/SearchButton";
import TopNavWrap from "../Design/Desktop/TopNav/TopNavWrap";
import NavMenu from "../DOMStructure/NavMenu";

type Props = {
  path: string;
};

const TopNav = ({ path }: Props) => {
  const pages = ["", "community", "findHospital", "chat"];
  const pageNames = ["홈", "커뮤니티", "병원정보", "채팅"];
  const parsedPath = path.split("/");

  const rightSidePages = "search";
  const rightSidePageNames = "";
  const rightSideParsedPath = path.split("/");

  return (
    <NavMenu
      InputWrap={<TopNavWrap />}
      InputMenu={<div style={{ display: "flex", height: "100%" }} />}
      InputButton={<PageButton />}
      InputRightSide={<SearchButton />}
      to={pages}
      name={pageNames}
      currentPath={parsedPath[1]}
      rightSideTo={rightSidePages}
      rightSideName={rightSidePageNames}
      rightSideCurrentPath={rightSideParsedPath[1]}
    />
  );
};

export default React.memo(TopNav);
