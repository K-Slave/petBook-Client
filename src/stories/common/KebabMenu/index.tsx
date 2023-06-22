import React, { type MouseEventHandler, useState } from "react";
import ThreeDotsVertical from "../../Icon/ThreeDotsVertical";
import OnClickOutside from "../OnClickOutside";
import {
  KebabMenuBox,
  KebabMenuButton,
  KebabMenuListWrapper,
  DefaultMenuListDiv,
} from "./style";

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
      color?: string;
      menuStyle?: React.CSSProperties;
      MenuListBox: React.ReactNode;
      positionLeftStyle: string;
      positionRightStyle?: string;
    }
  | {
      width?: string;
      height?: string;
      color?: string;
      menuStyle?: React.CSSProperties;
      menuList: MenuListBoxProps["menuList"];
    };

const KebabMenu = ({
  width,
  height,
  color,
  menuStyle,
  ...props
}: KebabMenuProps) => {
  const [show, setShow] = useState(false);
  const onClickToggle = () => setShow((state) => !state);
  const onClickClose = () => setShow(false);
  return (
    <OnClickOutside trigger={onClickClose}>
      <KebabMenuBox
        width={width}
        height={height}
        color={color}
        style={menuStyle}
      >
        <KebabMenuButton type="button" onClick={onClickToggle}>
          <ThreeDotsVertical />
        </KebabMenuButton>
        {show &&
          ("menuList" in props ? (
            <KebabMenu.ListBox menuList={props.menuList} top={width} />
          ) : (
            <KebabMenuListWrapper
              top={width}
              left={props.positionLeftStyle}
              right={props.positionRightStyle}
            >
              {props.MenuListBox}
            </KebabMenuListWrapper>
          ))}
      </KebabMenuBox>
    </OnClickOutside>
  );
};

export const DefaultMenuListBox = ({ menuList, top }: MenuListBoxProps) => {
  return (
    <DefaultMenuListDiv top={top}>
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
    </DefaultMenuListDiv>
  );
};

KebabMenu.ListBox = DefaultMenuListBox;
KebabMenu.defaultProps = {
  width: "1.5rem",
  height: "1.5rem",
  color: "var(--black_04)",
  positionRightStyle: 0,
};

export default KebabMenu;
