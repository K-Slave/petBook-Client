import React, { PropsWithChildren, useEffect, useState } from "react";
import { MenuItemLink, MenuListDiv, MenuListNav } from "./Menu.style";
import { useRouter } from "next/router";
// import localConsole from "@lib/utils/localConsole";

const menuList = [
  {
    path: "/",
    name: "홈",
  },
  {
    path: "/hospitalmap",
    name: "병원정보",
  },
  {
    path: "/community",
    name: "커뮤니티",
  },
  {
    path: "/feed",
    name: "피드",
  },
];

interface Props {
  isHeaderMenu?: boolean;
}

const Menu = ({ isHeaderMenu }: Props) => {
  const router = useRouter();

  return (
    <Menu.Wrap isHeaderMenu={isHeaderMenu || false}>
      <Menu.List currentPath={router.pathname} />
    </Menu.Wrap>
  );
};

Menu.defaultProps = {
  isHeaderMenu: false,
};

const Wrap = ({
  children,
  isHeaderMenu,
}: PropsWithChildren<{ isHeaderMenu: boolean }>) => {
  if (isHeaderMenu === true) {
    return <MenuListNav>{children}</MenuListNav>;
  }

  return <MenuListDiv>{children}</MenuListDiv>;
};

const List = ({ currentPath }: { currentPath: string }) => {
  const [clickedPath, setClickedPath] = useState(currentPath);

  useEffect(() => {
    if (currentPath !== clickedPath) {
      setClickedPath(currentPath);
    }
  }, [currentPath]);

  return (
    <>
      {menuList.map((menu) => {
        // localConsole?.log(menu.path.replace("/", ""), "menu.path.replace");
        // localConsole?.log(
        //   clickedPath.includes(menu.path.replace("/", "")),
        //   "includes"
        // );

        // localConsole?.log(
        //   clickedPath === menu.path,
        //   "clickedPath === menu.path"
        // );

        return (
          <Item
            key={menu.name}
            menu={menu}
            iscurrentpath={
              menu.path.replace("/", "") !== ""
                ? clickedPath.includes(menu.path.replace("/", ""))
                : clickedPath === menu.path
            }
            setClickedPath={setClickedPath}
          />
        );
      })}
    </>
  );
};

interface MenuItemProps {
  menu: {
    path: string;
    name: string;
  };
  iscurrentpath: boolean;
  setClickedPath: React.Dispatch<React.SetStateAction<string>>;
}

const Item = ({ menu, iscurrentpath, setClickedPath }: MenuItemProps) => {
  return (
    <MenuItemLink
      href={menu.path}
      iscurrentpath={iscurrentpath}
      onClick={(e) => {
        setClickedPath(menu.path);
      }}
    >
      {menu.name}
    </MenuItemLink>
  );
};

Menu.Wrap = React.memo(Wrap);
Menu.List = React.memo(List);
Menu.Item = React.memo(Item);

export default React.memo(Menu);
