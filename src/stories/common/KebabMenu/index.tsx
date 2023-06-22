import React, { type MouseEventHandler, useState } from "react";
import ThreeDotsVertical from "../../Icon/ThreeDotsVertical";
import OnClickOutside from "../OnClickOutside";
import {
  KebabMenuBox,
  KebabMenuButton,
  KebabMenuListWrapper,
  DefaultMenuListDiv,
} from "./style";

type KebabMenuProps = {
  width?: string;
  height?: string;
  color?: string;
  menuStyle?: React.CSSProperties;
  MenuListBox: React.ReactNode;
  boxPositionLeftStyle?: string;
  boxPositionRightStyle?: string;
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
        {show && (
          <KebabMenuListWrapper
            top={width}
            left={props.boxPositionLeftStyle}
            right={props.boxPositionRightStyle}
          >
            {props.MenuListBox}
          </KebabMenuListWrapper>
        )}
      </KebabMenuBox>
    </OnClickOutside>
  );
};

interface MenuListBoxProps {
  menuList: {
    name: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }[];
  style?: React.CSSProperties;
}

const DefaultMenuListBox = ({ menuList, style }: MenuListBoxProps) => {
  return (
    <DefaultMenuListDiv style={style}>
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

KebabMenu.DefaultListBox = DefaultMenuListBox;
KebabMenu.defaultProps = {
  width: "1.5rem",
  height: "1.5rem",
  color: "var(--black_04)",
  boxPositionRightStyle: "0",
};

export default KebabMenu;
