import React from "react";
import HeaderWrap from "../Design/Desktop/Header/HeaderWrap";
import LogoButton from "../Design/Desktop/Header/LogoButton";
import PersonalMenu from "../Design/Desktop/Header/PersonalMenu";
import SimpleButton from "../Design/Desktop/Header/SimpleButton";
import NavMenu from "../DOMStructure/NavMenu";

type Props = {
  path: string;
};

const Header = ({ path }: Props) => {
  const pages = ["none", "none"];
  const pageNames = ["토끼", "햄스터"];
  const parsedPath = path.split("/");

  return (
    <NavMenu
      InputWrap={<HeaderWrap />}
      InputLeftSide={<LogoButton />}
      InputMenu={
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        />
      }
      InputButton={<SimpleButton />}
      InputRightSide={<PersonalMenu />}
      to={pages}
      name={pageNames}
      currentPath={parsedPath[1]}
    />
  );
};

export default React.memo(Header);
