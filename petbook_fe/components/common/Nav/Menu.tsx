import React, { PropsWithChildren } from "react";
import { MenuItemLink, MenuListDiv, MenuListNav } from "./Menu.style";

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
  currentPath: string;
  isHeaderMenu?: boolean;
}

const Menu = ({ currentPath, isHeaderMenu }: Props) => {
  return (
    <Menu.Wrap isHeaderMenu={isHeaderMenu || false}>
      <Menu.List currentPath={currentPath} />
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
  return (
    <>
      {menuList.map((menu) => {
        return (
          <Item
            key={menu.name}
            menu={menu}
            iscurrentpath={
              menu.path.replace("/", "") !== ""
                ? currentPath.includes(menu.path.replace("/", ""))
                : currentPath === menu.path
            }
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
}

const Item = ({ menu, iscurrentpath }: MenuItemProps) => {
  return (
    <MenuItemLink href={menu.path} iscurrentpath={iscurrentpath}>
      {menu.name}
    </MenuItemLink>
  );
};

Menu.Wrap = React.memo(Wrap);
Menu.List = React.memo(List);
Menu.Item = React.memo(Item);

export default React.memo(Menu);
