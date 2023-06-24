import React, { useState } from "react";
import ThreeDotsVertical from "../../Icon/ThreeDotsVertical";
import OnClickOutside from "../OnClickOutside";
import { KebabMenuBox, KebabMenuButton, KebabMenuListWrapper } from "./style";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  menuStyle?: React.CSSProperties;
  boxPosition?: {
    left?: string;
    right?: string;
  };
  ButtonIcon?: React.ReactNode;
  MenuListBox: React.ReactNode;
}

const KebabMenu = ({
  width,
  height,
  color,
  menuStyle,
  MenuListBox,
  boxPosition,
  ButtonIcon,
}: Props) => {
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
          {ButtonIcon || <ThreeDotsVertical width="100%" height="100%" />}
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
