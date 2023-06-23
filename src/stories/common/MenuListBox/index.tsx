import type { MouseEventHandler, PropsWithChildren } from "react";
import { MenuListDiv } from "./style";

interface Props {
  width?: string;
  style?: React.CSSProperties;
}

const MenuListBox = ({ width, style, children }: PropsWithChildren<Props>) => {
  return (
    <MenuListDiv style={style} width={width}>
      {children}
    </MenuListDiv>
  );
};

interface MenuItemButtonProps {
  style?: React.CSSProperties;
  onClick?: MouseEventHandler;
}

const MenuItemButton = ({
  style,
  onClick,
  children,
}: PropsWithChildren<MenuItemButtonProps>) => {
  return (
    <button
      style={style}
      className="menu-item-button"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
MenuListBox.DefaultItem = MenuItemButton;
MenuListBox.defaultProps = {
  width: "6.25rem",
  variant: "default",
};

export default MenuListBox;
