import React, { type MouseEventHandler, useState } from "react";
import ThreeDotsVertical from "../../Icon/ThreeDotsVertical";
import OnClickOutside from "../OnClickOutside";
import { KebabMenuBox, KebabMenuButton, MenuListDiv } from "./style";

interface MenuListBoxProps {
  top?: string;
  menuList: {
    name: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }[];
}

type KebabMenuProps =
  | {
      width?: string;
      height?: string;
      menuStyle?: React.CSSProperties;
      MenuListBox: React.ReactNode;
    }
  | {
      width?: string;
      height?: string;
      menuStyle?: React.CSSProperties;
      menuList: MenuListBoxProps["menuList"];
    };

const KebabMenu = ({ width, height, menuStyle, ...props }: KebabMenuProps) => {
  const [show, setShow] = useState(false);
  const onClickToggle = () => setShow((state) => !state);
  const onClickClose = () => setShow(false);
  return (
    <OnClickOutside trigger={onClickClose}>
      <KebabMenuBox width={width} height={height} style={menuStyle}>
        <KebabMenuButton type="button" onClick={onClickToggle}>
          <ThreeDotsVertical />
        </KebabMenuButton>
        {show &&
          ("menuList" in props ? (
            <KebabMenu.ListBox menuList={props.menuList} top={width} />
          ) : (
            props.MenuListBox
          ))}
      </KebabMenuBox>
    </OnClickOutside>
  );
};

export const DefaultMenuListBox = ({ menuList, top }: MenuListBoxProps) => {
  return (
    <MenuListDiv top={top}>
      {menuList.map(({ name, onClick }) => (
        <button
          className="menu-item-button"
          type="button"
          onClick={onClick}
          key={name}
        >
          {name}
        </button>
      ))}
    </MenuListDiv>
  );
};

KebabMenu.ListBox = DefaultMenuListBox;
KebabMenu.defaultProps = {
  width: "1.5rem",
  height: "1.5rem",
};

export default KebabMenu;
