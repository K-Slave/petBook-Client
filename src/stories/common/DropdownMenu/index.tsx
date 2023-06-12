import React, { type MouseEventHandler, useState } from "react";
import ThreeDotsVerticalIcon from "../../Icon/ThreeDotsVertical";
import OnClickOutside from "../OnClickOutside";
import { MenuBox, MenuButton, MenuList } from "./DropdownMenu.styled";

interface Props {
  menuList: {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }[];
}

const DropdownMenu = ({ menuList }: Props) => {
  const [show, setShow] = useState(false);
  const onToggle = () => setShow((state) => !state);
  const onClose = () => setShow(false);
  return (
    <OnClickOutside trigger={onClose}>
      <MenuBox>
        <MenuButton type="button" onClick={onToggle}>
          <ThreeDotsVerticalIcon />
        </MenuButton>
        {show && (
          <MenuList>
            {menuList.map(({ name, onClick }) => (
              <button type="button" onClick={onClick} key={name}>
                {name}
              </button>
            ))}
          </MenuList>
        )}
      </MenuBox>
    </OnClickOutside>
  );
};

export default DropdownMenu;
