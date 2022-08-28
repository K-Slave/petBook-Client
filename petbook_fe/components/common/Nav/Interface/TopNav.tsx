import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import localConsole from "../../../../lib/localConsole";
import PageButton from "../Design/Desktop/PageButton";
import SearchButton from "../Design/Desktop/SearchButton";
import TopNavWrap from "../Design/Desktop/TopNavWrap";
import NavMenu from "../DOMStructure/NavMenu";

type Props = {
  path: string;
};

const TopNav = ({ path }: Props) => {
  const pages = ["", "community", "findhospital", "chat"];
  const pageNames = ["홈", "커뮤니티", "병원정보", "채팅"];
  const parsedPath = path.split("/");

  return (
    <NavMenu
      InputWrap={<TopNavWrap />}
      InputButton={<PageButton />}
      InputSearch={<SearchButton />}
      to={pages}
      name={pageNames}
      currentPath={parsedPath[1]}
    />
  );
};

export default TopNav;
