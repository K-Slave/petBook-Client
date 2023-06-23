import React, { useState } from "react";
import ThreeDotsVertical from "../../Icon/ThreeDotsVertical";
import OnClickOutside from "../OnClickOutside";
import { KebabMenuBox, KebabMenuButton, KebabMenuListWrapper } from "./style";
import MenuListBox from "../MenuListBox";

interface KebabMenuProps {
  width?: string;
  height?: string;
  color?: string;
  menuStyle?: React.CSSProperties;
  boxPosition?: {
    left?: string;
    right?: string;
  };
  MenuListBox: React.ReactNode;
}

const KebabMenu = ({
  width,
  height,
  color,
  menuStyle,
  MenuListBox,
  boxPosition,
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
        <KebabMenuListWrapper
          show={show}
          top={width}
          left={boxPosition?.left}
          right={boxPosition?.right}
        >
          {MenuListBox}
        </KebabMenuListWrapper>
      </KebabMenuBox>
    </OnClickOutside>
  );
};
KebabMenu.defaultProps = {
  width: "1.5rem",
  height: "1.5rem",
  color: "var(--black_04)",
  boxPosition: {
    right: "0",
  },
};

export default KebabMenu;
